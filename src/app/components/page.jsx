import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const Page = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    const handleSave = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>CompletedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button
                    onClick={() => {
                        handleSave();
                    }}
                >
                    Все пользователи
                </button>
            </>
        );
    }
    return <h2>Loading</h2>;
};
Page.propTypes = {
    id: PropTypes.string
};

export default Page;
