import React from 'react';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

export interface DynamicIconProps extends Omit<LucideProps, 'name'> {
  name?: string | null;
  fallbackIcon?: keyof typeof Icons;
}

export function DynamicIcon({ name, fallbackIcon = 'HelpCircle', ...props }: DynamicIconProps) {
  if (!name) return null;

  const iconMap = Icons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const IconComponent = iconMap[name] || iconMap[fallbackIcon] || Icons.HelpCircle;

  return <IconComponent {...props} />;
}

export default DynamicIcon;
