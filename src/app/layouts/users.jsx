import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage/userPage";
import UsersListPage from "../components/page/userListPage/usersListPage";
import UserProvider from "../hooks/useUsers";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            <UserProvider>
                {userId ? <UserPage id={userId} /> : <UsersListPage />};
            </UserProvider>
        </>
    );
};

export default Users;
