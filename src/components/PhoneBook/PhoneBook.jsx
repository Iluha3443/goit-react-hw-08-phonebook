import { nanoid } from 'nanoid';
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { useDispatch } from 'react-redux';
import { CreatedNewContacts } from 'components/redux/contacts-api';

const PhoneBook = () => {
    const dispatch = useDispatch();
    
    const addContact = (evt) => {
        evt.preventDefault();
        const nameContact = evt.target.name.value;
        const numberTel = evt.target.number.value;
        const contact = {
            name: nameContact,
            number: numberTel,
        }

        dispatch(CreatedNewContacts(contact))
        evt.target.name.value = '';
        evt.target.number.value = '';
    }

         return (
             <>
                 <ContactForm Submit={addContact} />
                 <Filter /> 
                 <ContactList/>
             </>
    )};

export default PhoneBook;