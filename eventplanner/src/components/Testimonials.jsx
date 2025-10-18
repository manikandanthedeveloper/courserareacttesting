function Testimonials() {
	return (
		<section className="container mt-4">
			<div className="row testimonials">
				{/* Section heading */}
				<h2>Testimonials</h2>
				{/* Individual testimonial block */}
				<blockquote className="blockquote">
					<p>
						"Event Planner made organizing my wedding a breeze.
						Highly recommended!"
					</p>
					<p className="author">- Emily Johnson</p>
				</blockquote>
				{/* Another testimonial block */}
				<blockquote className="blockquote">
					<p>
						"I use Event Planner for all my corporate events. It
						saves me so much time and effort!"
					</p>
					<p className="author">- John Smith</p>
				</blockquote>
			</div>
		</section>
	);
}

export default Testimonials;
