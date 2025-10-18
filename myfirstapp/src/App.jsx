function App() {
	const timeNow = new Date().toLocaleTimeString();
	return (
		<div>
			<h1>Hello, World!</h1>
			<p>Welcome to my first React app.</p>
			<p>The current time is: {timeNow}</p>
		</div>
	);
}

export default App;
