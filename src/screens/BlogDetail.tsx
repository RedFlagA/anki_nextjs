/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "@/assets/styles/blogDetail.module.scss";
import { getBlogsLimit, getDetailBlog } from "@/services/data";
import CardBlog from "@/components/CardBlog";
import CardBlogHorizontal from "@/components/CardBlogHorizontal";
import { useTranslations } from "next-intl";

export default async function BlogDetailScreen({
  params,
}: {
  params: { slug: string };
}) {
  const t = useTranslations("Blogs");
  const slug = params.slug;
  const page = 7;
  const data = await getDetailBlog(slug);
  const dataBlogs = await getBlogsLimit(page);
  const filterData = dataBlogs.filter((item: any) => item?.id !== data[0]?.id);

  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col md={8} lg={8} xl={8} className="mx-auto">
            <h2 className="py-4">{data[0]?.title?.rendered}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: data[0]?.content?.rendered }}
              suppressHydrationWarning
            ></div>
          </Col>
          <Col md={4} lg={4} xl={4} className="mx-auto">
            <h4 className={styles.new_blogs}>{t("new_blogs")}</h4>
            {filterData.map((item: any, index: number) => (
              <CardBlogHorizontal {...item} key={index} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
