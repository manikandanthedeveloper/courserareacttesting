import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../components/CartSlice";

export default function Product({ product }) {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<div className="col-md-4">
			<div className="card mb-4">
				<img
					src={product.imageUrl}
					alt={product.name}
					className="card-img-top height-200 object-fit-cover"
				/>
				<div className="card-body">
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text height-50">{product.description}</p>
					<p className="card-text">${product.price}</p>
					<button
						className="btn btn-primary"
						onClick={() => handleAddToCart(product)}
						disabled={cartItems.find(
							(item) => item.id === product.id
						)}
					>
						{cartItems.find((item) => item.id === product.id)
							? "In Cart"
							: "Add to Cart"}
					</button>
				</div>
			</div>
		</div>
	);
}
