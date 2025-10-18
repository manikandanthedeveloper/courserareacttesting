import { Button } from "react-bootstrap";

function Description() {
	return (
		<section className="container mt-4 mb-4">
			{/* Brief introduction or marketing message */}
			<h2>Welcome to Event Planner</h2>
			<p>
				Plan and organize your events effortlessly with Event Planner.
				From birthdays to corporate meetings, we've got you covered.
			</p>
			{/* Primary call-to-action button */}
			<Button variant="primary" className="d-block mx-auto">
				Get Started
			</Button>
		</section>
	);
}

export default Description;
