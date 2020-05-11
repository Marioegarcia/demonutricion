import React from "react";
import { Icon } from "antd";
import { Button } from "antd";
import LogoPage from "../../../assets/img/png/logo.jpg";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
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
        <Button>
          <Icon type="lock" />
        </Button>
      </div>
    </div>
  );
}
