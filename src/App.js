import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

const App = () => {
    return (
        <>
            <Navbar/>
            <ProgressBar/>
            <SignUpForm/>
        </>
    )
}

export default App;