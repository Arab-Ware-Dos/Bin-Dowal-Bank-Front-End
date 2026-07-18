"use client";

import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const viewport = { once: true, amount: 0.2 };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

type TransferTabsClientProps = {
  tabs: Array<{
    id: string;
    label: string;
    title?: string;
    description?: string;
    items: Array<{
      id: string;
      title: string;
    }>;
  }>;
  title: string;
  description: string;
  eyebrow: string;
};

export function TransferTabsClient({ tabs, title, description, eyebrow }: TransferTabsClientProps) {
  const { locale } = useI18n();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const [activeChannelId, setActiveChannelId] = useState<string | null>(
    tabs?.[0]?.id ?? null
  );

  const activeChannel = useMemo(
    () => tabs?.find((c) => c.id === activeChannelId) ?? tabs?.[0],
    [activeChannelId, tabs]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    const lastIndex = tabs.length - 1;

    switch (e.key) {
      case "ArrowRight":
        nextIndex = dir === "rtl" ? index - 1 : index + 1;
        break;
      case "ArrowLeft":
        nextIndex = dir === "rtl" ? index + 1 : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    if (nextIndex < 0) nextIndex = lastIndex;
    if (nextIndex > lastIndex) nextIndex = 0;

    const nextTab = tabs[nextIndex];
    setActiveChannelId(nextTab.id);

    // Focus the activated tab
    setTimeout(() => {
      const nextTabEl = document.getElementById(`channel-tab-${nextTab.id}`);
      nextTabEl?.focus();
    }, 0);

    e.preventDefault();
  };

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]" dir={dir}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="mb-3 inline-flex items-center rounded-full border border-[#324198]/12 bg-[#324198]/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#324198]">
          {eyebrow}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-orientation="horizontal">
          {tabs.map((item, index) => {
            const isActive = item.id === activeChannelId;
            const tabId = `channel-tab-${item.id}`;
            const panelId = `channel-panel-${item.id}`;

            return (
              <button
                key={item.id}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveChannelId(item.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324198] focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-[#324198]/15 bg-[#324198] text-white shadow-[0_16px_32px_rgba(50,65,152,0.22)]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#324198]/15 hover:text-[#324198]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {activeChannel && (
        <motion.div
          key={activeChannel.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          id={`channel-panel-${activeChannel.id}`}
          role="tabpanel"
          aria-labelledby={`channel-tab-${activeChannel.id}`}
          tabIndex={0}
          className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#324198] focus-visible:ring-offset-2"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#24357f_0%,#324198_55%,#6f7fd8_100%)]" />
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#324198]/[0.05] blur-3xl" />

          <div className="relative z-10">
            <div className="mb-7 flex items-start gap-4">
              <div>
                {activeChannel.title && (
                  <h3 className="text-xl font-semibold text-slate-950">
                    {activeChannel.title}
                  </h3>
                )}
                {activeChannel.description && (
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {activeChannel.description}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-1">
              {activeChannel.items && activeChannel.items.length > 0 && (
                <div className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] p-5">
                  <ul className="space-y-3">
                    {activeChannel.items.map((item, index) => (
                      <li key={`${index}`} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#324198]/10 text-[#324198]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm leading-7 text-slate-600">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
