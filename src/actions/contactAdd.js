import {CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT} from '../constants/types'
export   const addContact = (contact)=>({
    type:CREATE_CONTACT,
      Payload:contact
})
     


//get contact

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
})


//UPdate contact

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
})

//delete contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
})

