import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SuperCoin() {
	const [superCoin, setSuperCoin] = useState(0);
	const cartItems = useSelector((state) => state.cart.items);
	const totalAmount = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	useEffect(() => {
		if (totalAmount >= 100 && totalAmount < 200) {
			setSuperCoin(10);
		} else if (totalAmount >= 200 && totalAmount < 300) {
			setSuperCoin(20);
		} else if (totalAmount >= 300) {
			setSuperCoin(30);
		} else {
			setSuperCoin(0);
		}
	}, [totalAmount]);

	return (
		<div className="super-coin container mt-4 p-3 border bg-light">
			<div className="row">
				<div className="col-md-12">
					<h2>Super Coin</h2>
					<p>Earn rewards with every purchase!</p>
					<p>Total Amount: ${totalAmount}</p>
					<p>Super Coin Earned: {superCoin}</p>
				</div>
			</div>
		</div>
	);
}
