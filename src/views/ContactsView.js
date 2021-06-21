import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import ContactItem from '../components/ContactItem';
import Filter from '../components/Filter'

import { fetchContacts } from '../redux/contacts/contacts-operations';
import { getItems } from '../redux/contacts/contacts-selectors';

export default function ContactsView () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const items = useSelector(getItems);
  return (
    <>
      <h1 className="titleContacts">Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
  
      {items.length > 0 ? (
        <>
          <Filter />
          <ContactList>
            <ContactItem />
          </ContactList>
        </>
      ) : (
        <span>You have no contacts!</span>
      )}
    </>
  )

};
