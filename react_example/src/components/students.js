import React from 'react';
import StudentAPI from '../api';

class Students extends React.Component{
    constructor(){
        super();
        this.state = {
            students:[]
        };
    }

    componentDidMount(){
        StudentAPI.all().then(res=>{
            return res.json();
        }).then(students=>{
            this.setState({
                students,
            });
        });
    }

    render(){
        return (
            <ul>
                {
                    this.state.students.map((s)=>{
                        return (
                            <li>{s.firstName}, {s.lastName} </li>
                        )
                    })
                }
            </ul>
        )
    }
}


export default Students;