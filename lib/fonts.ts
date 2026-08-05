import localFont from 'next/font/local'

export const somarSans = localFont({
  src: [
    { path: '../public/fonts/SomarSans-Light.woff', weight: '300', style: 'normal' },
    { path: '../public/fonts/SomarSans-Regular.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/SomarSans-Medium.woff', weight: '500', style: 'normal' },
    { path: '../public/fonts/SomarSans-SemiBold.woff', weight: '600', style: 'normal' },
    { path: '../public/fonts/SomarSans-Bold.woff', weight: '700', style: 'normal' },
    { path: '../public/fonts/SomarSans-ExtraBold.woff', weight: '800', style: 'normal' },
  ],
  variable: '--font-somar-sans',
  display: 'swap',
  preload: false,
  fallback: ['Arial', 'sans-serif'],
})
