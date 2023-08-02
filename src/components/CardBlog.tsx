"use client";
import { Card } from "react-bootstrap";
import styles from "@/assets/styles/cardBlog.module.scss";
import moment from "moment";
import { convert } from "html-to-text";

function CardBlog(item: any) {
  const options = {
    wordwrap: 130,
  };
  return (
    <div className={styles.cardBlog}>
      <a href={`/blogs/${item.slug}`}>
        <Card className={styles.cardItem}>
          <Card.Img
            variant="top"
            src={item?.better_featured_image?.source_url}
            className={styles.image}
          />
          <Card.Body>
            <Card.Title className={`${styles.title} text-truncate`}>
              {item?.title?.rendered}
            </Card.Title>
            <Card.Text
              className={styles.description}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {convert(item?.excerpt?.rendered, options)}
            </Card.Text>
            <Card.Text className={styles.date}>
              {moment(item?.date).format("DD/MM/YYYY")}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default CardBlog;
