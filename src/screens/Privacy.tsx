/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Container } from "react-bootstrap";
import { useTranslations } from "next-intl";
import styles from "@/assets/styles/privacy.module.scss"

export default async function PrivacyScreen() {
  const t = useTranslations("Privacy");
  return (
    <main>
      <Container>
        <div className={`pt-3 pb-5 ${styles.font_text}`}>
          <h3 className={styles.style_h3}>{t("terms_and_conditions")}</h3> {t("term_des")}
          <h4 className={`mt-2 ${styles.style_h4}`}>{t("introduce")}</h4> <p>{t("des_introduce")}</p>{" "}
          <h3 className={`mt-2 ${styles.style_h3}`}>{t("collect_information")}</h3>
          <h4 className={`mt-1 ${styles.style_h4}`}>{t("user_info")}</h4> {t("user_info1")}
          <br /> {t("user_info2")}
          <br /> {t("user_info3")}
          <br /> {t("user_info4")}
          <br />
          <h4 className={`mt-2 ${styles.style_h4}`}>{t("non_personal_information")}</h4>
          {t("non_personal_information_des")}
          <br />
          <br />
          <strong>{t("cookies")}</strong>
          <br /> {t("cookies_des")}
          <br />
          <br />
          <strong>{t("user_behavior_analysis")}</strong>
          <br /> {t("user_behavior_analysis_des")}
          <br />
          <br />
          <strong>{t("user_feedback")}</strong>
          <br /> {t("user_feedback_des")}
          <h3 className={`mt-2 ${styles.style_h3}`}>{t("use_infomation_collect")}</h3>
          <h4 className={`mt-1 ${styles.style_h4}`}> {t("use_infomation_collect_user_info")}</h4>
          {t("use_infomation_collect_user_info_des")}
          <br />
          <h4 className={`mt-2 ${styles.style_h4}`}>
            {" "}
            {t("use_infomation_collect_non_user_info")}
          </h4>{" "}
          {t("use_infomation_collect_non_user_info_des")}
          <h3 className={`mt-2 ${styles.style_h3}`}>{t("protect")}</h3> {t("protect_des")}
          <h3 className={`mt-2 ${styles.style_h3}`}>{t("your_benefits")}</h3>{" "}
          {t("your_benefits_des")}
          <h3 className={`mt-2 ${styles.style_h3}`}>{t("third_party_websites_and_services")}</h3>
          {t("third_party_websites_and_services_des")}
          <h3 className={`mt-2 ${styles.style_h3}`}>{t("contact_us")}</h3> {t("contact_us_des")}
        </div>
      </Container>
    </main>
  );
}
