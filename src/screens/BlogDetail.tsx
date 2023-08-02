/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Container } from "react-bootstrap";
import styles from "@/assets/styles/blogDetail.module.scss";
import { getDetailBlog } from "@/services/data";

export default async function BlogDetailScreen({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const data = await getDetailBlog(slug);
  return (
    <div className={styles.container}>
      <Container>
        <h1 className="py-4">{data[0]?.title?.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data[0]?.content?.rendered }}
          suppressHydrationWarning
        ></div>
      </Container>
    </div>
  );
}
