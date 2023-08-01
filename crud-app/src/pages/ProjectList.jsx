import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

function ProjectList() {
	const [projects, setProjects] = useState(null)

	useEffect(() => {
		axios
			.get(`${API_URL}/projects`)
			.then((res) => {
				console.log(res)
				setProjects(res.data)
			})
			.catch((e) => console.error(e))
	}, [])

	if (!projects) {
		return <div className="loading">Loading...</div>
	}
	return (
		<div>
			{projects.map((project) => {
				return (
					<article key={project.id}>
						<Link to={`/projects/${project.id}`}>
							<h2>{project.title}</h2>
						</Link>
					</article>
				)
			})}
		</div>
	)
}

export default ProjectList
