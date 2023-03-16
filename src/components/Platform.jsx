import React from "react";
import "../styles/Platform.scss";

const Platform = ({ stats }) => {
  return (
    <div className="Platform">
      <div className="platform-container">
        <div className="platform-content">
          {stats != null && stats.overall != null ? (
            <div className="overall">
              <h3>Overall</h3>
              <ul>
                <li>{`Winrate: ${stats.overall.winRate}`}</li>
                <li>{`Wins: ${stats.overall.wins}`}</li>
                <li>{`Kd: ${stats.overall.kd}`}</li>
                <li>{`Kills: ${stats.overall.kills}`}</li>
              </ul>
            </div>
          ) : (
            <h3 className="message">STATS NOT FOUND</h3>
          )}
          {stats != null && stats.solo != null && (
            <div className="solo">
              <h3>Solo</h3>
              <ul>
                <li>{`Winrate: ${stats.solo.winRate}`}</li>
                <li>{`Wins: ${stats.solo.wins}`}</li>
                <li>{`Kd: ${stats.solo.kd}`}</li>
                <li>{`Kills: ${stats.solo.kills}`}</li>
              </ul>
            </div>
          )}
          {stats != null && stats.duo != null && (
            <div className="duo">
              <h3>Duo</h3>
              <ul>
                <li>{`Winrate: ${stats.duo.winRate}`}</li>
                <li>{`Wins: ${stats.duo.wins}`}</li>
                <li>{`Kd: ${stats.duo.kd}`}</li>
                <li>{`Kills: ${stats.duo.kills}`}</li>
              </ul>
            </div>
          )}
          {stats != null && stats.trio != null && (
            <div className="trio">
              <h3>Trio</h3>
              <ul>
                <li>{`Winrate: ${stats.trio.winRate}`}</li>
                <li>{`Wins: ${stats.trio.wins}`}</li>
                <li>{`Kd: ${stats.trio.kd}`}</li>
                <li>{`Kills: ${stats.trio.kills}`}</li>
              </ul>
            </div>
          )}
          {stats != null && stats.squad != null && (
            <div className="squad">
              <h3>Squad</h3>
              <ul>
                <li>{`Winrate: ${stats.squad.winRate}`}</li>
                <li>{`Wins: ${stats.squad.wins}`}</li>
                <li>{`Kd: ${stats.squad.kd}`}</li>
                <li>{`Kills: ${stats.squad.kills}`}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Platform;
