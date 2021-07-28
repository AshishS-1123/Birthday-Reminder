import React from "react"
import List from "./List"
import "./BirthdayCard.css"

function BirthdayCard() {

    const clearList = () => {
        console.log("clear")
    }

    return (
        <div className="BirthdayCard__card">
            <h1>0 birthdays today</h1>
            <List />
            <button
                onClick={clearList}
                className="BirthdayCard__button">
                    Clear All
            </button>
        </div>
    )
}

export default BirthdayCard
