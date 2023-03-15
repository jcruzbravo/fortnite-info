import React from "react";
import StatsPlayer from "../components/StatsPlayer";

const Profile = ({ statsPlayer }) => {
  return (
    <div className="Profile">
      <StatsPlayer key={statsPlayer.account.id} statsPlayer={statsPlayer} />
    </div>
  );
};

export default Profile;
