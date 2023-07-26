import { Carousel, Image, Row, Col, Container } from "react-bootstrap";
import styles from "@/assets/styles/slider.module.scss";

function Slider() {
  return (
    <Carousel controls={false} interval={2000}>
      <Carousel.Item>
        <div className={styles.viewSlider}>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewLeft}>
              <div className={styles.view_rate}>
                <h1 className={styles.textLeft}>I love Anki!</h1>
                <div className={styles.arround}></div>
              </div>

              <Image
                src="/image/person.png"
                alt="I love Anki!"
                className={styles.image}
              />
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewRight}>
              <h3 className={styles.name}>Martha | Norwegian Air</h3>
              <p className={styles.comment}>
                Recusandae sunt voluptate repellat velit dolorem eos nostrum
                cupiditate. Labore porro cupiditate reiciendis enim neque. Modi
                eos autem expedita voluptatibus dignissimos repellat.
              </p>
              <p className={styles.comment}>
                {" "}
                Sit et aut minus quod vitae. Aut occaecati cupiditate neque
                dolore amet beatae quasi aliquam.
              </p>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.viewSlider}>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewLeft}>
              <div className={styles.view_rate}>
                <h1 className={styles.textLeft}>I love Anki!</h1>
                <div className={styles.arround}></div>
              </div>

              <Image
                src="/image/person.png"
                alt="I love Anki!"
                className={styles.image}
              />
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewRight}>
              <h3 className={styles.name}>Martha | Norwegian Air</h3>
              <p className={styles.comment}>
                Recusandae sunt voluptate repellat velit dolorem eos nostrum
                cupiditate. Labore porro cupiditate reiciendis enim neque. Modi
                eos autem expedita voluptatibus dignissimos repellat.
              </p>
              <p className={styles.comment}>
                {" "}
                Sit et aut minus quod vitae. Aut occaecati cupiditate neque
                dolore amet beatae quasi aliquam.
              </p>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.viewSlider}>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewLeft}>
              <div className={styles.view_rate}>
                <h1 className={styles.textLeft}>I love Anki!</h1>
                <div className={styles.arround}></div>
              </div>

              <Image
                src="/image/person.png"
                alt="I love Anki!"
                className={styles.image}
              />
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} className={styles.viewRight}>
              <h3 className={styles.name}>Martha | Norwegian Air</h3>
              <p className={styles.comment}>
                Recusandae sunt voluptate repellat velit dolorem eos nostrum
                cupiditate. Labore porro cupiditate reiciendis enim neque. Modi
                eos autem expedita voluptatibus dignissimos repellat.
              </p>
              <p className={styles.comment}>
                {" "}
                Sit et aut minus quod vitae. Aut occaecati cupiditate neque
                dolore amet beatae quasi aliquam.
              </p>
            </Col>
          </Row>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;
