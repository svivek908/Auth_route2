import React from 'react'
import { useSelector } from 'react-redux';
import Contact from './Contact';



const Contacts = () => {
  const MyContacts = useSelector(state => state.contact.contacts);
  console.log(MyContacts);
   
  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <div className="checkbox">
                  <label><input type="checkbox" value="" /></label>
                </div>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            MyContacts.map((contact) => <Contact contact={contact} key={contact.id} />
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default Contacts
