import React, { useEffect, useState } from 'react';
import './SearchContriesApp.css';
import SearchForm from './SearchContriesPartsApp/search-form/SearchForm';
import SearchCards from './SearchContriesPartsApp/search-cards/SearchCards';
import SearchCard from './SearchContriesPartsApp/search-card/SearchCard';

export default function SearchContriesApp() {
  const [contries, setContries] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const getContryRequest = async (searchValue) => {
    const url = `https://restcountries.eu/rest/v2/name/${searchValue}`

    const res = await fetch(url)
    const responsJson = await res.json()
    console.log(responsJson)

    if (responsJson) {
      setContries(responsJson)
    }
  }

  useEffect(() => {
    getContryRequest(searchValue)
  }, [searchValue])

  const addFavoriteContry = (contry) => {
    const newFavoriteList = [...favorites, contry];
    setFavorites(newFavoriteList)
  }

  const removeContry = (items) => {
    const newWordArr = favorites.filter((i) => i.name !== items.name)
      setFavorites(newWordArr)
  }

  return (
    <div className="search-wrapper">
      <SearchForm heading='Country Searcher' searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchCards contries={favorites} handleFavoritesClick={removeContry} handleDeleteClick={removeContry} />
      <SearchCards contries={contries} handleFavoritesClick={addFavoriteContry} />
    </div>
  );
}