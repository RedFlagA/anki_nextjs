import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "@/assets/styles/footer.module.scss";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer
      className={`text-center text-lg-start text-white text-decoration-none ${styles.bg_footer}`}
    >
      <Container>
        <section className={styles.padding_bottom}>
          <Row>
            <Col md={4} lg={4} xl={4} className="mx-auto">
              <div className={`d-flex align-items-baseline ${styles.logo}`}>
                <Image
                  src="/images/logo.png"
                  alt="My Image"
                  width={47}
                  height={50}
                />
                <h2 className={`${styles.logo_title} mb-0`}>Anki</h2>
              </div>

              <p className={styles.item_margin}>
                <a href="/privacy" className="text-white text-decoration-none">
                  {t("privacy_policy")}
                </a>
              </p>
            </Col>
            <Col md={4} lg={4} xl={4} className="mx-auto">
              <h5 className={`${styles.get_app} text-center`}>
                {t("get_the_app")}
              </h5>
              <div
                className={`d-flex justify-content-center ${styles.view_download}`}
              >
                <div className={`${styles.template_demo} mt-2`}>
                  <button
                    className={`${styles.btn_change_style} ${styles.margin_right} btn btn-dark btn-icon-text`}
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
                  </button>
                  <button
                    className={`${styles.btn_change_style} ${styles.margin_right} ${styles.style_devices} btn btn-dark btn-icon-text`}
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
                  </button>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} xl={4} className="mx-auto">
              <h5 className={`${styles.follow_us} text-end`}>
                {t("follow_us")}
              </h5>

              <div
                className={`d-flex justify-content-end ${styles.social} ${styles.mobile_center}`}
              >
                <div className="mt-2 d-flex justify-content-end">
                  <a href="#">
                    <div className={`${styles.sharer} button`}>
                      <i className="bi bi-facebook"></i>
                    </div>
                  </a>
                  <a href="#">
                    <div className={`${styles.sharer} button`}>
                      <i className="bi bi-twitter"></i>
                    </div>
                  </a>
                  <a href="#">
                    <div className={`${styles.sharer} button`}>
                      <i className="bi bi-tiktok"></i>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <p className={styles.copyright}>
            Copyright @{new Date().getFullYear()}, Anki All rights reserved.
          </p>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
