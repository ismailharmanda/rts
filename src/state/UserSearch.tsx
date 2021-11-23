import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    setName("");
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
    </div>
  );
};

export default UserSearch;
