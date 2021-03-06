import { React, useState, useEffect } from 'react';
import AEServiceList from '../components/aeservices/AEServiceList';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function AEServicePage( {setAEServiceToEdit} ) {
    const [aeservices, setAEServices] = useState([]);
    const [services, setServices] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [service, setService] = useState();
    const [employee, setEmployee] = useState();
    const navigate = useNavigate();


    const getAEServices = async () => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/animalemployeeservices');
        const aeservices = await res.json();
        setAEServices(aeservices)
    };

    useEffect(() => {
        getAEServices();
    }, []);

    const addAEServices = () => {
        Axios.post('http://flip1.engr.oregonstate.edu:22131/animalemployeeservices', {
            animal_services_id: service,
            employee_id: employee,
        }).then(() => {
            alert("Successfully added Animal Employee Services")
        });
    };

    const editAEService = a_e_service => {
        setAEServiceToEdit(a_e_service);
        navigate('/edit-animal-employee-service');
    }

    const deleteAEService = (animal_service_id, employee_id) => {
        Axios.delete(`http://flip1.engr.oregonstate.edu:22131/animalemployeeservices/${animal_service_id}/${employee_id}`);
        setTimeout(() => getAEServices(), 500)
    }

    const getServices = async() => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/animalservices');
        const services = await res.json()
        setServices(services)
    };

    useEffect(() => {
        getServices();
    }, []);

    const getEmployees = async () => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/employees');
        const employees = await res.json();
        setEmployees(employees)
    };

    useEffect(() => {
        getEmployees();
    }, []);

    let animalservicesOptions = services.map((service, i) =>
        <option key={i} value={service.animal_services_id}>{service.animal_services_id}</option>
    )

    let employeeOptions = employees.map((employee, i) =>
        <option key={i} value={employee.employee_id}>`{employee.fname} {employee.lname}`</option>
    )

    return (
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <form>
                <fieldset>
                    <legend>Add an entry</legend>
                    <label>Animal Service</label>
                    <select id="animalservice" name="animalservice" value={service} onChange={e => setService(e.target.value)}>
                        <option>Select an animal service</option>
                        {animalservicesOptions}
                    </select>
                    <label>Employee</label>
                    <select id="employeeid" value={employee} onChange={e => setEmployee(e.target.value)}>
                        <option>Select an employee</option>
                        {employeeOptions}
                    </select>
                    <button onClick={addAEServices}>Add</button>
                </fieldset>
            </form>
            <br />
            <div>
               <AEServiceList deleteAEService={deleteAEService} aeservices={aeservices} editAEService={editAEService}/>
            </div>
        </body>
    )
}

export default AEServicePage;