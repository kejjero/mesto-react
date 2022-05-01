import React from "react";
import Card from "./Card"

function Main ({
                   openEditProfile,
                   openAddPlace,
                   openAvatar,
                   openDeleteCard,
                   userAvatar,
                   userName,
                   userDescription,
                   cards,
                   handleCardClick,
}) {
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
                {cards.map((card) => {
                    return(
                        <Card
                        title={card.name}
                        link={card.link}
                        likes={card.likes}
                        openDeleteCard={openDeleteCard}
                        handleCardClick={handleCardClick}
                    />
                    )
                })
                }
            </section>
        </main>
    )
}

export default Main;