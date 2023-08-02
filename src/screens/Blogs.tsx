/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import { getDataBlogs } from "@/services/data";
import { Container } from "react-bootstrap";
import styles from "@/assets/styles/blog.module.scss";
import Items from "@/utils/InfiniteScroll";
export default async function BlogsScreen() {
  const page = 9;
  const offset = 0;
  const items = await getDataBlogs(page, offset);

  return (
    <main className={styles.main}>
      <Container>
        <Items initialItems={items} />
      </Container>
    </main>
  );
}
