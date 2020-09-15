import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addContact} from '../../../actions/contactAdd';
import shortid from 'shortid'; 
import {useHistory} from 'react-router-dom'


const ContactsAdd = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const SubmitData = (e) => {
        e.preventDefault();
        const contact_data={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(contact_data))
        history.push('/')
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add Contact
            </div>
            <div className="card-body">
                <form onSubmit={SubmitData}>
                    <div className="form-group">
                        <input type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your Name"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="number"
                            name="phone"
                            className="form-control"
                            placeholder="Enter your Phone"
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your Email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-secondary">Add Contact</button>
                </form>
            </div>
        </div>
    )
}

export default ContactsAdd
