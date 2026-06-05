"use client"
// import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

export default function App() {
  // const [users, SetUsers] = useState([])
  // const [loading, SetLoading] = useState(true)

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //     const data = await res.json()
  //     SetUsers(data)
  //     SetLoading(false)
  //   }
  //   getUsers()
  // }, [])

  // if (loading) return <h1>Ачаалалж байна ...</h1>
  // return (
  //   <div className="p-8 bg-gray-100 min-h-screeb">
  //     <div className='text-3xl font-bold mb-6'>Хэрэглэгчид</div>
  //     {users.map(user => (
  //       <div key={user.id} className='bg-white rounded-xl shadow mb-4'>
  //         <h2 className='text-xl font-bold text-blue-600'>
  //           {user.name}
  //         </h2>
  //         <p className='text-gray-500'>{user.email}</p>
  //         <p className='text-gray-400'>{user.phone}</p>
  //       </div>
  //     ))}
  //   </div>
  // );

  return(
    <BrowserRouter >
     <nav className="bg-blue-600 p-4 flex gap-4">
        <Link to="/" className="text-white font-bold">Home</Link>
        <Link to="/about" className="text-white font-bold">About</Link>
        <Link to="/users" className="text-white font-bold">Users</Link>
      </nav>

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
} 


