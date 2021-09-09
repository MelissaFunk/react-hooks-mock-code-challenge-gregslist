import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteListing }) {
  const eachListing = listings.map(listing => 
    <ListingCard
      key={listing.id}
      listing={listing}
      handleDeleteListing={handleDeleteListing}
    />
  )

  return (
    <main>
      <ul className="cards">
        {eachListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
