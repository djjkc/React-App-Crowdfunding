import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectData(data);
        });
    }, []);

    // ali's weird workaround - probably needs refactoring this into state?
function getUsers() {
        fetch(`${process.env.REACT_APP_API_URL}users/`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        console.log(data)
        });
}

{const userData = getUsers()} 

    return (
        <div className="pledges">
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
        <ul>

        {/* {function matchUserPledgeData(userData, projectData){
            return projectData.filter(project => {
                return userData.some(user => {
                    return project.
                })
            })
        }} */}

        {projectData.pledges.map((pledgeData, index) => {
            console.log(pledgeData)
            // console.log(userData)

            // i want to loop through pledge info and user info, compare pledge.supporter to user.id, and when they are the same, set that as a variable, return it, set it in our <li> data

            // replace supporter with username where supporter.id = user.id

            return (
            <li> 
            ${pledgeData.amount} from {pledgeData.supporter}
            <div>Note: {pledgeData.comment}</div>
            </li>
            );
        })}


        </ul>
        </div>
    );
}

export default ProjectPage;