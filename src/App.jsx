import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import authservice from "./app/auth.js";
import { login, logout } from "./store/adminSlice.js";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "./components";

function App() {
  const [loader, setLoader] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login(userData));
        else dispatch(logout());
        console.log(userData);
      })
      .catch((error) => {
        console.log(error?.message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      {!loader ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
            <Header />
            <main>
              TODO: <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
