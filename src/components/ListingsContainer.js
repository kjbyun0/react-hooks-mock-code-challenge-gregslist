import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import NewListingCard from './NewListingCard';

function ListingsContainer({ searchKey, isSortByLocation }) {
  const [gregsList, setGregsList] = useState([]);

  function handleDeleteListing(deletedListing) {
    setGregsList(gregsList.filter(listing => listing.id !== deletedListing.id));
  }

  function handleNewListing(newListing) {
    setGregsList([...gregsList, newListing]);
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setGregsList(data));
  }, []);

  const filteredListings = searchKey ? 
    gregsList.filter(listing => listing.description.toLowerCase().includes(searchKey.toLowerCase())) : 
    [...gregsList];

  // console.log("In ListingsContainer, isSortByLocation: ", isSortByLocation)
  if (isSortByLocation) {
    filteredListings.sort((a, b) => a.location.toLowerCase() <= b.location.toLowerCase() ? -1 : 1);
  }

  const displayListings = filteredListings.map(listing => 
    <ListingCard key={listing.id} listing={listing} onDeleteListing={handleDeleteListing} />);
  // console.log('In ListingContainer, gregsList: ', gregsList);
  // console.log('In ListingContainer, items: ', items);

  return (
    <React.Fragment>
      <NewListingCard onNewListing={handleNewListing}/>
      <main>
        <ul className="cards">
          {displayListings}
        </ul>
      </main>
    </React.Fragment>
  );
}

export default ListingsContainer;
