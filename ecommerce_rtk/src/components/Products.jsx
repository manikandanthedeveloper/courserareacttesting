import Product from "./Product";
import { useFetch } from "./useFetch";

export default function Products() {
	const { data, loading, error } = useFetch("./data.json");

	return (
		<div className="container">
			<div className="row">
				<h1 className="mt-4 mb-4">Products</h1>
				{loading && <p>Loading...</p>}
				{error && <p>Error: {error.message}</p>}
				{data &&
					data.map((product) => (
						<Product key={product.id} product={product} />
					))}
			</div>
		</div>
	);
}
