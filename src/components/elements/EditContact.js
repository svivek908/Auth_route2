import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactAdd';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const EditContact = () => {
    let { id } = useParams()
    const contact = useSelector((state) => state.contact.contact);
    console.log('yes is ms', getContact)
    const dispatch = useDispatch()
    let history = useHistory()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const UpdateContact = (e) => {
        e.preventDefault();
        const contact_data = Object.assign(contact, { name: name, phone: phone, email: email })
         dispatch(updateContact(UpdateContact))
        history.push('/')
    }
    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    }, [contact]);

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Edit Contact
            </div>
            <div className="card-body">
                <form onSubmit={UpdateContact}  >
                    <div className="form-group">
                        <input type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            name="phone"

                            className="form-control"
                            value={phone}
                            placeholder="Enter your Phone"
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            name="email"
                            className="form-control"
                            value={email}
                            placeholder="Enter your Email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-secondary">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
