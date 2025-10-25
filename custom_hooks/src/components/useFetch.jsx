import { useEffect, useState } from "react";

function useFetch(url) {
	const [data, setData] = useState();

	useEffect(() => {
		if (!url) return;

		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((error) => {
				console.log("Fetch error:", error);
				setData("");
			});
	}, [url]);

	return [data];
}

export default useFetch;
