"use client";
import { Col, Container, Row, Image, Carousel, Button } from "react-bootstrap";
import styles from "../assets/styles/home.module.scss";
import CardWhoIsAnki from "@/components/CardWhoIsAnki";
import ChooseAnki from "@/components/ChooseAnki";
import Slider from "@/components/Slider";
import CardBlog from "@/components/CardBlog";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      {/* banner */}
      <Container className={styles.view_banner}>
        <Row>
          <Col md={6} lg={6} xl={6} className="mx-auto">
            <h1 className={styles.text_banner}>
              Make <br /> learning fun!
            </h1>
            <p className={styles.des_banner}>
              Học nhanh mọi thứ với phương pháp Anki
            </p>
            <h5 className={styles.download_text}>Download the app:</h5>
            <div className="row container d-flex justify-content-center">
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
                  className={`${styles.btn_change_style} ${styles.margin_right} btn btn-dark btn-icon-text`}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <i className={`bi bi-google-play ${styles.icon_store}`}></i>
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
          <Col md={6} lg={6} xl={6} className={`text-end ${styles.box_banner}`}>
            <Image
              src="/image/img_passed.png"
              alt="Image passed"
              className={styles.image_passed}
            />
          </Col>
        </Row>
      </Container>

      {/* who is anki */}
      <div className={styles.viewWhoIs}>
        <Container>
          <h1 className={styles.title_item}>Who is Anki for?</h1>
          <div className={styles.line}></div>
          <Row>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#3A5AFF"
                image="/image/book.png"
                title="At School"
                description="Engaging group and distance learning for teachers and students."
              />
            </Col>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#FFC43B"
                image="/image/vector.png"
                title="At work"
                description="For training, e-learning, interactive presentations and more."
              />
            </Col>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#3CC5FF"
                image="/image/sofa.png"
                title="At home"
                description="Apps and games for family fun or home study."
              />
            </Col>
            <Col md={6} lg={6} xl={3} className="mx-auto">
              <CardWhoIsAnki
                backgroundImage="#FF3B53"
                image="/image/mobile.png"
                title="Learning apps"
                description="Engage kids with the Kahoot! family of learning apps"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Why is Anki? */}
      <div className={styles.whyIsAnki}>
        <Container>
          <h1 className={styles.title_item}>Why is Anki?</h1>
          <div className={styles.line}></div>
          <div>
            <ChooseAnki
              image="/image/banner1.png"
              title="Gói từ vựng được chọn lọc"
              description="Các gói từ vựng đã được Anki lựa chọn và chuẩn hóa một cách chỉnh chu"
            />
            <ChooseAnki
              direction="rtl"
              image="/image/banner2.png"
              title="Phương pháp lặp thông minh"
              description="Với phương pháp lặp từ vựng thông minh. Anki sẽ giúp bạn tập trung vào những từ vựng khó  nhất đối với bạn"
            />
            <ChooseAnki
              image="/image/banner3.png"
              title="Cách học thú vị"
              description="Chỉ cần đoán từ và quẹt trái, quẹt phải, bạn đã có thể thuần thục một cách nhánh chóng các bộ từ vựng"
            />
          </div>
        </Container>
      </div>

      {/* Our best customers */}
      <div className={styles.ourBestCustomers}>
        <Container>
          <h1 className={`${styles.title_item} ${styles.title_item_customers}`}>
            Our best customers
          </h1>
          <div className={`${styles.line} ${styles.line_best_customers}`}></div>
          <Slider />
        </Container>
      </div>

      {/* Blogs */}
      <div className={styles.viewBlogs}>
        <Container>
          <h1 className={styles.title_item}>Blogs</h1>
          <div className={styles.line}></div>
          <Row>
            <Col md={6} lg={6} xl={4} className="mx-auto">
              <CardBlog
                image="/image/thumbnail.png"
                title="Engaging group and distance learning for teachers and students."
                description="Ut enim ad minim veniam, quis nost exercitation
                ullamco laboris nisi ut allquip ex commodo."
                date="12/12/2021"
              />
            </Col>
            <Col md={6} lg={6} xl={4} className="mx-auto">
              <CardBlog
                image="/image/thumbnail.png"
                title="Engaging group and distance learning for teachers and students."
                description="Ut enim ad minim veniam, quis nost exercitation
                ullamco laboris nisi ut allquip ex commodo."
                date="12/12/2021"
              />
            </Col>
            <Col md={6} lg={6} xl={4} className="mx-auto">
              <CardBlog
                image="/image/thumbnail.png"
                title="Engaging group and distance learning for teachers and students."
                description="Ut enim ad minim veniam, quis nost exercitation
                ullamco laboris nisi ut allquip ex commodo."
                date="12/12/2021"
              />
            </Col>
          </Row>
          <div className={styles.viewBtn}>
            <Button className={styles.view_more} href="/blogs">Xem thêm</Button>
          </div>
        </Container>
      </div>
    </main>
  );
}
