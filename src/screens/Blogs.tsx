/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useEffect, useState } from "react";
import { getDataBlogs } from "@/services/data";
import { Container } from "react-bootstrap";
import styles from "@/assets/styles/blog.module.scss";
import Items from "@/utils/CardBlog";
import throttle from "lodash.throttle";
import { SyncLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";

export default function BlogsScreen() {
  const itemsPerPage = 9;

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const newData = await getDataBlogs(itemsPerPage, offset);
      setData((prevData: any) => [...prevData, ...newData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleScroll = throttle(() => {
    if (data.length % itemsPerPage === 0) {
      setOffset((prevOffset) => prevOffset + itemsPerPage);
    }
  }, 300);

  useEffect(() => {
    fetchData();
  }, [offset]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main className={styles.main}>
      <Container>
        <InfiniteScroll
          dataLength={data.length}
          next={handleScroll}
          hasMore={true}
          loader={
            isLoading && (
              <SyncLoader
                color="#36d7b7"
                cssOverride={{ textAlign: "center", padding: "10px 0" }}
              />
            )
          }
          style={{ overflow: "hidden", height: "100%" }}
          scrollableTarget="scrollableDiv"
        >
          <Items items={data} />
        </InfiniteScroll>
      </Container>
    </main>
  );
}
