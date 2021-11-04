import React from "react";
import { useParams } from "react-router-dom";
import Page from "../components/page";
import UsersList from "../components/usersList";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <Page id={userId} /> : <UsersList />}</>;
};

export default Users;
