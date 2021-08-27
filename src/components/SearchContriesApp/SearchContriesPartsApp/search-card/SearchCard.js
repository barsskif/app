import React from "react"
import './SearchCard.css'
import SearchCardButtons from "./components/SearchCardButtons"

export default function SearchCard({contry,handleFavoritesClick,handleDeleteClick}){
    return (
        <div className="search-card-wrapper">
            <img src={contry.flag} alt="contry-flag" width="190" height="100" />
            <p className="search-card-name">{contry.name}</p>
            <div className="search-card-btns-wrapper">
                <SearchCardButtons contry={contry} handleFavoritesClick={handleFavoritesClick} handleDeleteClick={handleDeleteClick}/>
            </div>
        </div>
    )
}