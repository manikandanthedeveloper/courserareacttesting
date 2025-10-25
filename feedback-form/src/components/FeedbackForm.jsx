import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function FeedbackForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		feedback: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	function handleChange(event) {
		const { name, value } = event.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	function isValid() {
		let errorMessage = {};
		let isValid = true;

		if (!formData.name.trim()) {
			errorMessage.name = "Please enter valid input";
			isValid = false;
		} else if (!formData.email.trim() || !formData.email.includes("@")) {
			errorMessage.email = "Please enter valid email";
			isValid = false;
		} else if (!formData.feedback.trim()) {
			errorMessage.feedback = "Please enter valid feedback";
			isValid = false;
		} else if (!formData.rating) {
			errorMessage.rating = "Please select a rating";
			isValid = false;
		}

		setErrorMessage(errorMessage);
		return isValid;
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!isValid()) return;

		const confirmationMessage = `
               Name: ${formData.name}
               Email: ${formData.email}
               Feedback: ${formData.feedback}
               Rating: ${formData.rating}
             `;
		const isConfirmed = window.confirm(
			`Please confirm your details:\n\n${confirmationMessage}`
		);

		console.log("Feedback submitted:", formData);
		if (isConfirmed) {
			console.log("Submitting feedback:", formData);
			setFormData({
				name: "",
				email: "",
				feedback: "",
				rating: "",
			});
			setErrorMessage("");
			alert("Thank you for your valuable feedback!");
		}
	}

	return (
		<div className="col-md-6 offset-md-3 mt-5 mb-5">
			<Card>
				<Card.Header>
					<h3>We'd Love to Hear From You!</h3>
					<p>Please share your feedback with us.</p>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1"
						>
							<Form.Label>Your Name</Form.Label>
							<Form.Control
								name="name"
								type="text"
								placeholder="Your Name"
								onChange={handleChange}
								value={formData.name}
								isInvalid={!!errorMessage.name}
							/>
							<Form.Control.Feedback type="invalid">
								{errorMessage.name}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput2"
						>
							<Form.Label>Your Email</Form.Label>
							<Form.Control
								name="email"
								type="email"
								placeholder="name@example.com"
								onChange={handleChange}
								value={formData.email}
								isInvalid={!!errorMessage.email}
							/>
							<Form.Control.Feedback type="invalid">
								{errorMessage.email}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea3"
						>
							<Form.Label>Your Feedback</Form.Label>
							<Form.Control
								name="feedback"
								as="textarea"
								rows={3}
								placeholder="Your Feedback"
								onChange={handleChange}
								value={formData.feedback}
								isInvalid={!!errorMessage.feedback}
							/>
							<Form.Control.Feedback type="invalid">
								{errorMessage.feedback}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlRadio4"
						>
							<Form.Label>Rate our Service</Form.Label>
							<div>
								<Form.Check
									inline
									label="1"
									name="rating"
									type="radio"
									id="rating1"
									value="1"
									onChange={handleChange}
									isInvalid={!!errorMessage.rating}
								/>
								<Form.Check
									inline
									label="2"
									name="rating"
									type="radio"
									id="rating2"
									value="2"
									onChange={handleChange}
									isInvalid={!!errorMessage.rating}
								/>
								<Form.Check
									inline
									label="3"
									name="rating"
									type="radio"
									id="rating3"
									value="3"
									onChange={handleChange}
									isInvalid={!!errorMessage.rating}
								/>
								<Form.Check
									inline
									label="4"
									name="rating"
									type="radio"
									id="rating4"
									value="4"
									onChange={handleChange}
									isInvalid={!!errorMessage.rating}
								/>
								<Form.Check
									inline
									label="5"
									name="rating"
									type="radio"
									id="rating5"
									value="5"
									onChange={handleChange}
									isInvalid={!!errorMessage.rating}
								/>
								<Form.Control.Feedback type="invalid">
									{errorMessage.rating}
								</Form.Control.Feedback>
							</div>
						</Form.Group>
						<Button variant="danger" type="submit">
							Submit Feedback
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}
