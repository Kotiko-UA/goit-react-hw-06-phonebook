import { useDispatch, useSelector } from 'react-redux';
import { Button, Li, List, P } from './Contacts.styled';
import { delContact } from 'components/redux/contactSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  const filterNumbers = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onDelete = delEl => {
    dispatch(delContact(delEl));
  };
  return (
    <div>
      <List>
        {filterNumbers.map(user => (
          <Li key={user.id}>
            <P>{user.name}:</P>
            <P>{user.number}</P>
            <Button onClick={() => onDelete(user.id)} type="button">
              delete
            </Button>
          </Li>
        ))}
      </List>
    </div>
  );
};
