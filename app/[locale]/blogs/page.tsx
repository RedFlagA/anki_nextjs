/* eslint-disable react-hooks/rules-of-hooks */
import BlogsScreen from "@/screens/Blogs";
import { useLocale } from "next-intl";
import { headers } from "next/headers";

export async function generateMetadata() {
  const locale = useLocale();
  const headersList = headers();
  const domain = headersList.get("x-forwarded-host") || "";
  return {
    title: locale === 'en' ? 'Blogs' : 'Bài viết',
    description: locale === 'en' ? `Summary of Anki's articles` : 'Tổng hợp các bài viết của Anki',
    openGraph: {
      images: {
        url: `${domain}/images/BannerFlashcard.png`,
      },
    },
  }
}

export default async function Blog() {
  return <BlogsScreen />;
}
