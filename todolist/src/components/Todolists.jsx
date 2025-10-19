import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Todolists() {
	const [todos, setTodos] = useState([]);
	const [category, setCategory] = useState("");
	const [tasks, setTasks] = useState({});

	const onCategoryHandler = (e) => {
		e.preventDefault();

		if (category.trim() !== "") {
			setTodos([...todos, { category: category, lists: [] }]);
			setCategory("");
		}
	};

	const handleTaskChange = (index, value) => {
		setTasks({ ...tasks, [index]: value });
	};

	const handleAddTask = (index) => {
		if (tasks[index] && tasks[index].trim() !== "") {
			const newTodos = [...todos];

			newTodos[index].lists.push(tasks[index]);

			setTodos(newTodos);
			setTasks({ ...tasks, [index]: "" });
		}
	};

	const handleOnDelete = (index) => {
		const newTodos = [...todos];

		newTodos.splice(index, 1);

		setTodos(newTodos);
	};

	return (
		<>
			<section className="todoform container mt-4 mb-4">
				<div className="row">
					<h2 className="mb-4">My To-do List</h2>
					<div className="col-md-4 offset-md-4">
						<Form onSubmit={onCategoryHandler}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Task Category</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter category"
									value={category}
									onChange={(e) =>
										setCategory(e.target.value)
									}
								/>
							</Form.Group>
							<Button
								variant="success"
								type="submit"
								className="mt-3 d-block mx-auto"
							>
								Add Category
							</Button>
						</Form>
					</div>
				</div>
			</section>
			<section className="todolists container mt-4 mb-4">
				<div className="row">
					{todos.map((todo, index) => (
						<div className="col-md-4 mb-4" key={index}>
							<Card>
								<Card.Header className="d-flex justify-content-between">
									<h2 className="mb-0">{todo.category}</h2>
									<span
										className="btn btn-danger card-close"
										onClick={() => handleOnDelete(index)}
									>
										X
									</span>
								</Card.Header>
								<Card.Body>
									<ul className="list-group list-group-flush mb-4">
										{todo.lists.map((list, listindex) => (
											<li
												className="list-group-item"
												key={listindex}
											>
												{list}
											</li>
										))}
									</ul>
									<div className="row g-3">
										<label className="col-sm-2 col-form-label">
											Task:
										</label>
										<div className="col-sm-6">
											<input
												type="text"
												value={tasks[index] || ""}
												onChange={(e) =>
													handleTaskChange(
														index,
														e.target.value
													)
												}
												className="form-control"
											/>
										</div>
										<div className="col-sm-4">
											<Button
												variant="success"
												type="button"
												onClick={() =>
													handleAddTask(index)
												}
											>
												Add task
											</Button>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default Todolists;
