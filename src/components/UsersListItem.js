import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "./hooks/user-thunk";
import { deleteUser } from "../store";
import { useDispatch } from "react-redux";
const UsersListItem = ({ user }) => {
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);
    const dispatch = useDispatch();
    const handleDeleteUser = () => {
        // doDeleteUser(user.id);
        dispatch(deleteUser(user));
    };
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row justify-between items-center">
                    <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
                        <GoTrashcan />
                    </Button>
                {error && <div>Error Deleting User...</div>}
                {user.name}
                </div>
            </div>
        </div>
    );
};

export default UsersListItem;
