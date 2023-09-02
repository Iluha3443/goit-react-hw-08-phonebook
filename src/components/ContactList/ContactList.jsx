import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { Spinner } from 'components/Spinner/Spinner';
import { fetchUserContacts, DeleteContactUser } from '../../redux/contacts-api';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const isLoading = useSelector(state => state.auth.isLoading);
  const filter = useSelector(state => state.contacts.filter);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn && dispatch(fetchUserContacts());
  }, [isLoggedIn, dispatch]);

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul className={css.list}>
      {isLoading && <Spinner />}
      {filterContacts().map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(DeleteContactUser(contact.id))}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};
