/* eslint-disable react-hooks/rules-of-hooks */

import Home from '@/screens/Home'
import {useLocale} from 'next-intl';

export async function generateMetadata() {
  const metadataBase: any = new URL(process.env.BASE_URL!);
  console.log("🚀 ~ file: page.tsx:8 ~ generateMetadata ~ metadataBase:", metadataBase)
  const locale = useLocale();
  return {
    title: locale === 'en' ? 'Home' : 'Trang chủ',
    description: locale === 'en' ? 'Learn everything quickly with the Anki' : 'Học mọi thứ nhanh chóng với Anki',
    openGraph: {
      images: {
        url: `/images/BannerFlashcard.png`,
      },
    },
  }
}

export default async function Index() {
  return <Home />
}
