import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import ProjectListPage from "./pages/ProjectList"
import OneProjectPage from "./pages/OneProject"
import CreateProjectPage from "./pages/CreateProjectForm"
import UpdateFormPage from "./pages/UpdateFormPage"

function App() {
	// Import Browser Router after installing react-router-dom
	return (
		<>
			<div className="App">
				<Navbar />
				{/* Setup Homepage route */}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectListPage />} />
					<Route path="/projects/:id" element={<OneProjectPage />} />
					<Route path="/projects/:id/update" element={<UpdateFormPage />} />
					<Route path="/projects/create" element={<CreateProjectPage />} />
				</Routes>
			</div>
		</>
	)
}

export default App
