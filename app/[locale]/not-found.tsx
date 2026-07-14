"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function LocalizedNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-8xl font-bold text-slate-200">404</span>
      </motion.div>
      <h1 className="mt-4 text-2xl font-bold text-slate-800">الصفحة غير موجودة | Page Not Found</h1>
      <p className="mt-2 text-slate-500">عذراً، الصفحة المطلوبة غير متوفرة أو قيد الإنشاء.</p>
      <Button asChild className="mt-8 bg-[#2d3185] hover:bg-[#1e2365]">
        <Link href="/">
          <Home className="me-2 h-4 w-4" />
          العودة للرئيسية
        </Link>
      </Button>
    </div>
  )
}
