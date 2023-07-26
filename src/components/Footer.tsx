import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from '@/assets/styles/footer.module.scss';

function Footer() {
  return (
    <footer className={`text-center text-lg-start text-white text-decoration-none ${styles.bg_footer}`}>
      <Container>
        <section className={styles.padding_bottom}>
          <Row>
            <Col md={4} lg={4} xl={4} className="mx-auto">
              <div className={`d-flex align-items-baseline ${styles.logo}`}>
                <Image
                  src="/image/logo.png"
                  alt="My Image"
                  width={47}
                  height={50}
                />
                <h2 className={`${styles.logo_title} mb-0`}>Anki</h2>
              </div>
              <h5 className={styles.get_app}>Get the app:</h5>
              <div className={`row container d-flex justify-content-center ${styles.view_download}`}>
              <div className={`${styles.template_demo} mt-2`}>
              <button className={`${styles.btn_change_style} ${styles.margin_right} btn btn-dark btn-icon-text`}>
                    <div className="d-flex align-items-center justify-content-center">
                    <i className={`bi bi-apple ${styles.icon_store}`}></i>
                    <span className={`d-inline-block text-left ${styles.text_store}`}>
                    <small className={`font-weight-light d-block ${styles.text_download}`}>
                          Download on the
                        </small>
                        App Store
                      </span>
                    </div>
                  </button>
                  <button className={`${styles.btn_change_style} ${styles.margin_right} ${styles.style_devices} btn btn-dark btn-icon-text`}>
                  <div className="d-flex align-items-center justify-content-center">
                  <i className={`bi bi-google-play ${styles.icon_store}`}></i>
                    <span className={`d-inline-block text-left ${styles.text_store}`}>
                    <small className={`font-weight-light d-block ${styles.text_download}`}>
                        Get it on
                      </small>
                      Google Play
                    </span>
                  </div>
                </button>
                </div>
              </div>
              <h5 className={styles.follow_us}>Follow us:</h5>

              <div className={`d-flex ${styles.social} ${styles.mobile_center}`}>
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
              <p className={styles.copyright}>
                Copyright @ 2023, Anki All rights reserved.
              </p>
            </Col>
            <Col md={2} lg={2} xl={3} className="mx-auto">
              <h6 className={`text-uppercase fw-bold ${styles.title_margin}`}>Products</h6>
              <div className={styles.content_footer_margin}>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    MDBootstrap
                  </a>
                </p>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    MDWordPress
                  </a>
                </p>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    BrandFlow
                  </a>
                </p>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    Bootstrap Angular
                  </a>
                </p>
              </div>
            </Col>
            <Col md={3} lg={2} xl={3} className="mx-auto">
              <h6 className={`text-uppercase fw-bold ${styles.title_margin}`}>
                Useful links
              </h6>
              <div className={styles.content_footer_margin}>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    Your Account
                  </a>
                </p>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    Become an Affiliate
                  </a>
                </p>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    Shipping Rates
                  </a>
                </p>
                <p className={styles.item_margin}>
                  <a href="#!" className="text-white text-decoration-none">
                    Help
                  </a>
                </p>
              </div>
            </Col>
            <Col md={3} lg={3} xl={2} className="mx-auto mb-md-0 ">
              <h6 className={`text-uppercase fw-bold ${styles.title_margin}`}>Contact</h6>
              <div className={styles.content_footer_margin}>
                <p className={styles.item_margin}>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p className={styles.item_margin}>
                  <i className="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p className={styles.item_margin}>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p className={styles.item_margin}>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
