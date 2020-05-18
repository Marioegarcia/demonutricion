import React from "react";
import { Icon } from "antd";
import { Button } from "antd";
import LogoPage from "../../../assets/img/png/original.png";
import { logout } from "../../../api/auth";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={LogoPage}
          alt="descripcion de img"
        />
        <Button type="dashed" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>

      <div className="menu-top__right">
      <Button type="link" onClick={logoutUser}>
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
}
