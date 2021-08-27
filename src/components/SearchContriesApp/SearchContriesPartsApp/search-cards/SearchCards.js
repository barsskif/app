import React from "react"
import './SearchCards.css'
import SearchCard from "../search-card/SearchCard"

export default function SearchCards(props) {
    console.log('props', props);
    return (
        <div className="search-cards-wrapper">
            {props.contries.map((contry, index) =>
               <SearchCard contry={contry}  handleFavoritesClick={props.handleFavoritesClick} handleDeleteClick={props.handleDeleteClick}/>
            )}
        </div>
    )
}