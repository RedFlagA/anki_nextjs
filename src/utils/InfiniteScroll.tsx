"use client";

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardBlog from "@/components/CardBlog";
import { getDataBlogs } from "@/services/data";
import { SyncLoader   } from "react-spinners";

export default function Items({ initialItems }: any) {
  const page = 9;
  const [offset, setOffset] = useState(initialItems.length);
  const [data, setData] = useState(initialItems);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    let newData: any;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        newData = await getDataBlogs(page, offset);
        setData((prevData: any) => [...prevData, ...newData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        newData.length > 0
      ) {
        // Load more data when the user reaches the bottom of the page
        setOffset((prevOffset: number) => prevOffset + page);
      }
    };

    fetchData(); // Fetch initial data

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div>
      <Row>
        {data.map((item: any, index: any) => (
          <Col md={6} lg={6} xl={4} className="mx-auto" key={index}>
            <CardBlog {...item} />
          </Col>
        ))}
      </Row>
      {isLoading && <SyncLoader color="#36d7b7" cssOverride={{textAlign: "center", padding: "10px 0"}} />}
    </div>
  );
}
