/* eslint-disable react-hooks/rules-of-hooks */
import BlogsScreen from "@/screens/Blogs";
import { useLocale } from "next-intl";
import { convert } from "html-to-text";

export async function generateMetadata() {
  const locale = useLocale();
  return {
    title: locale === 'en' ? 'Blogs' : 'Bài viết',
    description: locale === 'en' ? `Summary of Anki's articles` : 'Tổng hợp các bài viết của Anki',
    openGraph: {
      images: {
        url: 'https://wp.anki.edu.vn/wp-content/uploads/2023/07/cau-noi-tieng-Anh-hay-ve-tinh-ban-1079x675-1.jpg',
      },
    },
  }
}

export default async function Blog() {
  return <BlogsScreen />;
}
