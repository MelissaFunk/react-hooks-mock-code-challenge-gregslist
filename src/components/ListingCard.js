import React, { useState } from "react";

function ListingCard({ listing, handleDeleteListing }) {
  const [favorite, setFavorite] = useState(false)

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => handleDeleteListing(listing))
  }

  function handleFavoriteClick() {
    setFavorite(favorite => !favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details" onClick={handleFavoriteClick}>
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleDeleteClick}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
