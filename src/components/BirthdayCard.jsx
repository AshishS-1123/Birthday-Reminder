import React, { useState } from "react"
import List from "./List"
import ListItems from "../data/data.js"
import "./BirthdayCard.css"

function BirthdayCard() {
    const [listItems, setListItems] = useState(ListItems)

    const clearList = () => {
        setListItems([])
    }

    return (
        <div className="BirthdayCard__card">
            <h1>{listItems.length} birthdays today</h1>
            <List items={listItems}/>
            <button
                onClick={clearList}
                className="BirthdayCard__button">
                    Clear All
            </button>
        </div>
    )
}

export default BirthdayCard
