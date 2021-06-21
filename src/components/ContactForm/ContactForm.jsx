/* import React, { Component } from 'react';
import { connect } from 'react-redux'; */
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addContact, getItems } from '../../redux/contacts';
import { nanoid } from 'nanoid'

export default function ContactForm () {
  
  const dispatch = useDispatch();
  const loginInputNameId = nanoid();
  const loginInputNamberId = nanoid();
  
  const [name, setName] = useState('');
  const handleChangeName = useCallback(event => {
    setName(event.target.value);
  }, []);

  const [number, setNumber] = useState('');
  const handleChangeNumber = useCallback(event => {
    setNumber(event.target.value);
  }, []);

  const items = useSelector(getItems);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const addInputValue = contact => contact.name === name || contact.number === number;

      if (items.some(addInputValue)) {
        alert(`Contact is already in contacts`);
        return;
      }

      dispatch(addContact({ name, number }));

      setName('');
      setNumber('');
    },
    [dispatch, items, name, number],
  );
  
  return (
    <section className="sectionFormContacts">
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginInputNameId}>Name</label>
          
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id = {loginInputNameId}
          value={name}
          onChange = {handleChangeName}
                
        />
        

        <label htmlFor={loginInputNamberId}>Number</label>
          
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id = {loginInputNamberId}
          value={number}
          onChange = {handleChangeNumber}
        />
        
                  
        <button type="submit" className="btn btnForm">Add contact</button>
      </form>
    </section>

  )
  
}