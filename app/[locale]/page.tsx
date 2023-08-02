/* eslint-disable react-hooks/rules-of-hooks */

import Home from '@/screens/Home'
import {useLocale} from 'next-intl';

export async function generateMetadata() {
  const locale = useLocale();
  return {
    title: locale === 'en' ? 'Home' : 'Trang chủ',
    description: locale === 'en' ? 'Learn everything quickly with the Anki' : 'Học nhanh mọi thứ với phương pháp Anki',
  }
}

export default async function Index() {
  return <Home />
}