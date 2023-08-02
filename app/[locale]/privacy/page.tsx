/* eslint-disable react-hooks/rules-of-hooks */
import PrivacyScreen from "@/screens/Privacy";
import { useLocale } from "next-intl";

export async function generateMetadata() {
  const locale = useLocale();
  return {
    title: locale === 'en' ? 'Privacy' : 'Chính sách bảo mật',
    description: locale === 'en' ? 'Terms and Conditions of Use for ANKI' : 'Điều khoản và điều kiện sử dụng của Anki',
  }
}

export default async function Privacy() {
 return <PrivacyScreen />
}
