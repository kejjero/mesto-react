import React from "react";
import PopupWithForm from "./PopupWithForm";

function Main () {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleEditProfileClick() {
        setIsOpen(!isOpen)
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <button
                        type="button"
                        className="profile__avatar-button"
                    />
                    <img className="profile__avatar" alt="Аватар"
                         src="https://спортсекции18.рф/wp-content/uploads/2020/09/placeholder-man.png"
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__person">Имя</h1>
                    <p className="profile__about-me">Деятельность</p>
                    <button
                        type="button"
                        className="profile__edit-button"
                        aria-label="Редактировать профиль"
                        onClick={handleEditProfileClick}
                        title={'Редактировать профиль'}
                        name={'edit-profile'}
                    />
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                />
            </section>
            {isOpen && <PopupWithForm
                name={'edit-profile'}
            />}
        </main>
    )
}

export default Main;