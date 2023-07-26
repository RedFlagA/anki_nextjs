import { Card, Image } from "react-bootstrap";
import styles from "@/assets/styles/cardWhoIs.module.scss";

function CardWhoIsAnki({ backgroundImage, image, title, description }: any) {
  return (
    <Card className={styles.cardItem}>
      <div
        className={`${styles.viewImage}`}
        style={{ backgroundColor: backgroundImage }}
      >
        <Image src={image} alt="Image passed" className={styles.icon} />
      </div>
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text className={styles.description}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardWhoIsAnki;
