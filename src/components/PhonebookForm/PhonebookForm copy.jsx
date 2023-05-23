// import propTypes from 'prop-types';
// import css from './PhonebookForm.module.css';

// import { useLocalStorage } from '../../Hooks/UseLocalStorage';

// export const PhonebookForm = ({ handleSubmit }) => {
//   const [name, setName] = useLocalStorage('name', '');
//   const [number, setNumber] = useLocalStorage('number', '');

//   const handleChange = e => {
//     const { name, value } = e.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const handleFormSubmit = e => {
//     e.preventDefault();
//     handleSubmit({ name: name, number: number });
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.form} onSubmit={handleFormSubmit}>
//       <label className={css.formLabel}>Name </label>
//       <input
//         className={css.formName}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         placeholder="Enter name"
//         value={name}
//         onChange={handleChange}
//       />
//       <label className={css.formLabel}>Number </label>
//       <input
//         className={css.formNumber}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         placeholder="Enter phone number"
//         value={number}
//         onChange={handleChange}
//       />
//       <button className={css.formBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// PhonebookForm.propTypes = {
//   handleSubmit: propTypes.func.isRequired,
// };
