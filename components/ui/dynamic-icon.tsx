import React from 'react';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

export interface DynamicIconProps extends Omit<LucideProps, 'name'> {
  name?: string | null;
  fallbackIcon?: keyof typeof Icons;
  alt?: string;
}

function isImageUrl(val?: string | null): boolean {
  if (!val) return false;
  const str = val.trim().toLowerCase();
  return (
    str.startsWith("http://") ||
    str.startsWith("https://") ||
    str.startsWith("/") ||
    str.endsWith(".png") ||
    str.endsWith(".jpg") ||
    str.endsWith(".jpeg") ||
    str.endsWith(".svg") ||
    str.endsWith(".webp") ||
    str.endsWith(".gif")
  );
}

function getFullImageUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // في حال كان المسار قادماً من تخزين الـ Laravel مثل /storage/navigation-icons/...
  if (url.startsWith('/storage/') || url.startsWith('storage/')) {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';
    const backendOrigin = apiBase.replace(/\/api\/v1\/?$/, '').replace(/\/+$/, '');
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    return `${backendOrigin}${cleanUrl}`;
  }

  return url;
}

export function DynamicIcon({ name, fallbackIcon = 'HelpCircle', alt = 'icon', className = 'h-4 w-4', ...props }: DynamicIconProps) {
  if (!name) return null;

  // إذا كانت القيمة مسار صورة أو رابط خارجي
  if (isImageUrl(name)) {
    const imageUrl = getFullImageUrl(name);
    return (
      <img
        src={imageUrl}
        alt={alt}
        className={`${className} object-contain shrink-0`}
        {...(props as any)}
      />
    );
  }

  // تحويل أسماء الأيقونات من kebab-case (مثل building-2) أو snake_case إلى PascalCase (Building2)
  const formattedName = name
    .trim()
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const iconMap = Icons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const IconComponent = iconMap[formattedName] || iconMap[name] || iconMap[fallbackIcon] || Icons.HelpCircle;

  return <IconComponent className={className} {...props} />;
}

export default DynamicIcon;
