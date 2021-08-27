import React, { useState } from "react"
import './SearchForm.css'

export default function SearchForm(props) {
    const [show, setShow] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="search-form-label" for="searcher">{props.heading}</label>
            <div className="search-form-wrapper">
                <input
                    type="text"
                    className="search-form-input"
                    value={props.value}
                    onChange={(e) => props.setSearchValue(e.target.value)}
                    placeholder="Enter country"
                    id="searcher"
                    required />
                {show ? <button className="searcher-form-clear-btn" type="reset" value={show}>&times;</button> : null}
            </div>
        </form>
    )
}