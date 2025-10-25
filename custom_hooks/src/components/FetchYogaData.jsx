import useFetch from "./UseFetch";

export default function FetchYogaData() {
	const apiUrl = "https://api.npoint.io/4459a9a10e43812e1152";
	const [data] = useFetch(apiUrl);

	return (
		<div className="mx-auto container mt-10">
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Benefits
							</th>
							<th scope="col" className="px-6 py-3">
								Time duration
							</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.map((item) => (
								<tr
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
									key={item.name}
								>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{item.name}
									</th>
									<td className="px-6 py-4">
										{item.benefits}
									</td>
									<td className="px-6 py-4">
										{item.time_duration}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
