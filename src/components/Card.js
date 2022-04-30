import React from "react";

function Card (props) {
    return (
        <article className="element">
            <div className="element__contain">
                <button className="element__trash" type="button">
                </button>
                <img className="element__image" alt={props.title} src={props.link}/>
                </div>
            <div className="element__description">
                <h2 className="element__title">{props.title}</h2>
                <div className="element__like-wrapper">
                    <button type="button" className="element__like">
                    </button>
                    <span className="element__like-value">{'5'}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;