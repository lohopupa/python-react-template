import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Root from "../../pages/root/root";


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router