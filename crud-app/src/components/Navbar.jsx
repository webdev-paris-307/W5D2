import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
	return (
		<nav
			style={{
				display: "flex",
				gap: "1rem",
				justifyContent: "center",
			}}>
			<Link to={"/"}>Home</Link>
			<Link to={"/projects"}>All projects</Link>
		</nav>
	)
}

export default Navbar
