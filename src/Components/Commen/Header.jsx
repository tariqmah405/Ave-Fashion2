import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link } from "react-router-dom";






const Header = () => {


  
  const nav = [
    {path: "/mens",
    text: "mens",
    },
    {path: "/productpage",
    text: "productpage",
    },
    {path: "/thebrand",
    text: "thebrand",
    },
    {path: "/localstore",
    text: "localstore",
    },
    {path: "/lookbook",
    text: "lookbook",
    },
  ]
  return (
    <header>
    <Navbar className='navbar' bg="#fff" expand="lg">
      <Container fluid>
        <Navbar.Brand className='nab_brand' href="#"><span>AVENUE</span> FASHION</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{ maxHeight: '100px', textTransform:"uppercase" }}
            navbarScroll
          >
              {nav.map((list) => (
                <Nav.Link as={Link} to={list.path}>{list.text}</Nav.Link>
              ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <AiOutlineSearch className='search'/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    );
}

export default Header;
