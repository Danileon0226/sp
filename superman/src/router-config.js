import LandingPage from "../Screens/LandingPage/LandingPage";
import Login from "./Components/Login/Login";

const routes = [

    { path: '*', component: Login },
    {path: '/LandingPage', component: LandingPage}

]

export {routes};