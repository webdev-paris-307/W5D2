import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function CreateProjectForm() {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const navigate = useNavigate()

	async function handleSubmit(event) {
		event.preventDefault()
		const project = {
			title,
			description,
		}
		try {
			const response = await axios.post(`${API_URL}/projects`, project)
			console.log(response.data)
			// We want to navigate to the project page we just created.
			navigate(`/projects/${response.data.id}`)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="description">Description:</label>
				<input
					type="text"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<button>Submit</button>
		</form>
	)
}

export default CreateProjectForm
