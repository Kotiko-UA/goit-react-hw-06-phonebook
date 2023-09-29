import { Contacts } from '../Contacts/Contacts';
import { FormPhoneBook } from '../Form/Form';
import { FindContacts } from '../FindContacts/FindContacts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { PageWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, delContact, filterStatus } from 'components/redax/reducer';

export const App = () => {
  const filter = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const onSubmit = ({ name, number }) => {
    if (contacts.find(contact => contact.number === number)) {
      Notify.failure(`${number} is alredy in contacts`);
      return;
    }
    const newContact = { name, number };
    dispatch(addContact(newContact));
  };

  const onDelete = delEl => {
    dispatch(delContact(delEl));
  };
  const onFindUser = ({ target: { value } }) => {
    dispatch(filterStatus(value));
  };
  const filterNumbers = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PageWrapper>
      <h1>Phonebook</h1>
      <FormPhoneBook onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <FindContacts onFindUser={onFindUser} />
      <Contacts onDelete={onDelete} users={filterNumbers} />
    </PageWrapper>
  );
};
