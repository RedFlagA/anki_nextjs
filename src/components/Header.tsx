import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import {useLocale, useTranslations} from 'next-intl';
import styles from '../assets/styles/header.module.scss'
export default function Header() {
  const locale = useLocale();
  const t = useTranslations('Header');
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
                {t("blogs")}
              </Nav.Link>
              <Nav.Link href="/privacy" active className={styles.menu_title}>
                {t("privacy_policy")}
              </Nav.Link>
              <NavDropdown
                title={locale === 'vi' ? 'VN': 'EN'}
                id="language-dropdown"
                active
                className={styles.menu_title}
              >
                <NavDropdown.Item href="/en" className={styles.menu_title}>
                  EN
                </NavDropdown.Item>
                <NavDropdown.Item href="/vi" className={styles.menu_title}>
                  VN
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
