import React from "react";

function PopupWithForm ({isOpen, name, title, children, onClose}) {


    return (
    <div
        className={`popup popup_type_${name} ${isOpen &&  "popup_opened"}`}
    >
        <div className="popup__container"
        >
            <button
                type="button"
                className="popup__close-button"
                aria-label="Закрыть"
                onClick={onClose}
            >
            </button>
            <h2 className="popup__title">{title}</h2>
            <form
                className={"popup__form"}
                method={"post"}
                name={name}
                noValidate
            >
                {children}
            </form>
        </div>
        <div
            className="popup__overlay"
            onClick={onClose}
        >
        </div>
    </div>
    )

}

export default  PopupWithForm;