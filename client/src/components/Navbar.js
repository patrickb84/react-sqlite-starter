import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavbarRoutes } from "../routes";
import { useAppContext } from "../contexts/AppContextProvider";
import { useEffect } from "react";

const NavBar = () => {
  const { onHomePage } = useAppContext();

  return (
    <Navbar bg={"dark"} variant={"dark"} fixed="top" expand="md">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <i className="fad text-muted- fa-cat-space me-1"></i> Collection{" "}
            <em className="text-warning-">&</em> Madness
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="ms-auto ml-auto">
            {NavbarRoutes.map((rt) => {
              return (
                <LinkContainer key={rt.label} to={rt.path} exact={rt.exact}>
                  <Nav.Link>{rt.label}</Nav.Link>
                </LinkContainer>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
