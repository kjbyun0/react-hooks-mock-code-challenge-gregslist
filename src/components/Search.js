import React, { useState } from "react";

function Search({ onSetSearchKey }) {
  const [key, setKey] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");

    onSetSearchKey(key);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
