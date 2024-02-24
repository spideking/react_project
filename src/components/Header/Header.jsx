import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { logout as authLogout } from "../../store/adminSlice.js";
import authservice from "../../app/auth";

import { Logo } from "../";
import { Button } from "../";
import Login from "../../pages/Login";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showLoginModals, setShowLoginModals] = React.useState(false);
  const [logoutState, setLogoutState] = React.useState(authStatus);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: true,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: true,
    },
  ];

  const logout = async () => {
    try {
      const deletedSession = await authservice.logout();
      if (deletedSession) {
        dispatch(authLogout());
        setLogoutState(false);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  const loginPopUpHandler = () => {
    setShowLoginModals(false);
    setLogoutState(true);
  };

  return (
    <>
      <header className="m-2 rounded-2xl flex justify-between bg-slate-50 ">
        <div className="ml-4 mt-2">
          <Logo />
        </div>
        <nav>
          <ul className="list-none flex gap-1">
            {navItems.map((items) =>
              items.active ? (
                <li className="rounded-2xl" key={items.name}>
                  <Button
                    type={"button"}
                    submitHandler={() => navigate(items.slug)}
                    classname="rounded-full border-r-2 border-solid p-2"
                    name={items.name}
                  />
                </li>
              ) : null
            )}
            <li className="rounded-2xl">
              {logoutState ? (
                <Button
                  type={"button"}
                  submitHandler={logout}
                  classname="rounded-full border-r-2 border-solid p-2"
                  name={"Logout"}
                />
              ) : (
                <Button
                  type={"button"}
                  submitHandler={() => setShowLoginModals(true)}
                  classname="rounded-full border-r-2 border-solid p-2"
                  name={"Login"}
                />
              )}
            </li>
            <div className="w-[100px]"></div>
          </ul>
        </nav>
      </header>
      {showLoginModals && <Login signInStateHandler={loginPopUpHandler} />}
    </>
  );
}

export default Header;
