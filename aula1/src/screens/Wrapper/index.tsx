import UserContext from "../../context/user";
import Home from "../Home";
import Login from "../Login";
import {useContext} from 'react';

export default function Wrapper() {
    const userData = useContext(UserContext);
    return (
        userData.user != null ? <Login/> : <Home/> 
    )
}