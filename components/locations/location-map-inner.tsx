"use client"

import "leaflet/dist/leaflet.css"

import { useEffect, useRef, useCallback } from "react"
import type { LocationItem } from "@/types/locations"
import type { Map as LeafletMap, Marker, DivIcon } from "leaflet"

// ─── Marker SVG generators ────────────────────────────────

const BRANCH_ICON_SVG = `
<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0b0d36" flood-opacity="0.22"/>
  </filter>
  <path d="M18 2C10.268 2 4 8.268 4 16c0 10.5 14 26 14 26s14-15.5 14-26C32 8.268 25.732 2 18 2z" fill="#262b80" filter="url(#shadow)"/>
  <circle cx="18" cy="16" r="8" fill="white" opacity="0.92"/>
  <path d="M13 14h10M18 11v10M15 14v4h6v-4" stroke="#262b80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`

const ATM_ICON_SVG = `
<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0b0d36" flood-opacity="0.22"/>
  </filter>
  <path d="M18 2C10.268 2 4 8.268 4 16c0 10.5 14 26 14 26s14-15.5 14-26C32 8.268 25.732 2 18 2z" fill="#7a1f3d" filter="url(#shadow)"/>
  <circle cx="18" cy="16" r="8" fill="white" opacity="0.92"/>
  <rect x="12" y="12" width="12" height="8" rx="1.5" stroke="#7a1f3d" stroke-width="1.5" fill="none"/>
  <path d="M15 17h6M18 14v1.5" stroke="#7a1f3d" stroke-width="1.3" stroke-linecap="round"/>
</svg>`

const BRANCH_SELECTED_SVG = `
<svg width="42" height="52" viewBox="0 0 42 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#0b0d36" flood-opacity="0.35"/>
  </filter>
  <path d="M21 2C11.059 2 3 10.059 3 20c0 12.5 18 30 18 30s18-17.5 18-30C39 10.059 30.941 2 21 2z" fill="#262b80" filter="url(#shadow)"/>
  <circle cx="21" cy="20" r="10" fill="white"/>
  <path d="M16 18h10M21 14v12M18 18v5h6v-5" stroke="#262b80" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`

const ATM_SELECTED_SVG = `
<svg width="42" height="52" viewBox="0 0 42 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#0b0d36" flood-opacity="0.35"/>
  </filter>
  <path d="M21 2C11.059 2 3 10.059 3 20c0 12.5 18 30 18 30s18-17.5 18-30C39 10.059 30.941 2 21 2z" fill="#7a1f3d" filter="url(#shadow)"/>
  <circle cx="21" cy="20" r="10" fill="white"/>
  <rect x="14" y="15" width="14" height="10" rx="2" stroke="#7a1f3d" stroke-width="1.6" fill="none"/>
  <path d="M17 22h8M21 17v2" stroke="#7a1f3d" stroke-width="1.5" stroke-linecap="round"/>
</svg>`

function makeDivIcon(svg: string, size: [number, number], anchor: [number, number], L: typeof import("leaflet")): DivIcon {
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: size,
    iconAnchor: anchor,
    popupAnchor: [0, -anchor[1]],
  })
}

interface LocationMapInnerProps {
  locations: LocationItem[]
  selectedId: string | null
  isAr: boolean
  onSelect: (id: string) => void
}

export default function LocationMapInner({
  locations,
  selectedId,
  isAr,
  onSelect,
}: LocationMapInnerProps) {
  const mapRef = useRef<LeafletMap | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const markersRef = useRef<Map<string, Marker>>(new Map())

  const getDirections = useCallback(
    (loc: LocationItem) =>
      `https://www.google.com/maps/dir/?api=1&destination=${loc.latitude},${loc.longitude}`,
    []
  )

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) return

    let isMounted = true
    let mapInstance: LeafletMap | null = null

    const init = async () => {
      const L = (await import("leaflet")).default

      if (!isMounted || !mapContainerRef.current) return

      const container = mapContainerRef.current

      // Clean up previous instance if attached to DOM container
      // @ts-ignore
      if (container._leaflet_id) {
        // @ts-ignore
        container._leaflet_id = null
      }

      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }

      // Fix default icon paths for Next.js
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      })

      const map = L.map(container, {
        center: [14.5322, 49.1255], // Mukalla
        zoom: 6,
        zoomControl: false,
        attributionControl: false,
      })

      mapInstance = map
      mapRef.current = map

      // CartoDB Positron tiles — clean, minimal, premium look
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map)

      // Custom zoom control position
      L.control.zoom({ position: "bottomright" }).addTo(map)

      // Attribution
      L.control
        .attribution({
          position: "bottomleft",
          prefix: false,
        })
        .addTo(map)
        .setPrefix("© CartoDB | © OpenStreetMap")

      renderMarkers(L, map)

      // Invalidate size in case container size changed (e.g. mobile tab switch)
      setTimeout(() => {
        if (isMounted && map) {
          map.invalidateSize()
        }
      }, 250)
    }

    init()

    return () => {
      isMounted = false
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        markersRef.current.clear()
      } else if (mapInstance) {
        (mapInstance as LeafletMap).remove()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update markers when locations change
  useEffect(() => {
    if (!mapRef.current) return
    import("leaflet").then(({ default: L }) => {
      renderMarkers(L, mapRef.current!)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations, isAr])

  // Pan to selected location + update marker styles
  useEffect(() => {
    if (!mapRef.current || !selectedId) return
    const loc = locations.find((l) => l.id === selectedId)
    if (!loc) return

    mapRef.current.flyTo([loc.latitude, loc.longitude], 14, {
      duration: 1.2,
      easeLinearity: 0.25,
    })

    // Update marker icons to show selection
    import("leaflet").then(({ default: L }) => {
      markersRef.current.forEach((marker, id) => {
        const location = locations.find((l) => l.id === id)
        if (!location) return
        if (id === selectedId) {
          const icon =
            location.type === "branch"
              ? makeDivIcon(BRANCH_SELECTED_SVG, [42, 52], [21, 52], L)
              : makeDivIcon(ATM_SELECTED_SVG, [42, 52], [21, 52], L)
          marker.setIcon(icon)
          marker.openPopup()
        } else {
          const icon =
            location.type === "branch"
              ? makeDivIcon(BRANCH_ICON_SVG, [36, 44], [18, 44], L)
              : makeDivIcon(ATM_ICON_SVG, [36, 44], [18, 44], L)
          marker.setIcon(icon)
        }
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, locations])

  function renderMarkers(L: typeof import("leaflet"), map: LeafletMap) {
    // Remove old markers
    markersRef.current.forEach((m) => m.remove())
    markersRef.current.clear()

    locations.forEach((loc) => {
      const isSelected = loc.id === selectedId
      const isBranch = loc.type === "branch"

      const icon = isSelected
        ? isBranch
          ? makeDivIcon(BRANCH_SELECTED_SVG, [42, 52], [21, 52], L)
          : makeDivIcon(ATM_SELECTED_SVG, [42, 52], [21, 52], L)
        : isBranch
        ? makeDivIcon(BRANCH_ICON_SVG, [36, 44], [18, 44], L)
        : makeDivIcon(ATM_ICON_SVG, [36, 44], [18, 44], L)

      const name = isAr ? loc.nameAr : loc.nameEn
      const city = isAr ? loc.cityAr : loc.cityEn
      const district = isAr ? loc.districtAr : loc.districtEn
      const hours = isAr ? loc.workingHours?.ar : loc.workingHours?.en
      const typeLabel = isBranch
        ? isAr
          ? "فرع"
          : "Branch"
        : isAr
        ? "صراف آلي"
        : "ATM"
      const typeColor = isBranch ? "#262b80" : "#7a1f3d"

      const popupContent = `
        <div style="
          font-family: 'Somar Sans', sans-serif;
          direction: ${isAr ? "rtl" : "ltr"};
          min-width: 220px;
          max-width: 260px;
          padding: 4px;
        ">
          <div style="
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: ${typeColor}14;
            color: ${typeColor};
            font-size: 11px;
            font-weight: 700;
            padding: 2px 10px;
            border-radius: 999px;
            margin-bottom: 8px;
          ">${typeLabel}</div>
          <h4 style="
            font-size: 14px;
            font-weight: 700;
            color: #0b0d36;
            margin: 0 0 4px;
            line-height: 1.3;
          ">${name}</h4>
          <p style="
            font-size: 12px;
            color: #64748b;
            margin: 0 0 2px;
          ">${district}، ${city}</p>
          ${
            hours
              ? `<p style="font-size: 11px; color: #94a3b8; margin: 4px 0 0;">${hours}</p>`
              : ""
          }
          <a
            href="${`https://www.google.com/maps/dir/?api=1&destination=${loc.latitude},${loc.longitude}`}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              display: inline-flex;
              align-items: center;
              gap: 6px;
              margin-top: 10px;
              padding: 6px 14px;
              background: #262b80;
              color: white;
              font-size: 12px;
              font-weight: 600;
              border-radius: 10px;
              text-decoration: none;
              transition: background 0.2s;
            "
          >${isAr ? "الاتجاهات" : "Get Directions"}</a>
        </div>
      `

      const marker = L.marker([loc.latitude, loc.longitude], { icon })
        .addTo(map)
        .bindPopup(popupContent, {
          maxWidth: 280,
          className: "location-popup",
          closeButton: true,
          autoPan: true,
        })

      marker.on("click", () => {
        onSelect(loc.id)
      })

      markersRef.current.set(loc.id, marker)
    })
  }

  return (
    <>
      <style>{`
        .location-popup .leaflet-popup-content-wrapper {
          border-radius: 16px;
          border: 1px solid rgba(220, 228, 240, 0.9);
          box-shadow: 0 16px 48px rgba(11,13,54,0.14);
          padding: 16px;
        }
        .location-popup .leaflet-popup-content {
          margin: 0;
        }
        .location-popup .leaflet-popup-tip {
          background: white;
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
          font-weight: 400 !important;
          line-height: 32px !important;
          width: 36px !important;
          height: 36px !important;
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
