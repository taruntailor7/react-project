import { useToast } from '@chakra-ui/react'
import { useState } from 'react';
import { createContext } from 'react';
// import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")|| "false");
    const [token, setToken] = useState(localStorage.getItem("token"))
    const toast = useToast()
    
    const handleLogin = async (userData)=>{
        let loggedInUser = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method: 'POST',
            body: JSON.stringify(userData),
            headers : {
                'content-type': 'application/json'
            }
        });
        let res = await loggedInUser.json() ;
        // console.log(res, "for token");
        if(res.error){
            // alert(res.message);
            toast({
                title: `${res.message}`,
                status: "error",
                isClosable: true,
            })
        }
        else{
            // console.log( typeof userData.username,"provider now");
            localStorage.setItem("username",JSON.stringify(userData.username));
            localStorage.setItem("isAuth", true);
            setIsAuth(localStorage.getItem("isAuth"));
            localStorage.setItem("token", res.token);
            setToken(localStorage.getItem("token"));
            // alert("Logged In Succesfully!");
            toast({
                title: 'Login',
                description: "Logged In Succesfully!",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
        // console.log(res.token);
    }

    const handleLogout = ()=>{
        // alert("Log out Succesfully!")
        toast({
            title: `${"Logout"}`,
            position: "top",
            isClosable: true,
        })
        localStorage.setItem("isAuth", false);
        setIsAuth(localStorage.getItem("isAuth"));
        localStorage.setItem("token", "");
        setToken(localStorage.getItem("token"));
        console.log("logout called");
    }

    console.log(isAuth, "provider");
    return <AuthContext.Provider value={{isAuth, token, handleLogin, handleLogout}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider