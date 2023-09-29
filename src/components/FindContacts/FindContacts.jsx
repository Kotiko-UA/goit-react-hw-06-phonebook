export const FindContacts = ({ onFindUser }) => {
  return (
    <div>
      <p>find contacts by name</p>
      <input onChange={onFindUser} name="findName" type="text" />
    </div>
  );
};
