import React, { useState } from "react";

// {
//   "id": 1,
//   "description": "heater",
//   "image": "./images/heater.jpg",
//   "location": "BROOKLYN"
// },

function ListingCard({ listing, onDeleteListing }) {
  // console.log("In ListingCard, item: ", item);
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  function handleDeleteItem() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => onDeleteListing(listing));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
