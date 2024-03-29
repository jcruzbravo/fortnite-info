import React from "react";
import useGetStatsPlayer from "../hooks/useGetStatsPlayer";
import "../styles/SearchAccount.scss";
import Spinner from "./Spinner";
import Profile from "../container/Profile";
import { MdPersonSearch } from "react-icons/md";

const SearchAccount = () => {
  const {
    statsPlayer,
    message,
    usernameInput,
    isLoading,
    handleInput,
    handleSearch,
  } = useGetStatsPlayer();

  return (
    <section>
      <div className="SearchAccount">
        <div className="search-account-container">
          <div className="account-player-stats-form">
            <input
              autoComplete="off"
              name="username"
              placeholder="Write your name account"
              value={usernameInput}
              onChange={handleInput}
            />
            <button onClick={handleSearch}>
              <MdPersonSearch size={30} />
            </button>
          </div>
        </div>

        {isLoading ? (
          <Spinner />
        ) : (statsPlayer != undefined) || (statsPlayer != null) ? (
          Object.keys(statsPlayer).length > 0 ? (
            <Profile key={statsPlayer.account.id} statsPlayer={statsPlayer} />
          ) : (
            <h3 className="message">{message}</h3>
          )
        ) : (
          <h3 className="message">{message}</h3>
        )}
      </div>
    </section>
  );
};

export default SearchAccount;
