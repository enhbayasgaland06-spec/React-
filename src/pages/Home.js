import { useEffect, useState } from "react";

function UserCard({ name, email, phone }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="text-xl font-bold">{name}</div>
      <p className="text-gray-500">{email}</p>
      <p className="text-blue-500">{phone}</p>
    </div>
  );
}

export default function Home() {
  const [users, SetUsers] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      SetUsers(data);
      SetLoading(false);
    };
    getUsers();
  }, []);

  if (loading) return <h1>Ачаалж байна...</h1>;
  return (
    <div className="p-8 bg-gray-100" min-h-screen>
      <h1 className="text-3xl font-bold mb-6">Хэрэглэгчид</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        ></UserCard>
      ))}
    </div>
  );
}
