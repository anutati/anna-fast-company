import React, { useState, useEffect } from "react";
import Users from "./users";
import api from "../api/index";
import { useParams } from "react-router-dom";
import Page from "./page";
import PropTypes from "prop-types";

const UsersPage = () => {
    const params = useParams();
    const [users, setUsers] = useState();
    const { userId } = params;

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

    if (users) {
        return (
            <div>
                {userId
                    ? (
                        <Page id={userId} />
                    )
                    : (
                        <Users
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                            users={users}
                        />
                    )}
            </div>
        );
    }
    return <h2>Loading</h2>;
};

UsersPage.propTypes = {
    match: PropTypes.object
};

export default UsersPage;
