import React, { useState } from "react";

function Content() {

    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState('');

    const handleSubmit = () => {
        if (job === '') {
        } 
        else {
            setJobs(prev => [...prev, job])
            setJob('')
        }
    }

    const deteleJob = (index) => {
        const newJobs = [...jobs]
        newJobs.splice(index, 1)
        setJobs(newJobs)
    }

    return (
        <div className="Content">
            <h1>TodoList</h1>
            <div className="inputGroup">
                <input value={job} className="inputJob" placeholder={'Hey Ferb! I know what\'s we gonna do today.'} onChange={e => setJob(e.target.value)}/>
                <button type="button" className="btn btn-info" onClick={handleSubmit}>Add</button>
            </div>
                <ul>
                    
                    {jobs.map((element, index) => (
                        <li className="list-group-item" key={index} >{element}<span className="buttonX" onClick={() => deteleJob(index)}>&times;</span></li>
                    ))}
                </ul>
        </div>
    )
}

export default Content;