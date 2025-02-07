import localFont from 'next/font/local';

// Vazir font
export const vazirFont = localFont({
  src: [
    {
      path: '../../public/fonts/vazirmatn/Vazirmatn-Black.woff2',
      style: 'normal',
      weight: '900',
    },
    {
      path: '../../public/fonts/vazirmatn/Vazirmatn-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../public/fonts/vazirmatn/Vazirmatn-SemiBold.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../../public/fonts/vazirmatn/Vazirmatn-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/fonts/vazirmatn/Vazirmatn-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/vazirmatn/Vazirmatn-Light.woff2',
      style: 'normal',
      weight: '300',
    },
  ],
  display: 'block',
  style: 'normal',
  variable: '--font-vazir',
});
