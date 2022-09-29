import Form from './form';
import ContactList from './ContactList';
import './App.css';
import { useState } from 'react';


const INITIAL_CONTACT = [{ id: 1, first: 'First name', last: 'Last name', address: 'Address', phone: 'Phone Number', }];

function App() {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [contacts, setContacts] = useState(INITIAL_CONTACT);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact])
  };

  return (
    <div className="App">

      <Form key={contacts.id} addContact={addContact} first={first} last={last} address={address} phone={phone} setFirst={setFirst} setLast={setLast} setAddress={setAddress} setPhone={setPhone} />

      <ContactList key={contacts.id} contacts={contacts} first={first} last={last} address={address} phone={phone} />

    </div>
  );
}

export default App;
