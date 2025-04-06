import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, addUser } from '../store'
import Skeleton from './Skeleton'
import Button from "./Button"
import { useThunk } from './hooks/user-thunk'
const UsersList = () => {
  const { data } = useSelector((state) => state.users)
  
  const [doFetchUsers, isLoadingUser, isLoadingUserError] = useThunk(fetchUsers)
  const [doCreateUser, isCreatingUser, isCreatingUserError] = useThunk(addUser)
  
  useEffect(() => {
    doFetchUsers()
  }, [])

  const handleAddUser = () => {
    doCreateUser()
}

  if (isLoadingUser) {
    return <Skeleton times={6} className="w-full h-10"/>
  }

  if (isLoadingUserError) {
    return <div>Error Fetching Data</div>
  }

  const renderedUsers = data.map((user) => {
    return <div key={user.id} className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        {user.name}
        </div>
    </div>
  })
  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='text-xl'>Users</h1>
        {isCreatingUser ? "Creating User..." :
          <Button onClick={handleAddUser}>
          + Add User
        </Button>}
        {isCreatingUserError && "Error Creating User..."}
      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList