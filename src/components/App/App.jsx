import { useEffect, useMemo, useState } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { FormPhoneBook } from '../Form/Form';
import { nanoid } from 'nanoid';
import { FindContacts } from '../FindContacts/FindContacts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { PageWrapper } from './App.styled';

const initialContacts = () => {
  const sevedUsers = localStorage.getItem('users');
  if (sevedUsers !== null) {
    return JSON.parse(sevedUsers);
  } else {
    return [];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const onSubmit = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      Notify.failure(`${name} is alredy in contacts`);
      return;
    }
    const newContact = { name, number, id: nanoid() };
    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const onDelete = delEl => {
    setContacts(contacts.filter(contact => contact.id !== delEl));
  };
  const onFindUser = ({ target: { value } }) => {
    setFilter(value);
  };
  const filterNumbers = useMemo(() => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <PageWrapper>
      <h1>Phonebook</h1>
      <FormPhoneBook onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <FindContacts onFindUser={onFindUser} />
      <Contacts
        onDelete={onDelete}
        users={filterNumbers}
        onFindUser={onFindUser}
      />
    </PageWrapper>
  );
};
