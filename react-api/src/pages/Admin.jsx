import React from 'react';
import axios from 'axios';
import '../styles/pages/Admin.css';
import 'font-awesome/css/font-awesome.min.css';

export class Admin extends React.Component {
    
    constructor() {
        super()
        this.state = {
            tables : []
        };
        this.handleadmin = this.handleadmin.bind(this);
    }
     
    componentDidMount() {
        axios.get(`http://localhost:3001/admin`)
            .then(res => {
                console.log(res);
                this.setState({ tables: res.data });
            });
    }

    handleadmin(){
        
    }

    render() {
        const buttons = this.state.tables.map( e => {
            return <div className="admin_element" id={e} onClick={ () => {this.handleadmin(`${e}`)}}>
                 <i className="fa fa-database"></i>
                <p>{e}</p>
             </div>}); 
        return (
            <div>
                { buttons }
            </div>
        )
    }
}

export default Admin;
