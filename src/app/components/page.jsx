import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api/index";

const Page = ({ match }) => {
    const [user, setUser] = useState();
    const userId = match.params.userId;
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return <h2>{user.name ? user.name : "Not Found"}</h2>;
};

Page.propTypes = {
    match: PropTypes.object
};

export default Page;
