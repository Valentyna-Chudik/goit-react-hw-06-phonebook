import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';
import Notification from './components/Notification/Notification';
import { getContacts } from './redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 ? (
          <ContactsList />
        ) : (
          <Notification message="No records yet." />
        )}
      </Section>
    </Container>
  );
}
