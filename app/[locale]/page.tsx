/* eslint-disable react-hooks/rules-of-hooks */

import Home from '@/screens/Home'
import {useLocale} from 'next-intl';
import { headers } from "next/headers";

export async function generateMetadata() {
  const locale = useLocale();
  const headersList = headers();
  const domain = headersList.get("host") || "";
  return {
    title: locale === 'en' ? 'Home' : 'Trang chủ',
    description: locale === 'en' ? 'Learn everything quickly with the Anki' : 'Học mọi thứ nhanh chóng với Anki',
    openGraph: {
      images: {
        url: `${domain}/images/BannerFlashcard.png`,
      },
    },
  }
}

export default async function Index() {
  return <Home />
}
