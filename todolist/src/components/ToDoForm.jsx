import { Form, Button } from "react-bootstrap";
function ToDoForm({ addTodo }) {
	console.log("ToDoForm rendered");
	return (
		<section className="todoform container mt-4 mb-4">
			<div className="row">
				<h2 className="mb-4">My To-do List</h2>
				<div className="col-md-4 offset-md-4">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Task Category</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter category"
							/>
						</Form.Group>
						<Button
							variant="success"
							type="submit"
							className="mt-3 d-block mx-auto"
							onClick={addTodo}
						>
							Add Category
						</Button>
					</Form>
				</div>
			</div>
		</section>
	);
}

export default ToDoForm;
