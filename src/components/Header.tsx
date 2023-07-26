import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import styles from '../assets/styles/header.module.scss'
export default function Header() {
  return (
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <div className="d-flex align-items-baseline">
              <Image
                src="/image/logo.png"
                alt="My Image"
                width={47}
                height={50}
              />
              <h2 className={`${styles.logo_title} mb-0`}>Anki</h2>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto">
              <Nav.Link href="/blogs" active className={styles.menu_title}>
                Blogs
              </Nav.Link>
              <Nav.Link href="#" active className={styles.menu_title}>
                Privacy
              </Nav.Link>
              <NavDropdown
                title="EN"
                id="language-dropdown"
                active
                className={styles.menu_title}
              >
                <NavDropdown.Item href="#" className={styles.menu_title}>
                  EN
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className={styles.menu_title}>
                  VN
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
