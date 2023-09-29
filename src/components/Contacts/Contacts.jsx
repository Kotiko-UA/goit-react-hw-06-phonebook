import { Button, Li, List, P } from './Contacts.styled';

export const Contacts = ({ users, onDelete }) => {
  return (
    <div>
      <List>
        {users.map(user => (
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
