import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchKey, setSearchKey] = useState('');

  // console.log('In App, searchKey: ', searchKey);

  return (
    <div className="app">
      <Header onSetSearchKey={setSearchKey} />
      <ListingsContainer searchKey={searchKey} onSetSearchKey={setSearchKey} />
    </div>
  );
}

export default App;
