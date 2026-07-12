"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type CardVariant = "debit" | "credit" | "prepaid" | "noor"

const variants: Record<CardVariant, {
  bg: string
  chip: string
  accent: string
  label: string
  labelEn: string
  network: "mc" | "visa" | null
  numberPrefix: string
}> = {
  debit: {
    bg: "from-[#324198] via-[#2d3185] to-[#1a1f3d]",
    chip: "#c0c8e0",
    accent: "#a0aac8",
    label: "بطاقة الخصم الفوري",
    labelEn: "DEBIT CARD",
    network: "mc",
    numberPrefix: "5412",
  },
  credit: {
    bg: "from-[#111117] via-[#1c1a40] to-[#0d0d14]",
    chip: "#c9a96e",
    accent: "#c9a96e",
    label: "البطاقة الائتمانية",
    labelEn: "CREDIT CARD",
    network: "mc",
    numberPrefix: "5523",
  },
  prepaid: {
    bg: "from-[#0f3d4e] via-[#165a6e] to-[#0a2d3a]",
    chip: "#8dd8e8",
    accent: "#8dd8e8",
    label: "بطاقة الدفع المسبق",
    labelEn: "PREPAID CARD",
    network: "mc",
    numberPrefix: "4001",
  },
  noor: {
    bg: "from-[#2a1a3e] via-[#3d2255] to-[#1e1030]",
    chip: "#e8c4d4",
    accent: "#e8c4d4",
    label: "بطاقة نور",
    labelEn: "NOOR CARD",
    network: "mc",
    numberPrefix: "6250",
  },
}

interface CardMockupProps {
  variant: CardVariant
  className?: string
  float?: boolean
}

export function CardMockup({ variant, className, float = true }: CardMockupProps) {
  const v = variants[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative", className)}
    >
      {/* card glow */}
      <div className={cn(
        "absolute inset-0 -z-10 blur-3xl opacity-40 rounded-3xl scale-90",
        `bg-gradient-to-br ${v.bg}`
      )} />

      {/* floating card */}
      <motion.div
        animate={float ? { y: [0, -10, 0] } : undefined}
        transition={float ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : undefined}
        className="relative"
      >
        {/* shadow card (depth) */}
        <div
          className={cn(
            "absolute top-4 start-4 w-full h-full rounded-[22px] opacity-30 blur-sm bg-gradient-to-br",
            v.bg
          )}
        />

        {/* main card */}
        <div
          className={cn(
            "relative w-[340px] h-[210px] rounded-[22px] p-6 overflow-hidden",
            "bg-gradient-to-br shadow-[0_30px_60px_rgba(0,0,0,0.5)]",
            v.bg
          )}
        >
          {/* shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/6 to-white/0 pointer-events-none" />
          {/* edge highlight */}
          <div className="absolute inset-px rounded-[21px] border border-white/10 pointer-events-none" />

          {/* top row: bank name + network logo */}
          <div className="flex items-start justify-between mb-auto">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                {/* BD logo mark */}
                <div className="w-7 h-7 rounded-md bg-white/15 flex items-center justify-center">
                  <span className="text-[10px] font-black text-white tracking-tight">BD</span>
                </div>
                <span className="text-[9px] font-semibold text-white/70 uppercase tracking-[0.18em]">Bin Dowal</span>
              </div>
              <p className="text-[7px] text-white/40 uppercase tracking-[0.22em]">Islamic Microfinance Bank</p>
            </div>

            {/* Mastercard circles */}
            {v.network === "mc" && (
              <div className="flex items-center -space-x-2 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-[#eb001b] opacity-90" />
                <div className="w-8 h-8 rounded-full bg-[#f79e1b] opacity-90 mix-blend-hard-light" />
              </div>
            )}
          </div>

          {/* chip */}
          <div className="mt-4 mb-3">
            <div
              className="w-10 h-7 rounded-[5px] border border-white/20"
              style={{
                background: `linear-gradient(135deg, ${v.chip}55 0%, ${v.chip}33 40%, ${v.chip}66 100%)`,
                boxShadow: `0 2px 8px ${v.chip}22`,
              }}
            >
              <div className="w-full h-full rounded-[5px] grid grid-cols-2 gap-px p-1 opacity-60">
                <div className="border border-current rounded-sm opacity-40" style={{ borderColor: v.chip }} />
                <div className="border border-current rounded-sm opacity-40" style={{ borderColor: v.chip }} />
                <div className="border border-current rounded-sm opacity-40" style={{ borderColor: v.chip }} />
                <div className="border border-current rounded-sm opacity-40" style={{ borderColor: v.chip }} />
              </div>
            </div>
          </div>

          {/* card number */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-white/80 tracking-[0.2em]">{v.numberPrefix}</span>
            <span className="flex gap-1">
              {[...Array(4)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-white/50" />)}
            </span>
            <span className="flex gap-1">
              {[...Array(4)].map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-white/50" />)}
            </span>
            <span className="text-sm font-mono text-white/80 tracking-[0.2em]">3791</span>
          </div>

          {/* bottom row */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[7px] uppercase tracking-[0.18em] text-white/40 mb-0.5">Card Holder</p>
              <p className="text-[11px] font-semibold text-white/80 tracking-wide uppercase">BANK CLIENT</p>
            </div>
            <div className="text-end">
              <p className="text-[7px] uppercase tracking-[0.18em] text-white/40 mb-0.5">Expires</p>
              <p className="text-[11px] font-semibold text-white/80">12/27</p>
            </div>
          </div>

          {/* card type label — subtle watermark */}
          <div className="absolute bottom-5 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 pointer-events-none">
            <span className="text-[8px] uppercase tracking-[0.35em] text-white/15 whitespace-nowrap font-medium">
              {v.labelEn}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
