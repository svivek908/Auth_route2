import React from 'react'
import Avtar from 'react-avatar';
import { NavLink, } from 'react-router-dom';
import { deleteContact } from '../../../actions/contactAdd'
import { useDispatch} from 'react-redux'

export default function Contact({ contact }) {
  const dispatch=useDispatch()
  const { name, phone, email, id } = contact;
  return (

    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <div className="checkbox">
            <label><input type="checkbox" value="" /></label>
          </div>
        </div>
      </td>
      <td><Avtar className="mr-2" name={name} size={45} round={true} />{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <NavLink to= {`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </NavLink>

        
          <span className="material-icons" onClick={()=>dispatch(deleteContact(id))}>delete</span>
       
      </td>
    </tr>

  )
}
