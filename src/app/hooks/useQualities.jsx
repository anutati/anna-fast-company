import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import qualityService from "../services/quality.service";

const QualityContext = React.createContext();

export const useQualities = () => {
    return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [qualities, setQualities] = useState([]);

    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.get();
                setQualities(content);
                setLoading(false);
            } catch (errors) {
                setError(errors);
                console.log(error);
            }
        };
        getQualities();
    }, []);

    const getQuality = (id) => {
        return qualities.find((q) => q._id === id);
    };

    return (
        <QualityContext.Provider value={{ isLoading, qualities, getQuality }}>
            {children}
        </QualityContext.Provider>
    );
};

QualityProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
