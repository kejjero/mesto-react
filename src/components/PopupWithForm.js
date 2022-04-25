import React from "react";

function PopupWithForm (props) {
    return (
    <div className={`popup popup_type_${props.name} popup_${props.open}`}>
        <div className="popup__container">
            <button type="button"
                    className="popup__close-button"
                    aria-label="Закрыть">
            </button>
            <h2 className="popup__title">{props.title}</h2>
            <form className={props.name}>
                {props.children}

            </form>
        </div>
        <div className="popup__overlay">
        </div>
    </div>
    )

}

export default  PopupWithForm;