import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchKey, setSearchKey] = useState('');
  const [isSortByLocation, setIsSortByLocation] = useState(false);

  // console.log('In App, searchKey: ', searchKey);
  // console.log('In App, isSortByLocation: ', isSortByLocation);

  return (
    <div className="app">
      <Header onSetSearchKey={setSearchKey} 
        isSortByLocation={isSortByLocation}
        onSetIsSortByLocation={setIsSortByLocation} />
      <ListingsContainer searchKey={searchKey} isSortByLocation={isSortByLocation}/>
    </div>
  );
}

export default App;
