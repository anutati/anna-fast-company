import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { useHistory, Link } from "react-router-dom";

const UserPage = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);

    const handleEdit = () => {
        history.push(`${id}/edit`);
    };
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>CompletedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <h1>
                    {" "}
                    <Link to={`/users/${user._id}/edit`}>{user.name}</Link>;
                </h1>
                <button
                    onClick={handleEdit}
                >
                    Изменить
                </button>
            </>
        );
    }
    return <h2>Loading</h2>;
};
UserPage.propTypes = {
    id: PropTypes.string
};

export default UserPage;
