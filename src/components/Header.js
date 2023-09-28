import React from "react";
import Search from "./Search";

function Header({ onSetSearchKey, isSortByLocation, onSetIsSortByLocation }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSetSearchKey={onSetSearchKey} />
      <button onClick={() => onSetIsSortByLocation(!isSortByLocation)}>
        {isSortByLocation ? 'Undo Sort By Location' : 'Sort By Location'}</button>
    </header>
  );
}

export default Header;
