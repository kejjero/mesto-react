import React from "react";
import api from "../utils/api";
import {useEffect} from "react";

// import ImagePopup from "./ImagePopup";

function Main ({openEditProfile, openAddPlace, openAvatar}) {
    useEffect(() => {
    Promise.all([api.getProfile(), api.getCards()])
        .then(([res, data]) => {
            let userAvatar = res.avatar
            // data.reverse();
            console.log(userAvatar)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


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
                        style={{ backgroundImage: `url(${"userAvatar"})` }}
                    >
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__person">Имя</h1>
                    <p className="profile__about-me">Деятельность</p>
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
        </main>
    )
}

export default Main;