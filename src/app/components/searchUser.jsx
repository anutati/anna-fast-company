import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ value, onChange }) => {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={onChange}
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="button-addon2"
            ></input>
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                Search
            </button>
        </div>
    );
};

SearchUser.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default SearchUser;
