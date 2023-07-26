import { Card, Image } from "react-bootstrap";
import styles from "@/assets/styles/cardBlog.module.scss";

function CardBlog({ image, title, description, date }: any) {
  const handleClick = () => {
    // Xử lý sự kiện khi card được click
    console.log('Card được click!');
  };
  return (
    <Card className={styles.cardItem} onClick={handleClick}>
      <Card.Img variant="top" src={image} className={styles.image} />
      <Card.Body>
        <Card.Title className={`${styles.title} text-truncate`}>{title}</Card.Title>
        <Card.Text className={styles.description}>
          {description}
        </Card.Text>
        <Card.Text className={styles.date}>{date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardBlog;
