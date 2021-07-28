import React from "react"
import "./List.css"

function List({items}) {
    console.log(items)
    return (
        <div className="List__card">
            {items.map(item => {
                const {id, name, age, image} = item
                const initials = name.split(" ")[0][0] + name.split(" ")[1][0]
                return (
                    <div className="List__item_card" key={id}>
                        <img src={image}className="List__image" alt={initials} />
                        <div className="List__data">
                            <p className="List__name">{name}</p>
                            <p className="List__age">{age}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List
