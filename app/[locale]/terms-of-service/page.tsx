/* eslint-disable react-hooks/rules-of-hooks */
import TermsOfService from "@/screens/TermsOfService";
import { useLocale } from "next-intl";

export async function generateMetadata() {
  const locale = useLocale();
  return {
    title: locale === 'en' ? 'Terms of service' : 'Điều khoản dịch vụ',
    description: locale === 'en' ? 'Terms and Conditions of Use for ANKI' : 'Điều khoản và điều kiện sử dụng của Anki',
  }
}

export default async function Privacy() {
 return <TermsOfService />
}
