import { Row, Image, Col } from "react-bootstrap";
import styles from "@/assets/styles/chooseAnki.module.scss";

function ChooseAnki({ direction = "ltr", image, title, description }: any) {
  return (
    <div className={styles.viewChooseAnki}>
      {direction === "ltr" ? (
        <Row>
          <Col md={6} lg={6} xl={6} className="mx-auto">
            <Image src={image} alt="why is anki" className={styles.image} />
          </Col>
          <Col md={6} lg={6} xl={6} className="mx-auto">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={6} lg={6} xl={6} className="mx-auto">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </Col>
          <Col md={6} lg={6} xl={6} className="mx-auto">
            <Image src={image} alt="why is anki" className={styles.image} />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ChooseAnki;
