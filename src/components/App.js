import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(setListings)
  }, [])

  function handleDeleteListing(listingToDelete) {
    setListings(listings.filter(listing => listing.id !== listingToDelete.id))
  }

  const listingsToDisplay = listings.filter(listing => 
     listing.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer 
        listings={listingsToDisplay} 
        handleDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
