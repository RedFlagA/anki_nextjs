/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import styles from "@/assets/styles/home.module.scss";
import CardWhoIsAnki from "@/components/CardWhoIsAnki";
import ChooseAnki from "@/components/ChooseAnki";
import Slider from "@/components/Slider";
import { useTranslations } from "next-intl";
import { getBlogsLimit } from "@/services/data";
import CardBlog from "@/components/CardBlog";

export default async function Home() {
  const t = useTranslations("Home");
  const page = 3;
  const data = await getBlogsLimit(page);
  return (
    <main className={`${styles.main}`}>
      {/* banner */}
      <Container className={styles.view_banner}>
        <Row>
          <Col md={6} lg={6} xl={6} className="mx-auto">
            <h1 className={styles.text_banner}>
              Make <br /> learning fun!
            </h1>
            <p className={styles.des_banner}>{t("des_banner")}</p>
            <h5 className={styles.download_text}> {t("download_app")}</h5>
            <div className="row container d-flex justify-content-center">
              <div className={`${styles.template_demo} mt-2`}>
                <Button
                  className={`${styles.btn_change_style} ${styles.margin_right} btn btn-dark btn-icon-text`}
                  onClick={() => window.open("https://apps.apple.com/vn/app/anki-flashcards-new/id6451835020")}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <i className={`bi bi-apple ${styles.icon_store}`}></i>
                    <span
                      className={`d-inline-block text-left ${styles.text_store}`}
                    >
                      <small
                        className={`font-weight-light d-block ${styles.text_download}`}
                      >
                        Download on the
                      </small>
                      App Store
                    </span>
                  </div>
                </Button>
                <Button
                  className={`${styles.btn_change_style} ${styles.margin_right} btn btn-dark btn-icon-text`}
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=vn.edu.anki.flashcard")}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <Image
                      src="/images/google-play.png"
                      alt="Image passed"
                      className={styles.icon_google_play}
                    />
                    <span
                      className={`d-inline-block text-left ${styles.text_store}`}
                    >
                      <small
                        className={`font-weight-light d-block ${styles.text_download}`}
                      >
                        Get it on
                      </small>
                      Google Play
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6} className={`text-end ${styles.box_banner}`}>
            <Image
              src="/images/img_passed.png"
              alt="Image passed"
              className={styles.image_passed}
            />
          </Col>
        </Row>
      </Container>

      {/* who is anki */}
      <div className={styles.viewWhoIs}>
        <Container>
          <h1 className={styles.title_item}>{t("who_is_anki")}</h1>
          <div className={styles.line}></div>
          <Row>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#3A5AFF"
                image="/images/book.png"
                title={t("at_school")}
                description={t("des_at_school")}
              />
            </Col>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#FFC43B"
                image="/images/vector.png"
                title={t("at_work")}
                description={t("des_at_work")}
              />
            </Col>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#3CC5FF"
                image="/images/sofa.png"
                title={t("at_home")}
                description={t("des_at_home")}
              />
            </Col>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#FF3B53"
                image="/images/mobile.png"
                title={t("learning_apps")}
                description={t("des_learning_apps")}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Why is Anki? */}
      <div className={styles.whyIsAnki}>
        <Container>
          <h1 className={styles.title_item}>{t("why_is_anki")}</h1>
          <div className={styles.line}></div>
          <div>
            <ChooseAnki
              image="/images/banner1.png"
              title={t("title_why_is_anki_1")}
              description={t("des_why_is_anki_1")}
            />
            <ChooseAnki
              direction="rtl"
              image="/images/banner2.png"
              title={t("title_why_is_anki_2")}
              description={t("des_why_is_anki_2")}
            />
            <ChooseAnki
              image="/images/banner3.png"
              title={t("title_why_is_anki_3")}
              description={t("des_why_is_anki_3")}
            />
          </div>
        </Container>
      </div>

      {/* Our best customers */}
      <div className={styles.ourBestCustomers}>
        <Container>
          <h1 className={`${styles.title_item} ${styles.title_item_customers}`}>
            {t("our_best_customers")}
          </h1>
          <div className={`${styles.line} ${styles.line_best_customers}`}></div>
          <Slider />
        </Container>
      </div>

      {/* Blogs */}
      <div className={styles.viewBlogs}>
        <Container>
          <h1 className={styles.title_item}>{t("blogs")}</h1>
          <div className={styles.line}></div>
          <Row>
            {data.map((item: any, index: number) => (
              <Col md={6} lg={6} xl={4} className="mx-auto" key={index}>
                <CardBlog {...item} />
              </Col>
            ))}
          </Row>
          <div className={styles.viewBtn}>
            <Button className={styles.view_more} href="/blogs">
              {t("load_more")}
            </Button>
          </div>
        </Container>
      </div>
    </main>
  );
}
