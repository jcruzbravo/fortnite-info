import React, { useState } from "react";
import { FaKeyboard, FaGamepad } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import "../styles/StatsPlayer.scss";
import { EPlatforms } from "../constants/platforms";

const StatsPlayer = ({ statsPlayer }) => {
  const [platform, setPlatform] = useState("");

  const handleClick = (e) => {
    if (e.target.textContent === EPlatforms.ALL) {
      setPlatform("All");
    }
    if (e.target.textContent === EPlatforms.GAMEPAD) {
      setPlatform("Gamepad");
    }
    if (e.target.textContent === EPlatforms.TOUCH) {
      setPlatform("Touch");
    }
    if (e.target.textContent === EPlatforms.KEYBOARD_MOUSE) {
      setPlatform("Keyboard/Mouse");
    }
  };

  return (
    <div className="StatsPlayer">
      <div className="navbar-platforms">
        <p>Platform</p>
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
        {platform === "All" && (
          <div>
            <p>{`Wins: ${statsPlayer.stats.all.overall.wins}`}</p>
            <p>{`Kills: ${statsPlayer.stats.all.overall.kills}`}</p>
            <p>{`Top 3: ${statsPlayer.stats.all.overall.top3}`}</p>
            <p>{`Top 5: ${statsPlayer.stats.all.overall.top5}`}</p>
            <p>{`Top 6: ${statsPlayer.stats.all.overall.top6}`}</p>
            <p>{`Top 10: ${statsPlayer.stats.all.overall.top10}`}</p>
            <p>{`Top 12: ${statsPlayer.stats.all.overall.top12}`}</p>
            <p>{`Top 12: ${statsPlayer.stats.all.overall.top25}`}</p>
          </div>
        )}
        {platform === "Keyboard/Mouse" &&
          statsPlayer.stats.keyboardMouse != null && (
            <div>
              <p>{`Wins: ${statsPlayer.stats.keyboardMouse.overall.wins}`}</p>
              <p>{`Kills: ${statsPlayer.stats.keyboardMouse.overall.kills}`}</p>
              <p>{`Top 3: ${statsPlayer.stats.keyboardMouse.overall.top3}`}</p>
              <p>{`Top 5: ${statsPlayer.stats.keyboardMouse.overall.top5}`}</p>
              <p>{`Top 6: ${statsPlayer.stats.keyboardMouse.overall.top6}`}</p>
              <p>{`Top 10: ${statsPlayer.stats.keyboardMouse.overall.top10}`}</p>
              <p>{`Top 12: ${statsPlayer.stats.keyboardMouse.overall.top12}`}</p>
              <p>{`Top 12: ${statsPlayer.stats.keyboardMouse.overall.top25}`}</p>
            </div>
          )}
        {platform === "Gamepad" && statsPlayer.stats.gamepad != null && (
          <div>
            <p>{`Wins: ${statsPlayer.stats.gamepad.overall.wins}`}</p>
            <p>{`Kills: ${statsPlayer.stats.gamepad.overall.kills}`}</p>
            <p>{`Top 3: ${statsPlayer.stats.gamepad.overall.top3}`}</p>
            <p>{`Top 5: ${statsPlayer.stats.gamepad.overall.top5}`}</p>
            <p>{`Top 6: ${statsPlayer.stats.gamepad.overall.top6}`}</p>
            <p>{`Top 10: ${statsPlayer.stats.gamepad.overall.top10}`}</p>
            <p>{`Top 12: ${statsPlayer.stats.gamepad.overall.top12}`}</p>
            <p>{`Top 12: ${statsPlayer.stats.gamepad.overall.top25}`}</p>
          </div>
        )}
        {platform === "Touch" && statsPlayer.stats.touch != null && (
          <div>
            <p>{`Wins: ${statsPlayer.stats.touch.overall.wins}`}</p>
            <p>{`Kills: ${statsPlayer.stats.touch.overall.kills}`}</p>
            <p>{`Top 3: ${statsPlayer.stats.touch.overall.top3}`}</p>
            <p>{`Top 5: ${statsPlayer.stats.touch.overall.top5}`}</p>
            <p>{`Top 6: ${statsPlayer.stats.touch.overall.top6}`}</p>
            <p>{`Top 10: ${statsPlayer.stats.touch.overall.top10}`}</p>
            <p>{`Top 12: ${statsPlayer.stats.touch.overall.top12}`}</p>
            <p>{`Top 12: ${statsPlayer.stats.touch.overall.top25}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPlayer;
