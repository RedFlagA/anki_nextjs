import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "@/assets/styles/cardBlogHorizontal.module.scss";
import moment from "moment";
import { convert } from "html-to-text";

const CardBlogHorizontal = (item: any) => {
  const options = {
    wordwrap: 130,
  };
  return (
    <div className={styles.cardBlog}>
      <a href={`/blogs/${item.slug}`}>
        <Card className={styles.cardItem}>
          <div className="row no-gutters">
           <Col md={5} lg={5} xl={5}>
              <Card.Img
                variant="top"
                src={item?.better_featured_image?.source_url}
                className={styles.image}
              />
            </Col>
            <Col md={7} lg={7} xl={7}>
              <Card.Body className={styles.card_body}>
                <Card.Title className={`${styles.title} text-truncate`}>
                  {item?.title?.rendered}
                </Card.Title>
                <Card.Text
                  className={styles.description}
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {convert(item?.excerpt?.rendered, options)}
                </Card.Text>
              </Card.Body>
           </Col>
          </div>
        </Card>
      </a>
    </div>
  );
};

export default CardBlogHorizontal;
