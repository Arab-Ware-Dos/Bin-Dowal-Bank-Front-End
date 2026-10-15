"use client"

import "leaflet/dist/leaflet.css"

import { useEffect, useRef, useCallback } from "react"
import type { Map as LeafletMap, Marker as LeafletMarker, LeafletMouseEvent } from "leaflet"

// Custom SVG marker for the picker
const PICKER_PIN_SVG = `
<svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <filter id="picker-shadow" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#0b0d36" flood-opacity="0.35"/>
  </filter>
  <path d="M20 2C10.059 2 2 10.059 2 20c0 13 18 28 18 28s18-15 18-28C38 10.059 29.941 2 20 2z" fill="#262b80" filter="url(#picker-shadow)"/>
  <circle cx="20" cy="20" r="8" fill="white"/>
  <circle cx="20" cy="20" r="4" fill="#262b80"/>
</svg>
`

export interface LocationMapPickerInnerProps {
  latitude: number
  longitude: number
  zoom?: number
  isAr?: boolean
  onChange: (coords: { latitude: number; longitude: number }) => void
}

export default function LocationMapPickerInner({
  latitude,
  longitude,
  zoom = 13,
  isAr = true,
  onChange,
}: LocationMapPickerInnerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markerRef = useRef<LeafletMarker | null>(null)
  const isUpdatingFromProps = useRef(false)

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return

    let isMounted = true
    let mapInstance: LeafletMap | null = null

    const initMap = async () => {
      const L = (await import("leaflet")).default

      if (!isMounted || !mapContainerRef.current) return

      const container = mapContainerRef.current

      // Clean up previous Leaflet instance if attached
      // @ts-ignore
      if (container._leaflet_id) {
        // @ts-ignore
        container._leaflet_id = null
      }

      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }

      const map = L.map(container, {
        center: [latitude || 14.5322, longitude || 49.1255],
        zoom: zoom,
        zoomControl: false,
        attributionControl: false,
      })

      mapInstance = map
      mapRef.current = map

      // OpenStreetMap Free Tile Layer (no watermark, no API key needed)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Zoom control at bottom right
      L.control.zoom({ position: "bottomright" }).addTo(map)

      // Attribution at bottom left
      L.control
        .attribution({ position: "bottomleft", prefix: false })
        .addTo(map)
        .setPrefix("© OpenStreetMap")

      // Custom DivIcon for Draggable Pin
      const pinIcon = L.divIcon({
        html: PICKER_PIN_SVG,
        className: "picker-pin-icon",
        iconSize: [40, 50],
        iconAnchor: [20, 50],
        popupAnchor: [0, -50],
      })

      // Add Draggable Marker
      const marker = L.marker([latitude || 14.5322, longitude || 49.1255], {
        icon: pinIcon,
        draggable: true,
        autoPan: true,
      }).addTo(map)

      markerRef.current = marker

      // Tooltip to inform user they can drag
      marker
        .bindTooltip(
          isAr ? "اسحب لتغيير الموقع" : "Drag to change location",
          {
            permanent: false,
            direction: "top",
            offset: [0, -50],
          }
        )

      // Event: Marker dragged
      marker.on("dragend", () => {
        const position = marker.getLatLng()
        onChange({
          latitude: Number(position.lat.toFixed(6)),
          longitude: Number(position.lng.toFixed(6)),
        })
      })

      // Event: Click anywhere on map to set position
      map.on("click", (e: LeafletMouseEvent) => {
        const { lat, lng } = e.latlng
        marker.setLatLng([lat, lng])
        onChange({
          latitude: Number(lat.toFixed(6)),
          longitude: Number(lng.toFixed(6)),
        })
      })

      // Invalidate size to avoid gray tile render issues
      setTimeout(() => {
        if (isMounted && map) {
          map.invalidateSize()
        }
      }, 250)
    }

    initMap()

    return () => {
      isMounted = false
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        markerRef.current = null
      } else if (mapInstance) {
        ;(mapInstance as LeafletMap).remove()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync marker and view when coordinates change from outside (e.g. manual text input)
  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return
    const currentLatLng = markerRef.current.getLatLng()

    const diffLat = Math.abs(currentLatLng.lat - latitude)
    const diffLng = Math.abs(currentLatLng.lng - longitude)

    // Only update if difference is meaningful to prevent infinite loop while dragging
    if (diffLat > 0.0001 || diffLng > 0.0001) {
      markerRef.current.setLatLng([latitude, longitude])
      mapRef.current.panTo([latitude, longitude], { animate: true, duration: 0.6 })
    }
  }, [latitude, longitude])

  return (
    <>
      <style>{`
        .picker-pin-icon {
          transition: transform 0.15s ease-out;
          cursor: grab;
        }
        .picker-pin-icon:active {
          cursor: grabbing;
        }
        .leaflet-control-zoom {
          border: none !important;
          border-radius: 12px !important;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(11,13,54,0.12) !important;
        }
        .leaflet-control-zoom-in,
        .leaflet-control-zoom-out {
          border: none !important;
          background: white !important;
          color: #262b80 !important;
          font-size: 18px !important;
          font-weight: 500 !important;
          width: 36px !important;
          height: 36px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .leaflet-control-zoom-in:hover,
        .leaflet-control-zoom-out:hover {
          background: #f8f9fc !important;
        }
        .leaflet-control-attribution {
          background: rgba(255,255,255,0.85) !important;
          border-radius: 8px !important;
          font-size: 10px !important;
          padding: 2px 8px !important;
          backdrop-filter: blur(4px);
        }
      `}</style>
      <div ref={mapContainerRef} className="h-full w-full" />
    </>
  )
}
