import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import "./App.css";
// import { Site } from "./components/Site";
import styles from "./components/Site.module.css";
import { S } from "./styles/_appStyles";

function App() {
  const [burger, setBurger] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
      if (location.pathname === "/") {
        navigate("/page/0");
      }
    }, [location, navigate]);

  return (
    <div>
      {/* <Site/> */}
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        {burger ? (
          <div className={styles.nav}>
            <S.NavWrapper>
              <NavLink to={"/page/0"}>PAGE 1</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={"/page/1"}>PAGE 2</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={"/page/2"}>PAGE 3</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={"/protected"}>PAGE PROTECTED</NavLink>
            </S.NavWrapper>
          </div>
        ) : (
          <div>ERROR</div>
        )}

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

// const NavWrapper = styled.div`
//   margin-left: 10px;
//   font-size: 20px;

//   & > a {
//     text-decoration: none;
//     color: #1e3786;
//   }

//   & > a.active {
//     text-decoration: none;
//     color: #03eaff;
//   }

//   & > a:hover {
//     color: steelblue;
//   }
// `;
