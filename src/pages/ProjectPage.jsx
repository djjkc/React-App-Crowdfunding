import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import Moment from "moment";

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const [users, setUsers] = useState([])
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

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setUsers(data)
            });
    }, [])
    
    function getUsernameForId(id) {
        const user=users.filter(u => u.id === id)[0]
        console.log(user)
        return user.username
    }

    function changeDateFormat() {
        const formatDate = Moment().format('DD-MM-YYYY')
        return formatDate.date_created
    }

    return (
        <div className="pledges">
            <h2>{projectData.title}</h2>
            <h3>Created at: {changeDateFormat(projectData.date_created)}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
        <ul>


        {projectData.pledges.map((pledgeData, index) => {
            console.log(pledgeData)
            
            return (
            <li> 
            ${pledgeData.amount} from {getUsernameForId(pledgeData.supporter)}
            <div>Note: {pledgeData.comment}</div>
            </li>
            );
        })}


        </ul>
        </div>
    );
}

export default ProjectPage;