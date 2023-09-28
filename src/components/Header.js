import React from "react";
import Search from "./Search";

function Header({ onSetSearchKey }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSetSearchKey={onSetSearchKey} />
    </header>
  );
}

export default Header;
