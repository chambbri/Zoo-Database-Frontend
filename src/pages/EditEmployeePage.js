import Axios from "axios";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const EditEmployeePage = ({ employeeToEdit }) => {
    const [fname, setFname] = useState(employeeToEdit.fname);
    const [lname, setLname] = useState(employeeToEdit.lname);
    const [phone, setPhone] = useState(employeeToEdit.phone);
    const [email, setEmail] = useState(employeeToEdit.email);
    const [job, setJob] = useState(employeeToEdit.job_title);
    const navigate = useNavigate();

    const editEmployee = () => {
        Axios.put('http://flip1.engr.oregonstate.edu:22131/employees' + `/${employeeToEdit.employee_id}`, {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            job_title: job,
        })
        navigate('/employees')
    };


    return (
        <>
            <div className='app-container'>
                <h2>Edit employee</h2>
                <label>First Name <input type="text" id="fname" value={fname} onChange={e =>setFname(e.target.value)} /></label>
                <label>Last Name <input type="text" id="lname" value={lname} onChange={e =>setLname(e.target.value)} /></label>
                <label>Phone Number <input type="tel" id="phone" value={phone} onChange={e =>setPhone(e.target.value)} /></label>
                <label>Email<input type="email" id="email" value={email} onChange={e =>setEmail(e.target.value)} /></label>
                <label>Job Title<input type="text" id="job" value={job} onChange={e =>setJob(e.target.value)} /></label>
                <button onClick={editEmployee}>Save</button>
            </div>
        </>
    );
    
}

export default EditEmployeePage