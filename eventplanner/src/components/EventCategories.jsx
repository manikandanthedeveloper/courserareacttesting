import { Card, ListGroup } from "react-bootstrap";

function EventCategories() {
	return (
		<section className="container mt-4">
			<div className="row">
				<div className="col-md-4">
					{/* Social event types */}
					<Card>
						<Card.Header as="h5">Social Events:</Card.Header>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>
									Birthday parties
								</ListGroup.Item>
								<ListGroup.Item>
									Anniversary celebrations
								</ListGroup.Item>
								<ListGroup.Item>
									Wedding receptions
								</ListGroup.Item>
								<ListGroup.Item>Baby showers</ListGroup.Item>
								<ListGroup.Item>
									Graduation parties
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</div>

				{/* Entertainment-based event types */}
				<div className="col-md-4">
					<Card>
						<Card.Header as="h5">Entertainment Events:</Card.Header>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>Concerts</ListGroup.Item>
								<ListGroup.Item>
									Theater performances
								</ListGroup.Item>
								<ListGroup.Item>Comedy shows</ListGroup.Item>
								<ListGroup.Item>Film screenings</ListGroup.Item>
								<ListGroup.Item>Art exhibitions</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</div>

				{/* Community-focused event types */}
				<div className="col-md-4">
					<Card>
						<Card.Header as="h5">Community Events:</Card.Header>
						<Card.Body>
							<ListGroup variant="flush">
								<ListGroup.Item>Food drives</ListGroup.Item>
								<ListGroup.Item>
									Charity fundraisers
								</ListGroup.Item>
								<ListGroup.Item>
									Neighborhood cleanups
								</ListGroup.Item>
								<ListGroup.Item>Local festivals</ListGroup.Item>
								<ListGroup.Item>
									Support group meetings
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</div>
			</div>
		</section>
	);
}

export default EventCategories;
