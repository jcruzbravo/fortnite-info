import React, { useState } from "react";
import useGetStatsPlayer from "../hooks/useGetStatsPlayer";
import "../styles/SearchAccount.scss";
import Spinner from "../components/Spinner";

const SearchAccount = () => {
  const { statsPlayer, message, usernameInput, isLoading ,handleInput, handleSearch} = useGetStatsPlayer();

  return (
    <section>
      <div className="SearchAccount">
        <div className="search-account-container">
          <div className="account-player-stats-form">
            <input
              autoComplete="off"
              name="username"
              placeholder="Write your account id"
              value={usernameInput}
              onChange={handleInput}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="stats-player-content">
          {isLoading ? (
            <div>
               <Spinner/>
            </div>
          ) : (
            Object.keys(statsPlayer).length > 0 ? (
              <div>
                <h3>{`Name: ${statsPlayer.account.name}`}</h3>
                <h3>{`Wins in solo: ${statsPlayer.stats.all.solo.wins}`}</h3>
                <h3>{`Wins in duo: ${statsPlayer.stats.all.duo.wins}`}</h3>
                <h3>{`Wins in squad: ${statsPlayer.stats.all.squad.wins}`}</h3>
              </div>
            ): <div>
              <h3>{message}</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchAccount;
