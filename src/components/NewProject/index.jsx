import React, { useState } from "react";
// import "./LoginForm.css";
import { useNavigate } from 'react-router-dom'

function NewProject() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })

        return response.json()
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then(data => {
                window.localStorage.setItem('token', data.token)
                navigate(`/projects/${<id/>}`)
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
            type="integer"
            id="goal"
            placeholder="What is your goal amount?"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="image">Image:</label>
        <input
            type="file"
            id="image"
            placeholder="Upload your image here"
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