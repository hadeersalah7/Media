import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "./hooks/user-thunk";
import { deleteUser } from "../store";
import { useDispatch } from "react-redux";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);
    const dispatch = useDispatch();
    const handleDeleteUser = () => {
        // doDeleteUser(user.id);
        dispatch(deleteUser(user));
    };
    const header = (
        <>
            <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
                <GoTrashcan />
            </Button>
            {error && <div>Error Deleting User...</div>}
            {user.name}
        </>
    );
    return (

        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
    );
};

export default UsersListItem;
