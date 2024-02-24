import React from "react";
import ReactDOM from "react-dom/client";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Provider } from "react-redux";

import Signup from "./pages/Signup";
import { store } from "./store/store.js";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            {/* <Route path="" element={{}} /> */}
            {<Route path="signup" element={<Signup />} />}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
