import React, { useState } from "react";
import { FaKeyboard, FaGamepad } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import "../styles/StatsPlayer.scss";
import { EPlatforms } from "../constants/platforms";
import Platform from "../components/Platform";

const StatsPlayer = ({ statsPlayer }) => {
  const [platforms, setPlatform] = useState("all");

  const handleClick = (e) => {
    if (e.target.textContent === EPlatforms.ALL) {
      setPlatform("all");
    }
    if (e.target.textContent === EPlatforms.GAMEPAD) {
      setPlatform("gamepad");
    }
    if (e.target.textContent === EPlatforms.TOUCH) {
      setPlatform("touch");
    }
    if (e.target.textContent === EPlatforms.KEYBOARD_MOUSE) {
      setPlatform("keyboardMouse");
    }
  };

  return (
    <div className="StatsPlayer">
      <div className="navbar-platforms">
        <ul>
          <li onClick={handleClick}>All</li>
          <li onClick={handleClick}>
            Keyboard/Mouse
            <FaKeyboard />
          </li>
          <li onClick={handleClick}>
            Gamepad
            <FaGamepad />
          </li>
          <li onClick={handleClick}>
            Touch
            <MdTouchApp />
          </li>
        </ul>
      </div>

      <div className="stats">
        <div className="name-level-battle-pass">
          <h3>{`Name: ${statsPlayer.account.name}`}</h3>
          <h4>{`Level Battle Pass: ${statsPlayer.battlePass.level}`}</h4>
        </div>
        {platforms && <Platform stats={statsPlayer.stats[platforms]} />}
      </div>
    </div>
  );
};

export default StatsPlayer;
