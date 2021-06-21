import PropTypes from 'prop-types';
/* import { connect } from 'react-redux'; */
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilteredContactList } from '../../redux/contacts';

export default function ContactItem() {

  const dispatch = useDispatch();
  const contactsItems = useSelector(getFilteredContactList);
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <>
      {contactsItems.map(({ id, name, number }) => {
        return (
          <li key={id} className="liContactsItems">
            <p className="contactsItems">{`${name}: ${number}`}</p>
            <button type="button" onClick={() => onDelete(id)} className="btn">
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};
