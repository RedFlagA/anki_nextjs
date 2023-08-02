/* eslint-disable react-hooks/rules-of-hooks */

import Home from '@/screens/Home'
import { getDetailBlog } from '@/services/data';
import {useLocale} from 'next-intl';

export async function generateMetadata() {
  const locale = useLocale();
  const data = await getDetailBlog('17-cau-noi-tieng-anh-hay-ve-tinh-ban-chon-loc-18');
  return {
    title: locale === 'en' ? 'Home' : 'Trang chủ',
    description: locale === 'en' ? 'Learn everything quickly with the Anki' : 'Học mọi thứ nhanh chóng với Anki',
    openGraph: {
      images: {
        url: data[0]?.better_featured_image?.source_url,
      },
    },
  }
}

export default async function Index() {
  return <Home />
}
