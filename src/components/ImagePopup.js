import React from "react";

function ImagePopup (props) {
    return (
        <div
            onClick={props.onClose}
            className={`popup ${
                props.card && "popup_opened"
            }`}
        >
            <div className="popup__image-container">
                <button type="button" className="popup__close-button popup__close-button_zoom-image"
                        aria-label="Закрыть">
                </button>
                <img src={props?.src} alt={props?.name}
                     className="popup__image"/>
                    <p className="popup__subtitle">{props?.name}</p>
            </div>
            <div className="popup__overlay">
            </div>
        </div>
    )
}

export default ImagePopup;