import { filterStatus } from 'components/redux/filterSlice';
import { useDispatch } from 'react-redux';

export const FindContacts = () => {
  const dispatch = useDispatch();
  const onFindUser = ({ target: { value } }) => {
    dispatch(filterStatus(value));
  };
  return (
    <div>
      <p>find contacts by name</p>
      <input onChange={onFindUser} name="findName" type="text" />
    </div>
  );
};
