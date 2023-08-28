/* eslint-disable react-hooks/rules-of-hooks */
import BlogsScreen from "@/screens/Blogs";
import { useLocale } from "next-intl";

export async function generateMetadata() {
  const locale = useLocale();
  return {
    metadataBase: new URL(process.env.BASE_URL!),
    title: locale === 'en' ? 'Blogs' : 'Bài viết',
    description: locale === 'en' ? `Summary of Anki's articles` : 'Tổng hợp các bài viết của Anki',
    openGraph: {
      images: {
        url: '/images/BannerFlashcard.png',
      },
    },
  }
}

export default async function Blog() {
  return <BlogsScreen />;
}
