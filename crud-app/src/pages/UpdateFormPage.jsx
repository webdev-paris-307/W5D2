import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function UpdateFormPage() {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const navigate = useNavigate()
	const { id } = useParams()

	useEffect(() => {
		axios
			.get(`${API_URL}/projects/${id}`)
			.then((response) => {
				console.log(response)
				setTitle(response.data.title)
				setDescription(response.data.description)
			})
			.catch((e) => console.log(e))
	}, [])

	async function handleSubmit(event) {
		event.preventDefault()
		try {
			const updatedProject = { title, description }
			const response = await axios.put(
				`${API_URL}/projects/${id}`,
				updatedProject
			)
			console.log(response)
			navigate("/projects")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title:</label>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
				/>
			</div>
			<div>
				<label htmlFor="description">Description:</label>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<button>Update</button>
		</form>
	)
}

export default UpdateFormPage
