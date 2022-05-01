import React from "react";

function handleClick(props) {
    console.log(props)
}

function Card (props) {
    return (
        <article
            className="element"
            onClick={handleClick}
            e={handleCardClick}
        >
            <div className="element__contain">
                {/* element__trash_active переделать в ПР11  */}
                <button
                    className="element__trash element__trash_active"
                    type="button"
                    onClick={props.openDeleteCard}
                >
                </button>
                <img className="element__image" alt={props.title} src={props.link}/>
                </div>
            <div className="element__description">
                <h2 className="element__title">{props.title}</h2>
                <div className="element__like-wrapper">
                    <button type="button" className="element__like">
                    </button>
                    <span className="element__like-value">{props.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;