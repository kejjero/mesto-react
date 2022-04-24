import React from "react";

function PopupWithForm (props) {
    return (
    <div className={`popup popup_type_${props.name} popup_${props.open}`}>
        <div className="popup__container">
            <button type="button"
                    className="popup__close-button popup__close-button_edit-profile"
                    aria-label="Закрыть">
            </button>
            <h2 className="popup__title">{props.title}</h2>
            <form className={props.name}>

            </form>
        </div>
        <div className="popup__overlay">
        </div>
    </div>
    )

}

export default  PopupWithForm;