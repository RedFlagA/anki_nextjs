import React from "react";
import { Row, Col } from "react-bootstrap";
import CardBlog from "./CardBlog";
import { getDataHome } from "@/services/data";

export default async function Blogs() {
  const page = 3;
  const data = await getDataHome(page);
  return (
    <div>
      <Row>
        {data.map((item: any, index: number) => (
          <Col md={6} lg={6} xl={4} className="mx-auto" key={index}>
            <CardBlog {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
