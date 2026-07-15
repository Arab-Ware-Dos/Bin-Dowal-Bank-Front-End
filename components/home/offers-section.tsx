"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";
import { getLocalizedHref } from "@/lib/localized-routes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight, Maximize2, Minimize2 } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const offers = [
  {
    id: 1,
    title: "SWIFT من بنك بن دول",
    linkText: "تعرف على المزيد",
    linkUrl: "#",
    image:
      "/images/Bank offers/642360503_893988063397878_7206043764320289943_n.jpg",
  },
  {
    id: 2,
    title: "مزيد من العروض مع خدماتنا المصرفية",
    linkText: "خدمات تمويل الافراد",
    linkUrl: "/financing#personal",
    image:
      "/images/Bank offers/643748046_896483119815039_6621849512253250172_n.jpg",
  },
  {
    id: 3,
    title: "خدمة الانترنت المصرفي من بنك بن دول",
    linkText: "بن دول أعمال",
    linkUrl: "#",
    image:
      "/images/Bank offers/645221273_898173776312640_2338958902839853111_n.jpg",
  },
  {
    id: 4,
    title: "رواتب الموظفين وتسوية مستحقات الموردين في مكان واحد",
    linkText: "بن دول أعمال",
    linkUrl: "#",
    image:
      "/images/Bank offers/646368287_900541486075869_8746448777301480131_n.jpg",
  },
];

export function OffersSection() {
  const { mode, locale } = useI18n();
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  const clearControlsTimer = useCallback(() => {
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
      controlsTimerRef.current = null;
    }
  }, []);

  const startHideControlsTimer = useCallback(() => {
    clearControlsTimer();

    if (!isFullscreen) return;

    controlsTimerRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 2000);
  }, [clearControlsTimer, isFullscreen]);

  const showControlsTemporarily = useCallback(() => {
    if (!isFullscreen) return;

    setControlsVisible(true);
    startHideControlsTimer();
  }, [isFullscreen, startHideControlsTimer]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenActive = document.fullscreenElement === sectionRef.current;
      setIsFullscreen(fullscreenActive);
      setControlsVisible(true);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!isFullscreen) {
      clearControlsTimer();
      setControlsVisible(true);
      return;
    }

    startHideControlsTimer();

    const section = sectionRef.current;
    if (!section) return;

    const handleActivity = () => {
      showControlsTemporarily();
    };

    section.addEventListener("mousemove", handleActivity);
    section.addEventListener("touchstart", handleActivity, { passive: true });
    section.addEventListener("click", handleActivity);
    window.addEventListener("keydown", handleActivity);

    return () => {
      clearControlsTimer();
      section.removeEventListener("mousemove", handleActivity);
      section.removeEventListener("touchstart", handleActivity);
      section.removeEventListener("click", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, [
    isFullscreen,
    clearControlsTimer,
    showControlsTemporarily,
    startHideControlsTimer,
  ]);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && sectionRef.current) {
        await sectionRef.current.requestFullscreen();
      } else if (document.fullscreenElement === sectionRef.current) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen toggle failed:", error);
    }
  };

  const buttonSize = isFullscreen ? "h-14 w-14" : "h-12 w-12";
  const iconSize = isFullscreen ? "h-6 w-6" : "h-5 w-5";

  const ControlButtons = () => (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => {
          swiperRef.current?.slidePrev();
          showControlsTemporarily();
        }}
        className={`relative z-40 flex ${buttonSize} items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/20`}
        aria-label="الشريحة السابقة"
        title="الشريحة السابقة"
      >
        <ArrowRight className={iconSize} />
      </button>

      <button
        type="button"
        onClick={() => {
          swiperRef.current?.slideNext();
          showControlsTemporarily();
        }}
        className={`relative z-40 flex ${buttonSize} items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/20`}
        aria-label="الشريحة التالية"
        title="الشريحة التالية"
      >
        <ArrowLeft className={iconSize} />
      </button>

      <button
        type="button"
        onClick={toggleFullscreen}
        className={`relative z-40 flex ${buttonSize} items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/20`}
        aria-label={isFullscreen ? "الخروج من ملء الشاشة" : "عرض للشاشات الاعلانية"}
        title={isFullscreen ? "الخروج من ملء الشاشة" : "عرض للشاشات الاعلانية"}
      >
        {isFullscreen ? (
          <Minimize2 className={iconSize} />
        ) : (
          <Maximize2 className={iconSize} />
        )}
      </button>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className={`relative overflow-hidden bg-[#324198] transition-all duration-300 ${
        isFullscreen ? "h-screen w-screen py-0" : "py-16 md:py-20"
      }`}
    >
      {isFullscreen && (
        <div
          className={`absolute left-6 top-6 z-50 transition-all duration-300 ${
            controlsVisible
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <ControlButtons />
        </div>
      )}

      <div
        className={`mx-auto w-full ${
          isFullscreen ? "h-full max-w-none px-0" : "fluid-container px-4"
        }`}
      >
        <div
          className={
            isFullscreen
              ? "h-full"
              : "flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 xl:gap-20"
          }
        >
          {!isFullscreen && (
            <div className="relative z-30 flex w-full shrink-0 flex-col items-start justify-between gap-6 lg:w-[280px] xl:w-[320px]">
              <div className="space-y-3">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/90 backdrop-blur-sm">
                  أحدث العروض
                </span>

                <h2 className="font-cairo text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                  عروض وإعلانات
                </h2>

                <p className="max-w-xs text-sm leading-7 text-white/80 md:text-base">
                  استعرض أحدث العروض والخدمات المصرفية المصممة للأفراد والأعمال.
                </p>
              </div>

              <ControlButtons />
            </div>
          )}

          <div
            className={`relative z-10 min-w-0 overflow-hidden ${
              isFullscreen ? "h-full w-full bg-black" : "flex-1"
            }`}
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: isFullscreen ? 7000 : 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={2000}
              effect={isFullscreen ? "fade" : "slide"}
              fadeEffect={{ crossFade: true }}
              loop={!isFullscreen}
              rewind={isFullscreen}
              centeredSlides={false}
              allowTouchMove={!isFullscreen}
              spaceBetween={isFullscreen ? 0 : 20}
              slidesPerView={1}
              breakpoints={
                isFullscreen
                  ? {
                      768: { slidesPerView: 1, spaceBetween: 0 },
                      1280: { slidesPerView: 1, spaceBetween: 0 },
                    }
                  : {
                      640: { slidesPerView: 1.35, spaceBetween: 20 },
                      768: { slidesPerView: 1.7, spaceBetween: 22 },
                      1024: { slidesPerView: 2, spaceBetween: 24 },
                      1280: { slidesPerView: 2.25, spaceBetween: 28 },
                    }
              }
              className={`overflow-hidden ${isFullscreen ? "h-full bg-black" : "!pb-4"}`}
            >
              {offers.map((offer) => (
                <SwiperSlide
                  key={offer.id}
                  className={isFullscreen ? "!h-full bg-black" : "h-auto"}
                >
                  {isFullscreen ? (
                    <article className="relative h-full w-full overflow-hidden bg-black">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        fill
                        priority={offer.id === 1}
                        sizes="100vw"
                        className="object-cover"
                      />

                      <div className="absolute inset-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-12 xl:p-16">
                        <div className="mx-auto max-w-6xl">
                          <div className="inline-flex max-w-4xl flex-col gap-4">
                            <span className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md md:text-base">
                              إعلان مصرفي
                            </span>

                            <h3 className="font-cairo text-2xl font-bold leading-tight text-white md:text-4xl xl:text-5xl">
                              {offer.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </article>
                  ) : (
                    <article className="group flex h-full flex-col">
                      <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-3xl">
                        <Image
                          src={offer.image}
                          alt={offer.title}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 38vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={offer.id === 1}
                        />
                      </div>

                      <div className="flex flex-1 flex-col items-center text-center">
                        <h3 className="mb-4 line-clamp-2 min-h-[56px] text-lg font-medium text-white md:text-xl">
                          {offer.title}
                        </h3>

                        <Link
                          href={mode === "url" ? getLocalizedHref(offer.linkUrl, locale) : offer.linkUrl}
                          className="mt-auto inline-flex items-center gap-2 text-white font-medium transition-colors hover:text-red-200"
                        >
                          <span>{offer.linkText}</span>
                          <ArrowLeft className="h-5 w-5" />
                        </Link>
                      </div>
                    </article>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}