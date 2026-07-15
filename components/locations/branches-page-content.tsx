"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { PageHero } from "@/components/ui/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { branches } from "@/data/mock-data"
import { 
  MapPin, 
  Phone, 
  Clock, 
  Search,
  Navigation,
  Building2,
  Filter,
  AlertCircle
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const regions = [
  { id: "all", labelAr: "جميع المناطق", labelEn: "All Regions" },
  { id: "mukalla", labelAr: "المكلا", labelEn: "Mukalla" },
  { id: "aden", labelAr: "عدن", labelEn: "Aden" },
  { id: "taiz", labelAr: "تعز", labelEn: "Taiz" },
  { id: "sayun", labelAr: "سيئون", labelEn: "Sayun" },
  { id: "al-shihr", labelAr: "الشحر", labelEn: "Al-Shihr" }
]

export function BranchesPageContent() {
  const { t, locale, mode } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeRegion, setActiveRegion] = useState("all")
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)
  const [notification, setNotification] = useState<{ type: string; message: string } | null>(null)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = searchQuery === "" || 
      branch.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.addressAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.addressEn.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = activeRegion === "all" || branch.region === activeRegion
    return matchesSearch && matchesRegion
  })

  // Calculate distance between two coordinates
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371 // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLng = (lng2 - lng1) * Math.PI / 180
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return (R * c).toFixed(1)
  }

  // Handle directions
  const handleDirections = (branch: typeof branches[0]) => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`
    window.open(mapsUrl, '_blank')
    setNotification({
      type: 'success',
      message: locale === 'ar' 
        ? `جاري الانتقال إلى خريطة جوجل للاتجاهات إلى ${branch.nameAr}`
        : `Opening directions to ${branch.nameEn}`
    })
  }

  // Handle phone call
  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
    setNotification({
      type: 'success',
      message: locale === 'ar' 
        ? `جاري إجراء المكالمة إلى ${phone}`
        : `Calling ${phone}`
    })
  }

  // Handle use current location
  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ lat: latitude, lng: longitude })
          setNotification({
            type: 'success',
            message: locale === 'ar' 
              ? 'تم الحصول على موقعك الحالي بنجاح'
              : 'Your location has been detected successfully'
          })
        },
        () => {
          setNotification({
            type: 'error',
            message: locale === 'ar' 
              ? 'فشل الحصول على موقعك. يرجى تفعيل خدمات الموقع'
              : 'Failed to get your location. Please enable location services'
          })
        }
      )
    } else {
      setNotification({
        type: 'error',
        message: locale === 'ar' 
          ? 'متصفحك لا يدعم خدمات الموقع'
          : 'Your browser does not support location services'
      })
    }
  }

  // Find nearest branch
  const handleNearestBranch = () => {
    if (!userLocation) {
      setNotification({
        type: 'error',
        message: locale === 'ar' 
          ? 'يرجى تفعيل موقعك أولاً'
          : 'Please enable your location first'
      })
      return
    }

    const branchesWithDistance = filteredBranches.map(branch => ({
      ...branch,
      distance: parseFloat(calculateDistance(userLocation.lat, userLocation.lng, branch.lat, branch.lng))
    }))

    const nearest = branchesWithDistance.reduce((prev, current) => 
      current.distance < prev.distance ? current : prev
    )

    setSelectedBranch(nearest.id)
    const element = document.getElementById(`branch-${nearest.id}`)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    
    setNotification({
      type: 'success',
      message: locale === 'ar' 
        ? `أقرب فرع: ${nearest.nameAr} على بعد ${nearest.distance} كم`
        : `Nearest branch: ${nearest.nameEn} at ${nearest.distance} km away`
    })
  }

  // Handle ATM map
  const handleATMMap = () => {
    setNotification({
      type: 'success',
      message: locale === 'ar' 
        ? 'جاري فتح خريطة أجهزة الصراف الآلي'
        : 'Opening ATM locator map'
    })
    // In a real app, this would navigate to an ATM map page
  }

  // Handle contact
  const handleContact = () => {
    const phoneNumber = "920000123"
    window.location.href = `tel:${phoneNumber}`
    setNotification({
      type: 'success',
      message: locale === 'ar' 
        ? `جاري الاتصال برقم دعم العملاء`
        : `Calling customer support`
    })
  }

  return (
    <div className="min-h-screen">
      <PageHero
        title={locale === 'ar' ? "الفروع وأجهزة الصراف الآلي" : "Branches & ATMs"}
        subtitle={locale === 'ar' ? "ابحث عن أقرب فرع أو جهاز صراف آلي لبنك بن دول" : "Find the nearest Bin Dowal Bank branch or ATM"}
        breadcrumbs={[
          { labelKey: locale === 'ar' ? "الرئيسية" : "Home", href: "/" },
          { labelKey: locale === 'ar' ? "الفروع" : "Branches" }
        ]}
      />

      {/* Notification Toast */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 start-4 end-4 z-50 max-w-md mx-auto"
        >
          <Alert variant={notification.type === 'error' ? 'destructive' : 'default'}>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30 border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder={locale === 'ar' ? 'ابحث عن فرع أو موقع...' : 'Search for a branch or location...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ps-10 bg-background"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {regions.map((region) => (
                <Button
                  key={region.id}
                  variant={activeRegion === region.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveRegion(region.id)}
                  className={activeRegion === region.id ? "bg-[#262b80] hover:bg-[#0b0d36]" : "border-[#262b80]/20 text-[#262b80] hover:bg-[#262b80]/5"}
                >
                  {locale === 'ar' ? region.labelAr : region.labelEn}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {locale === 'ar' 
                ? `${filteredBranches.length} فرع`
                : `${filteredBranches.length} Branches`}
            </h2>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={handleUseLocation}
              >
                <Navigation className="h-4 w-4" />
                {locale === 'ar' ? 'استخدم موقعي' : 'Use My Location'}
              </Button>
              {userLocation && (
                <Button 
                  className="gap-2 bg-[#262b80] hover:bg-[#0b0d36] text-white"
                  onClick={handleNearestBranch}
                >
                  <MapPin className="h-4 w-4" />
                  {locale === 'ar' ? 'أقرب فرع' : 'Nearest Branch'}
                </Button>
              )}
            </div>
          </div>

          {filteredBranches.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBranches.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  id={`branch-${branch.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card 
                    className={`h-full border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      selectedBranch === branch.id ? 'ring-2 ring-[#262b80]' : ''
                    }`}
                    onClick={() => setSelectedBranch(branch.id === selectedBranch ? null : branch.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#262b80]/8 rounded-xl shrink-0">
                          <Building2 className="h-6 w-6 text-[#262b80]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-foreground truncate">
                              {locale === 'ar' ? branch.nameAr : branch.nameEn}
                            </h3>
                             {branch.isMainBranch && (
                              <span className="px-2 py-0.5 bg-[#262b80] text-white text-xs rounded-full shrink-0 font-medium">
                                {locale === 'ar' ? 'رئيسي' : 'Main'}
                              </span>
                            )}
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                              <span>{locale === 'ar' ? branch.addressAr : branch.addressEn}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="h-4 w-4 shrink-0" />
                              <span dir="ltr">{branch.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4 shrink-0" />
                              <span>
                                {locale === 'ar' ? branch.hoursAr : branch.hoursEn}
                              </span>
                            </div>
                          </div>

                          {/* Services */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {branch.services.slice(0, 3).map((service, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full"
                              >
                                {locale === 'ar' ? service.ar : service.en}
                              </span>
                            ))}
                            {branch.services.length > 3 && (
                              <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                                +{branch.services.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Distance if location available */}
                          {userLocation && (
                            <div className="text-xs text-muted-foreground mt-2">
                              {locale === 'ar' 
                                ? `المسافة: ${calculateDistance(userLocation.lat, userLocation.lng, branch.lat, branch.lng)} كم`
                                : `Distance: ${calculateDistance(userLocation.lat, userLocation.lng, branch.lat, branch.lng)} km`}
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex gap-2 mt-4">
                            <Button 
                              size="sm" 
                              className="flex-1 gap-1 bg-[#262b80] hover:bg-[#0b0d36] text-white transition-colors"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDirections(branch)
                              }}
                            >
                              <Navigation className="h-3 w-3" />
                              {locale === 'ar' ? 'الاتجاهات' : 'Directions'}
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1 gap-1"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCall(branch.phone)
                              }}
                            >
                              <Phone className="h-3 w-3" />
                              {locale === 'ar' ? 'اتصل' : 'Call'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Building2 className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground">
                {locale === 'ar' ? 'لم يتم العثور على فروع' : 'No branches found'}
              </h3>
              <p className="text-muted-foreground mt-2">
                {locale === 'ar' ? 'جرب البحث بكلمات مختلفة' : 'Try searching with different keywords'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ATM Locator CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {locale === 'ar' ? 'ابحث عن أجهزة الصراف الآلي' : 'Find ATMs'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {locale === 'ar' 
                    ? 'أكثر من 500 جهاز صراف آلي منتشرة في جميع أنحاء المملكة لخدمتك على مدار الساعة'
                    : 'Over 500 ATMs spread across the Kingdom to serve you 24/7'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="gap-2 bg-[#262b80] hover:bg-[#0b0d36] text-white transition-colors"
                    onClick={handleATMMap}
                  >
                    <MapPin className="h-5 w-5" />
                    {locale === 'ar' ? 'خريطة الصرافات' : 'ATM Map'}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => {
                      if (!userLocation) {
                        setNotification({
                          type: 'error',
                          message: locale === 'ar' 
                            ? 'يرجى تفعيل موقعك أولاً'
                            : 'Please enable your location first'
                        })
                        return
                      }
                      handleATMMap()
                    }}
                  >
                    <Navigation className="h-5 w-5" />
                    {locale === 'ar' ? 'أقرب صراف' : 'Nearest ATM'}
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('/images/new-pattern.png')", backgroundSize: "cover" }} />
                <div className="text-center relative z-10">
                  <div className="text-6xl font-bold text-white mb-2">500+</div>
                  <div className="text-xl text-white/70">
                    {locale === 'ar' ? 'جهاز صراف آلي' : 'ATM Machines'}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0b0d36] via-[#262b80] to-[#0b0d36] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Help?'}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              {locale === 'ar' 
                ? 'فريق خدمة العملاء لدينا جاهز لمساعدتك في أي وقت'
                : 'Our customer service team is ready to help you anytime'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2 bg-white text-[#0b0d36] hover:bg-slate-100"
                onClick={handleContact}
              >
                <Phone className="h-5 w-5" />
                920000123
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
