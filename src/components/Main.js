import React from "react";
// import ImagePopup from "./ImagePopup";

function Main (props) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <button
                        type="button"
                        className="profile__avatar-button"
                        onClick={props.openAvatar}
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
                        onClick={props.openEditProfile}
                        title={'Редактировать профиль'}
                        name={'edit-profile'}
                    />
                </div>
                <button
                    onClick={props.openAddPlace}
                    className="profile__add-button"
                    type="button"
                />
                </section>
        </main>
    )
}

export default Main;