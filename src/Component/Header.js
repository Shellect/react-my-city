import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from './gerb.png'

export default function Head() {
        return (
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={Logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">История города</Nav.Link>
                                <Nav.Link href="/about">Новости</Nav.Link>
                                <Nav.Link href="/contacts">Контакты</Nav.Link>
                                <Nav.Link href="/blog">Обратная связь</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        )
}