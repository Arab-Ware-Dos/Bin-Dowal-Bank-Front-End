import dynamic from "next/dynamic";
import React from "react";

// The registry maps a string ID to a Next.js dynamic import.
// This ensures that the custom components are only loaded when required by the page data.
export const customSectionsRegistry: Record<string, React.ComponentType<any>> = {
  "bin-dowal-pay-app": dynamic(() =>
    import("@/components/home/bin-dowal-pay-app").then((mod) => mod.BinDowalPayApp)
  ),
  // Add other custom components here in the future
};

interface CustomSectionRendererProps {
  componentId: string;
  componentProps?: Record<string, any>;
}

export function CustomSectionRenderer({ componentId, componentProps }: CustomSectionRendererProps) {
  const Component = customSectionsRegistry[componentId];

  if (!Component) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[CustomSectionRenderer] Component "${componentId}" not found in registry.`);
    }
    return null;
  }

  return <Component {...componentProps} />;
}
