import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addContact } from '../../redux/contacts/contacts-actions';
import styles from './Form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    // if (name.trim() === '' || number.trim() === '') {
    //   alert(`All fields must be completed.`);
    // } else if (contacts.find(contact => contact.name === name)) {
    //   alert(`${name} is already in contacts.`);
    // } else if (contacts.find(contact => contact.number === number)) {
    //   alert(`${number} is already in contacts.`);
    // } else {
    //   setContacts(prevContacts => [contact, ...prevContacts]);
    // }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span className={styles.inputName}>Name</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label className={styles.label}>
        <span className={styles.inputName}>Number</span>
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Number"
          value={number}
          onChange={handleInputChange}
        ></input>
      </label>
      <button className={styles.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
