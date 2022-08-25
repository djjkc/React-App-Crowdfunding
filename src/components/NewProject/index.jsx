import React, { useState, useEffect } from "react";
// import "./LoginForm.css";
import { useNavigate } from 'react-router-dom'

function NewProject() {
    const navigate = useNavigate()
    const [newProject, setProjects] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: true,
        date_created: new Date().toJSON(),
    });

    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            navigate("/login")
        }
    }, [])

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProjects({ ...newProject, [id]: value})
    };

    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
            method: "post",
            headers: {
                "Authorization": `Token ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProject),
        })

        return response.json()
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( newProject.title && newProject.description && newProject.goal && newProject.image) {
            postData().then(data => {
                navigate(`/project/${data.id}`)
            });
        }
    };



    return (
        <form>
        <div>
        <label htmlFor="projectTitle">Project Title:</label>
        <input
            type="text"
            id="title"
            placeholder="Enter Project Title"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            placeholder="Tell us about your project"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="goal">Goal:</label>
        <input
            type="number"
            id="goal"
            placeholder="Your goal amount"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="image">Image:</label>
        <input
            type="url"
            id="image"
            placeholder="Image URL here"
            onChange={handleChange}
        />
        </div>
        <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
        </form>
    );
}
export default NewProject