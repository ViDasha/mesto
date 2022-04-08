(()=>{"use strict";var e=document.querySelector(".page"),t=document.getElementById("pp-edit").querySelector(".popup__form"),n=e.querySelector(".profile__edit-button"),r=document.getElementById("pp-edit-name"),o=document.getElementById("pp-edit-about"),i=document.getElementById("pp-add").querySelector(".popup__form"),a=e.querySelector(".profile__add-button"),u=e.querySelector(".profile__avatar"),c=document.getElementById("pp-avatar").querySelector(".popup__form");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._authorization=t.headers.authorization,this._contentType=t.headers["Content-Type"]}var t,n;return t=e,(n=[{key:"_renderResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:{authorization:this._authorization}}).then(this._renderResult)}},{key:"getUserProfile",value:function(){return fetch(this._baseUrl+"/users/me",{headers:{authorization:this._authorization}}).then(this._renderResult)}},{key:"patchUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e.name,about:e.about})}).then(this._renderResult)}},{key:"postNewCard",value:function(e){return fetch(this._baseUrl+"/cards",{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e.name,link:e.link})}).then(this._renderResult)}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:{authorization:this._authorization}}).then(this._renderResult)}},{key:"patchUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:e})}).then(this._renderResult)}},{key:"putCardLike",value:function(e){return fetch(this._baseUrl+"/cards/"+e+"/likes",{method:"PUT",headers:{authorization:this._authorization}}).then(this._renderResult)}},{key:"deleteCardLike",value:function(e){return fetch(this._baseUrl+"/cards/"+e+"/likes",{method:"DELETE",headers:{authorization:this._authorization}}).then(this._renderResult)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._cardSelector=n,this._handleCardClick=o,this._handleOpenFormDelete=i,this._userId=r,this._handleDoLike=a,this._handleDeleteLike=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_DoLike",value:function(){this._element.querySelector(".element__like").classList.add("element__like_active")}},{key:"_HideLike",value:function(){this._element.querySelector(".element__like").classList.remove("element__like_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove()}},{key:"_isLiked",value:function(){var e=this;return this._data.likes.find((function(t){return t._id==e._userId}))}},{key:"_changeLike",value:function(){this._isLiked()?(this._HideLike(),this._handleDeleteLike(this._data._id)):(this._DoLike(),this._handleDoLike(this._data._id))}},{key:"_countLikes",value:function(){this._element.querySelector(".element__count-like").textContent=this._data.likes.length}},{key:"_hideBasket",value:function(){this._element.querySelector(".element__basket").classList.add("element__basket_hide")}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(t){e._handleCardClick(e._data)})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._changeLike()})),this._element.querySelector(".element__basket").addEventListener("click",(function(t){e._handleOpenFormDelete(e._data)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__image").src=this._data.link,this._element.querySelector(".element__image").alt=this._data.name,this._element.querySelector(".element__name").textContent=this._data.name,this._isLiked()&&this._DoLike(),this._countLikes(),this._data.owner._id!=this._userId&&this._hideBasket(),this._element}},{key:"updateCard",value:function(e){this._data=e,this._countLikes()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listAttribute=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._listAttribute.inputSelector)),this._buttonElement=this._formElement.querySelector(this._listAttribute.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._listAttribute.inputErrorClass),n.textContent=t,n.classList.add(this._listAttribute.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._listAttribute.inputErrorClass),t.classList.remove(this._listAttribute.errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._listAttribute.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._listAttribute.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){t?this._container.append(e):this._container.prepend(e)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.getElementById(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"!==e.key&&"Esc"!==e.key||this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup__overlay")&&t.currentTarget.classList.contains("popup_opened"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function L(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popup.querySelector(".popup__form"),n._formSubmit=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__item"),this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"renderLoading",value:function(e){this._popupForm.querySelector(".popup__button-save").textContent=e}},{key:"setEventListeners",value:function(){var e=this;k(S(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading("Сохранение..."),e._formSubmit(e._getInputValues())}))}},{key:"close",value:function(){k(S(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._about=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,_id:this._id}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._id=e._id}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function A(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e){this._popup.querySelector(".popup__image").src=e.link,this._popup.querySelector(".popup__image").alt=e.name,this._popup.querySelector(".popup__name").textContent=e.name,q(U(a.prototype),"open",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function N(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=a,n=[{key:"setEventListeners",value:function(){var e=this;x(H(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._cardDelete(e._id)}))}},{key:"changeSubmitFunction",value:function(e){this._cardDelete=e}},{key:"open",value:function(e){this._id=e._id,x(H(a.prototype),"open",this).call(this)}}],n&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b),M={};function G(e){oe.open(e)}function K(e){var t=this;Z.deleteCard(e).then((function(){t.handleDeleteCard(),ae.close()})).catch((function(e){console.log(e)}))}function Q(e){ae.open(e),ae.changeSubmitFunction(K.bind(this))}function W(e){var t=this;Z.putCardLike(e).then((function(e){t.updateCard(e)})).catch((function(e){console.log(e)}))}function X(e){var t=this;Z.deleteCardLike(e).then((function(e){t.updateCard(e)})).catch((function(e){console.log(e)}))}function Y(e){return new p(e,"#element",$.getUserInfo()._id,G,Q,W,X).generateCard()}var Z=new l({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"bf5f1893-17e0-49e0-bcb2-32090faea63d","Content-Type":"application/json"}}),$=new j(".profile__name",".profile__about",".profile__avatar-img");Z.getUserProfile().then((function(e){$.setUserInfo({name:e.name,about:e.about,_id:e._id}),$.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)}));var ee=new y({renderer:function(e){var t=Y(e);ee.addItem(t,!0)}},".elements");Z.getInitialCards().then((function(e){ee.renderItems(e)})).catch((function(e){console.log(e)}));var te=new O("pp-edit",(function(e){Z.patchUserInfo(e).then((function(e){$.setUserInfo({name:e.name,about:e.about}),te.close()})).catch((function(e){console.log(e)})).finally((function(){return te.renderLoading("Сохранить")}))}));te.setEventListeners(),n.addEventListener("click",(function(){M[t.getAttribute("id")].resetValidation();var e=$.getUserInfo(),n=e.name,i=e.about;r.value=n,o.value=i,te.open()}));var ne=new O("pp-avatar",(function(e){Z.patchUserAvatar(e.link).then((function(e){$.setUserAvatar(e.avatar),ne.close()})).catch((function(e){console.log(e)})).finally((function(){return ne.renderLoading("Сохранить")}))}));ne.setEventListeners(),u.addEventListener("click",(function(){M[c.getAttribute("id")].resetValidation(),ne.open()}));var re=new O("pp-add",(function(e){Z.postNewCard(e).then((function(e){var t=Y(e);ee.addItem(t,!1),re.close()})).catch((function(e){console.log(e)})).finally((function(){return re.renderLoading("Создать")}))}));re.setEventListeners(),a.addEventListener("click",(function(){M[i.getAttribute("id")].resetValidation(),re.open()}));var oe=new D("pp-img");oe.setEventListeners();var ie,ae=new J("pp-delete");ae.setEventListeners(),ie={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_active"},Array.from(document.querySelectorAll(ie.formSelector)).forEach((function(e){var t=new d(ie,e),n=e.getAttribute("id");M[n]=t,t.enableValidation()}))})();