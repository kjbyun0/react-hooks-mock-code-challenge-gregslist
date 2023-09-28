import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchKey, onSetSearchKey }) {
  const [gregsList, setGregsList] = useState([]);

  function handleDeleteItem(deletedItem) {
    setGregsList(gregsList.filter(item => item.id !== deletedItem.id));
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setGregsList(data));
  }, []);

  const filteredItems = searchKey ? 
    gregsList.filter(item => item.description.toLowerCase().includes(searchKey.toLowerCase())) : 
    gregsList;

  const items = filteredItems.map(item => 
    <ListingCard key={item.id} item={item} onDeleteItem={handleDeleteItem} />);
  // console.log('In ListingContainer, gregsList: ', gregsList);
  // console.log('In ListingContainer, items: ', items);

  return (
    <main>
      <ul className="cards">
        {items}
      </ul>
    </main>
  );
}

export default ListingsContainer;
