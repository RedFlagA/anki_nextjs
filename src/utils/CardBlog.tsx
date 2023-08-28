"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import CardBlog from "@/components/CardBlog";

export default function Items({ items }: any) {

  return (
    <div>
      <Row>
        {items.map((item: any, index: any) => (
          <Col md={6} lg={6} xl={4} key={index}>
            <CardBlog {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
