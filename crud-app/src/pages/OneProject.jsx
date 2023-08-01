import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, Link } from "react-router-dom"
import CreateTask from "../components/CreateTask"
const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

// const tree = {
// 	PROJECT_PAGE: '/projects'
// }

function OneProject() {
	const [project, setProject] = useState(null)
	// const params = useParams()
	const { id } = useParams()
	const navigate = useNavigate()

	async function fetchOneProject() {
		try {
			// To get the taks associated to a project, JSON server needs us
			// To add ?_embed=tasks at the end of the URL
			const res = await axios.get(`${API_URL}/projects/${id}?_embed=tasks`)
			setProject(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	async function handleDelete() {
		try {
			// await fetch(`${API_URL}/projects`, {
			// 	method: "DELETE",
			// })
			await axios.delete(`${API_URL}/projects/${id}`)
			navigate("/projects")
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchOneProject()
	}, [])

	if (!project) {
		return <div className="loading">Loading...</div>
	}
	return (
		<div>
			<h2>{project.title}</h2>
			<p>{project.description}</p>
			<div className="actions">
				<button onClick={handleDelete}>Delete</button>
				<Link to={`/projects/${id}/update`}>Update</Link>
			</div>

			<CreateTask id={id} fetchProject={fetchOneProject} />

			<ul>
				{project.tasks.map((task) => {
					return (
						<li key={task.id}>
							<h3>{task.title}</h3>
							<p>{task.description}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default OneProject
