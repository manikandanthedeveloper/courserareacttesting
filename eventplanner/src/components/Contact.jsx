import { Button, Form } from "react-bootstrap";

function Contact() {
	return (
		<section className="container mt-4 pb-4">
			<div className="row">
				<div className="col-md-4 offset-md-4">
					{/* Section heading */}
					<h2>Contact Us</h2>
					{/* Contact form */}
					<Form>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="John Doe" />
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput2"
						>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="name@example.com"
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Example textarea</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
