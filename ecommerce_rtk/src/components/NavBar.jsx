import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
	return (
		<Navbar bg="primary" expand="lg" variant="dark">
			<div className="container-fluid">
				<Navbar.Brand href="#home">E-commerce Store</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#products">Products</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
				</Nav>
			</div>
		</Navbar>
	);
}
