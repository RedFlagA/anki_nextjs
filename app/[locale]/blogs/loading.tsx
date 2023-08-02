"use client";
import { Container } from "react-bootstrap";
import styles from "@/assets/styles/blog.module.scss";
import { PropagateLoader  } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className={styles.main}>
      <Container>
        <PropagateLoader size={50}  color="#36d7b7" cssOverride={{ width: "100%", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center"}} />
      </Container>
    </main>
  );
}
