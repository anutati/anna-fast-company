import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Quality = ({ id }) => {
    const { getQuality } = useQualities();
    const quality = getQuality(id);
    console.log("Quality:", quality);
    return (
        <span>Quality</span>
        // <span className={"badge m-1 bg-" + color} key={_id}>
        //     {name}
        // </span>git
    );
};
Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
