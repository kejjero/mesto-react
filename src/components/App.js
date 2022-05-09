import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import {useEffect, useState} from "react";
import api from "../utils/api";
import ImagePopup from "./ImagePopup";
import {CurrentUserContext, userContext} from '../contexts/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({})
    const [currentUser, setCurrentUser] = useState(userContext)
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([userData, cardsData]) => {
                setCurrentUser(userData)
                setCards(cardsData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleDeleteCardClick() {
        setIsDeleteCardPopupOpen(true)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsDeleteCardPopupOpen(false)
        setSelectedCard({})
    }

    function handleCardClick(selectedCard) {
        setSelectedCard(selectedCard)
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        if (isLiked) {
            api.deleteLike(card._id)
                .then((res) => {

                })
                .catch((err) => {
                    alert(err)
                })
        }
        else {
            api.addLike(card._id)
                .then((res) => {

                })
                .catch((err) => {
                    alert(err)
                })
        }
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header/>
            <Main
                openEditProfile={handleEditProfileClick}
                openAddPlace={handleAddPlaceClick}
                openAvatar={handleEditAvatarClick}
                openDeleteCard={handleDeleteCardClick}
                handleCardClick={handleCardClick}
                handleCardLike={handleCardLike}
                cards={cards}
            />
            {/* IMAGE POPUP */}
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            {/* EDIT PROFILE */}
            <PopupWithForm
                name={"edit-profile"}
                title={"Редактировать профиль"}
                buttonText={"Cохранить"}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    type="text"
                    className="popup__input popup__input_person"
                    id="person"
                    name="person"
                    value={"Имя"}
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span id="person-errors"
                      className="popup__error popup__error_visible">
              </span>
                <input
                    type="text"
                    className="popup__input popup__input_about-me"
                    id="about-me"
                    name="aboutMe"
                    value="Деятельность"
                    placeholder="Деятельность"
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span id="about-me-errors" className="popup__error popup__error_visible">
                            </span>
            </PopupWithForm>

            {/* ADD PLACE */}
            <PopupWithForm
                name={"add-place"}
                title={"Добавить место"}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText={"Cохранить"}
            >
                <input type="text"
                       className="popup__input popup__input_name-place"
                       name="name"
                       id="name-place"
                       value=""
                       placeholder="Название"
                       required
                       minLength="2"
                       maxLength="30"
                />
                <span
                    id="name-place-errors"
                    className="popup__error popup__error_visible">
                </span>
                <input type="url"
                       className="popup__input popup__input_link-place"
                       name="link"
                       id="link-place"
                       value=""
                       placeholder="Ссылка на картинку"
                       required
                />
                <span
                    id="link-place-errors"
                    className="popup__error popup__error_visible">
                </span>
            </PopupWithForm>

            {/* EDIT AVATAR */}
            <PopupWithForm
                name={"edit-avatar"}
                title={"Обновить аватар"}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                buttonText={"Cохранить"}
            >
                <input type="url"
                       className="popup__input popup__input_link-avatar"
                       name="avatar"
                       id="edit-avatar"
                       value={""}
                       placeholder="Ссылка на картинку"
                       required
                />
                <span
                    id="edit-avatar-errors"
                    className="popup__error popup__error_visible">
                </span>
            </PopupWithForm>

            {/* DELETE CARD */}
            <PopupWithForm
                name={"edit-avatar"}
                title={"Вы уверены?"}
                isOpen={isDeleteCardPopupOpen}
                onClose={closeAllPopups}
                buttonText={"Да"}
            >
            </PopupWithForm>
            <Footer/>
        </CurrentUserContext.Provider>
    )
}

export default App;
