import Contact from "./components/Contact.jsx";
import Description from "./components/Description.jsx";
import EventCategories from "./components/EventCategories.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {
	return (
		<div className="app-pattern">
			<Navigation />
			<Description />
			<EventCategories />
			<Features />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
