import React from "react";
import "./Main.css"
import Profile from "./Profile/Profile";
import Elements from "./Elements/Elements";

function Main () {
    return (
        <main className="main">
            <Profile/>
            <Elements/>
        </main>
    )
}

export default Main;