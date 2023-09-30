import { Contacts } from '../Contacts/Contacts';
import { FormPhoneBook } from '../Form/Form';
import { FindContacts } from '../FindContacts/FindContacts';
import { PageWrapper } from './App.styled';

export const App = () => {
  return (
    <PageWrapper>
      <h1>Phonebook</h1>
      <FormPhoneBook />
      <h2>Contacts</h2>
      <FindContacts />
      <Contacts />
    </PageWrapper>
  );
};
