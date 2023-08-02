import { Carousel, Image, Row, Col, Container } from "react-bootstrap";
import styles from "@/assets/styles/slider.module.scss";
import { useTranslations } from "next-intl";

function Slider() {
  const t = useTranslations("Home");
  return (
    <Carousel controls={false} interval={2000}>
      <Carousel.Item>
        <div className={styles.viewSlider}>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewLeft}>
              <div className={styles.view_rate}>
                <h1 className={styles.textLeft}>{t("i_love_anki")}</h1>
                <div className={styles.arround}></div>
              </div>

              <Image
                src="/image/person.png"
                alt="I love Anki!"
                className={styles.image}
              />
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewRight}>
              <h3 className={styles.name}>{t("user_name")}</h3>
              <p className={styles.comment}>{t("comment1")}</p>
              <p className={styles.comment}> {t("comment2")}</p>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.viewSlider}>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewLeft}>
              <div className={styles.view_rate}>
                <h1 className={styles.textLeft}>{t("i_love_anki")}</h1>
                <div className={styles.arround}></div>
              </div>

              <Image
                src="/image/person.png"
                alt="I love Anki!"
                className={styles.image}
              />
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewRight}>
              <h3 className={styles.name}>{t("user_name")}</h3>
              <p className={styles.comment}>{t("comment1")}</p>
              <p className={styles.comment}> {t("comment2")}</p>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.viewSlider}>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewLeft}>
              <div className={styles.view_rate}>
                <h1 className={styles.textLeft}>{t("i_love_anki")}</h1>
                <div className={styles.arround}></div>
              </div>

              <Image
                src="/image/person.png"
                alt="I love Anki!"
                className={styles.image}
              />
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewRight}>
              <h3 className={styles.name}>{t("user_name")}</h3>
              <p className={styles.comment}>{t("comment1")}</p>
              <p className={styles.comment}> {t("comment2")}</p>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
