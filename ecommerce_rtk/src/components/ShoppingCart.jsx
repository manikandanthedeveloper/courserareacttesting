import { useDispatch, useSelector } from "react-redux";
import {
	removeFromCart,
	clearCart,
	increaseQuantity,
	decreaseQuantity,
} from "../components/CartSlice";
export default function ShoppingCart() {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const handleRemoveFromCart = (item) => {
		dispatch(removeFromCart(item));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const handleIncreaseQuantity = (item) => {
		dispatch(increaseQuantity(item));
	};

	const handleDecreaseQuantity = (item) => {
		dispatch(decreaseQuantity(item));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2 className="mt-4">Shopping Cart</h2>
					<button
						className="btn btn-danger mt-4 mb-4"
						onClick={handleClearCart}
						disabled={cartItems.length === 0}
					>
						Clear Cart
					</button>
					{cartItems.length === 0 ? (
						<p>Your cart is currently empty.</p>
					) : (
						<ul className="list-group">
							{cartItems.map((item) => (
								<li
									key={item.id}
									className="list-group-item d-flex justify-content-between align-items-center"
								>
									<div>
										<h5 className="mb-1">{item.name}</h5>
										<p className="mb-1">${item.price}</p>
									</div>
									<div className="quantity-controler">
										<button
											className="btn btn-secondary btn-sm me-2"
											onClick={() =>
												handleDecreaseQuantity(item)
											}
										>
											-
										</button>
										<span className="quantity">
											{item.quantity}
										</span>
										<button
											className="btn btn-secondary btn-sm ms-2"
											onClick={() =>
												handleIncreaseQuantity(item)
											}
										>
											+
										</button>
									</div>
									<button
										className="btn btn-danger"
										onClick={() =>
											handleRemoveFromCart(item)
										}
									>
										Remove
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}
