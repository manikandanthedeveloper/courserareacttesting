import Navigation from "./components/Navigation";
import Todolists from "./components/Todolists";

function App() {
	return (
		<div>
			<Navigation />
			{/* <ToDoForm addTodo={addTodo} /> */}
			<Todolists />
		</div>
	);
}

export default App;
