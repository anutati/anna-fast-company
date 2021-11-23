import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";

const UserPageEdit = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();
    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState();

    useEffect(() => {
        api.users.getById(userId).then((info) => setUser(info));
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleQualityView = (array) => {
        const arrayOptionsView = array.map((element) => ({
            label: element.name,
            value: element._id
        }));
        return arrayOptionsView;
    };

    const handleChange = (target) => {
        console.log(target);
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof user.profession === "string") {
            const prof = professions.find(
                (element) => (element.name = user.profession)
            );
            user.profession = prof;
        }
        if (
            user.qualities.length !== 0 &&
            user.qualities[0].color === undefined
        ) {
            for (let i = 0; i < user.qualities.length; i++) {
                for (const quality in qualities) {
                    if (qualities[quality].name === user.qualities[i].label) {
                        user.qualities[i] = qualities[quality];
                    }
                }
            }
        }
        api.users.update(userId, user);
    };

    if (user) {
        return (
            <div className="col-md-6 offset-md-3 shadow p-4">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Электронная почта"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <SelectField
                        options={professions}
                        defaultOption="Choose..."
                        onChange={handleChange}
                        value={user.profession}
                        label="Выберете вашу профессию"
                    />
                    <RadioField
                        options={[
                            { name: "Male", value: "male" },
                            { name: "Female", value: "female" },
                            { name: "Other", value: "other" }
                        ]}
                        value={user.sex}
                        name="sex"
                        onChange={handleChange}
                        label="Выберете ваш пол"
                    />
                    <MultiSelectField
                        options={qualities}
                        onChange={handleChange}
                        name="qualities"
                        value={handleQualityView(user.qualities)}
                        label="Выберете ваши качества"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mx-auto"
                        onClick={handleSubmit}
                    >
                        Обновить
                    </button>
                </form>
            </div>
        );
    }
    return <h2>Loading</h2>;
};

export default UserPageEdit;
