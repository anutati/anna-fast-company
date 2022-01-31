import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import UserPageEdit from "./components/page/userPageEdit/userPageEdit";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualityProvider } from "./hooks/useQualities";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <QualityProvider>
                    <ProfessionProvider>
                        <Route path="/login/:type?" component={Login} />
                        <Route
                            path="/users/:userId/edit"
                            component={UserPageEdit}
                        />
                        <Route path="/users/:userId?" component={Users} />
                    </ProfessionProvider>
                </QualityProvider>
                <Redirect path="/" />
            </Switch>
            <ToastContainer />
        </div>
    );
}

export default App;
