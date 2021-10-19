import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./components/main";
import Login from "./components/login";
import UsersPage from "./components/usersPage";
import Page from "./components/page";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:userId"
                    render={(props) => <Page {...props} />}
                />
                <Route
                    path="/users"
                    render={(props) => <UsersPage {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
