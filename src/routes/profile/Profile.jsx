import React, { useEffect, useState } from 'react'
import axios from '../../api/axios.js';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [Profile, setProfile] =useState({})
const token =useSelector (state => state.token)

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios("/auth/profile",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        setProfile(response.data)
        console.log(response.data)
      }
      catch (error) {
        console.log(error)
      }

    }
    getProfile()
  }, [])
  return (
    <>
  <div className="flex justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
  <div className="w-[320px] h-[360px] flex flex-col items-center justify-center bg-gray-50 relative group rounded-3xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer shadow my-[150px] transform hover:scale-105 hover:rotate-1">
    
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-60 blur-md"></div>

    <img 
      src={Profile.avatar} 
      className="w-28 h-28 rounded-full z-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 border-4 border-white shadow-lg"
    />

    <h1 className="mt-4 text-xl font-bold text-gray-800 z-20 transition-all duration-300 group-hover:text-white group-hover:scale-105">
      {Profile.name}
    </h1>

    <p className="text-sm text-gray-600 z-20 transition-all duration-300 group-hover:text-white group-hover:scale-105">
      {Profile.email}
    </p>
    <p className="text-sm text-gray-600 z-20 transition-all duration-300 group-hover:text-white group-hover:scale-105">
      {Profile.phone}
      </p>

      <p className='text-sm text-gray-600'>{Profile.address}</p>

    <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-pink-300 rounded-full z-0 transition-transform duration-700 group-hover:translate-x-24 group-hover:translate-y-24 opacity-50 blur-lg"></div>
    <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-blue-300 rounded-full z-0 transition-transform duration-700 group-hover:translate-x-16 group-hover:-translate-y-20 opacity-50 blur-lg"></div>

    <div className="after:content-['Profile Card'] after:absolute after:bottom-4 after:left-1/2 after:-translate-x-1/2 after:text-xs after:text-gray-500 after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100"></div>
  </div>
</div>

    </>
  )
}

export default Profile