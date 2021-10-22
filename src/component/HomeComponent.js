import React, { Component } from 'react'
import HeaderComopent from './HeaderComponent'
import add from '../assets/icons/add-24px.svg'
import './HeaderComponent.css'
import HttpService from '../service/HTTPService.js'

export class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }
    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        HttpService.getEmployeeList().then(result => {
            this.setState(
                { employees: result.data }
            );
            console.log(result.data);
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <HeaderComopent />
                <div className='main-content'>
                    <div className='Header-cotent'>
                        <div className='emp-details-text'>
                            Employee Details <div className='emp-count'>10</div>
                            <div>
                                <a href='add.html' className='add-button'>
                                    <img src={add} alt='add user logo'></img>Add User
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <table border="true">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Notes</th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                           
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.employees.smap(employee => (
                            <tr key={employee.empId}>
                                <td>{employee.name}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
}
export default HomeComponent;