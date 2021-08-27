import React from "react"
import './SearchCardButtons.css'

export default function SearchCardButtons({ contry, handleFavoritesClick, handleDeleteClick }) {
    return (
        <div>
            <label for="checkbox">Edit</label>
            <input onChange={() => handleFavoritesClick(contry)} type="checkbox" id="checkbox" />
            <button type="button" onClick={() => handleDeleteClick(contry)}>Delete</button>
        </div>
    )
}