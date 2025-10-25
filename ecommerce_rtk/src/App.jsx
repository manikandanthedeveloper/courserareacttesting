import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import SuperCoin from "./components/SuperCoin";

export default function App() {
	return (
		<>
			<NavBar />
			<SuperCoin />
			<ShoppingCart />
			<Products />
		</>
	);
}
