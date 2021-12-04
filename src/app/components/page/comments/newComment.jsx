import React, { useState, useEffect } from "react";
import SelectField from "../../common/form/selectField";
import TextArea from "../../common/form/textArea";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";

const NewComment = ({ userPageId, onSubmit, users }) => {
    const [data, setData] = useState({ userName: "", comment: "" });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorCongif = {
        comment: {
            isRequired: { message: "Поле обязательно для заполнения" }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorCongif);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        setData({ userName: "", comment: "" });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SelectField
                    options={users}
                    defaultOption="Choose..."
                    onChange={handleChange}
                    defaultValue={data.userName}
                    label="Выберете пользователя"
                    name="userName"
                />
                <TextArea
                    label="Комментарий"
                    name="comment"
                    defaultValue={data.comment}
                    onChange={handleChange}
                    error={errors.comment}
                />
                <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary w-100 mx-auto my-4"
                >
                    Опубликовать
                </button>
            </form>
        </div>
    );
};
NewComment.propTypes = {
    userPageId: PropTypes.string,
    onSubmit: PropTypes.func,
    users: PropTypes.array
};

export default NewComment;
