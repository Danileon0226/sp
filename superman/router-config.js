import LandingPage from "./Screens/LandingPage/LandingPage";
import Login from "./src/Components/Login/Login";

const routes = [

    { path: '/', component: Login },
    { path: '/Inicio', component: Login },
    { path: '*', component: Login },
    {path: '/LandingPage', component: LandingPage}

]

export {routes};