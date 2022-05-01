import React from "react";

function Card ({openDeleteCard, title, link, likes, handleCardClick}) {

    function handleClick() {
        handleCardClick({name: title, image: link})
    }

    return (
        <article
            className="element"
            onClick={handleClick}
        >
            <div className="element__contain">
                <button
                    className="element__trash element__trash_active"
                    type="button"
                    onClick={openDeleteCard}
                >
                </button>
                <img className="element__image" alt={title} src={link}/>
                </div>
            <div className="element__description">
                <h2 className="element__title">{title}</h2>
                <div className="element__like-wrapper">
                    <button type="button" className="element__like">
                    </button>
                    <span className="element__like-value">{likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;