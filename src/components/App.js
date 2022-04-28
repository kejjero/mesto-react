import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api"

import PopupWithForm from "./PopupWithForm";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function closeAllPopups () {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
    }

  return (
      <>
          <Header/>
          <Main
              openEditProfile = {handleEditProfileClick}
              openAddPlace = {handleAddPlaceClick}
              openAvatar = {handleEditAvatarClick}
          />
          <Footer/>

          {/* EDIT PROFILE */}
          {isEditProfilePopupOpen && <PopupWithForm
              name={"edit-profile"}
              title={"Редактировать профиль"}
              isOpen={true}
              onClose = {closeAllPopups}
          >
              <input
                  type="text"
                  className="popup__input popup__input_person"
                  id="person"
                  name="person"
                  value="Имя"
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
              <input type="submit"
                     className="popup__button popup__button_save popup__button_edit-profile"
                     value="Сохранить"
              />
          </PopupWithForm>}

          {/* ADD PLACE */}
          {isAddPlacePopupOpen && <PopupWithForm
              name={"add-place"}
              title={"Добавить место"}
              isOpen={true}
              onClose = {closeAllPopups}
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
              <input
                  type="submit"
                  className="popup__button popup__button_save popup__button_add-place"
                  value="Сохранить"
              />
          </PopupWithForm>}

          {/* EDIT AVATAR */}
          {isEditAvatarPopupOpen && <PopupWithForm
              name={"edit-avatar"}
              title={"Обновить аватар"}
              isOpen={true}
              onClose = {closeAllPopups}
          >
              <input type="url"
                     className="popup__input popup__input_link-avatar"
                     name="avatar"
                     id="edit-avatar"
                     value=""
                     placeholder="Ссылка на картинку"
                     required
              />
              <span
                  id="edit-avatar-errors"
                  className="popup__error popup__error_visible">
                </span>
              <input
                  type="submit"
                  className="popup__button popup__button_save popup__button_add-place"
                  value="Сохранить"
              />
          </PopupWithForm>}
      </>
)
}

export default App;
