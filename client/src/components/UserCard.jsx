import React from "react";
import LogoutBtn from "./LogoutBtn";

export default function UserCard({name, user, logout = ""}) {
  return (
    <div className="absolute top-6 left-6 bg-white text-black px-6 pb-2 pt-1 rounded-md">
      <p>{name}</p>
      {user && <LogoutBtn fn={logout} />}
    </div>
  );
}
