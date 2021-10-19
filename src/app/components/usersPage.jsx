import React, { useState, useEffect } from "react";
import Users from "./users";
import api from "../api/index";
// import { useParams } from "react-router-dom";
// import Page from "./page";

const UsersPage = () => {
    const [users, setUsers] = useState();
    // const params = useParams();
    // const { userId } = params;

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
        console.log(id);
    };

    return (
        <div>
            {users && (
                <Users
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                    users={users}
                />
            )}
        </div>
    );
};

export default UsersPage;
