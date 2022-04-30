import React from "react";
import Card from "./Card"

// import ImagePopup from "./ImagePopup";

function Main ({openEditProfile, openAddPlace, openAvatar, userAvatar, userName, userDescription, cards}) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <button
                        type="button"
                        className="profile__avatar-button"
                        onClick={openAvatar}
                    />
                    <div
                        className="profile__avatar"
                        style={{ backgroundImage: `url(${userAvatar})` }}
                    >
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__person">{userName}</h1>
                    <p className="profile__about-me">{userDescription}</p>
                    <button
                        type="button"
                        className="profile__edit-button"
                        aria-label="Редактировать профиль"
                        onClick={openEditProfile}
                        title={'Редактировать профиль'}
                        name={'edit-profile'}
                    />
                </div>
                <button
                    onClick={openAddPlace}
                    className="profile__add-button"
                    type="button"
                />
            </section>
            <section className="elements">
                {/*{cards.forEach((card) => {*/}
                {/*    */}
                {/*    return(*/}
                {/*        <Card*/}
                {/*        title={card.name}*/}
                {/*        link={card.link}*/}
                {/*    />*/}
                {/*    )*/}
                {/*})*/}

                {/*}*/}
            </section>
        </main>
    )
}

export default Main;