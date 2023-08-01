import { useState } from "react"
import axios from "axios"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function CreateTask({ id, fetchProject }) {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	console.log(id)

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const taskToCreate = {
				title,
				description,
				projectId: Number(id),
			}

			const response = await axios.post(`${API_URL}/tasks`, taskToCreate)
			console.log(response)
			fetchProject()
			setTitle("")
			setDescription("")
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="CreateTask">
			<h3>Add New Task</h3>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Title:</label>
					<input
						type="text"
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label>Description:</label>
					<textarea
						type="text"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<button type="submit">Add Task</button>
			</form>
		</div>
	)
}

export default CreateTask
