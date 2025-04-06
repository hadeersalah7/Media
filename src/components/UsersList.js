import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "./hooks/user-thunk";
import UsersListItem from "./UsersListItem";
const UsersList = () => {
  const { data } = useSelector((state) => state.users);

  const [doFetchUsers, isLoadingUser, isLoadingUserError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, isCreatingUserError] = useThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUser) {
    content = <Skeleton times={6} className="w-full h-10" />;
  } else if (isLoadingUserError) {
    content = <div>Error Fetching Data</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3 ">
        <h1 className="text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleAddUser}>
          + Add User
        </Button>
        {isCreatingUserError && "Error Creating User..."}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
