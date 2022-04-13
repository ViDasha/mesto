(()=>{"use strict";var e=document.querySelector(".page"),t=document.getElementById("pp-edit").querySelector(".popup__form"),n=e.querySelector(".profile__edit-button"),r=document.getElementById("pp-edit-name"),o=document.getElementById("pp-edit-about"),i=document.getElementById("pp-add").querySelector(".popup__form"),a=e.querySelector(".profile__add-button"),u=e.querySelector(".profile__avatar"),c=document.getElementById("pp-avatar").querySelector(".popup__form");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_renderResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then(this._renderResult)}},{key:"getUserProfile",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then(this._renderResult)}},{key:"patchUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._renderResult)}},{key:"postNewCard",value:function(e){return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._renderResult)}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers}).then(this._renderResult)}},{key:"patchUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._renderResult)}},{key:"changeCardLike",value:function(e,t){return fetch(this._baseUrl+"/cards/"+e+"/likes",{method:t,headers:this._headers}).then(this._renderResult)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._cardSelector=n,this._handleCardClick=o,this._handleOpenFormDelete=i,this._userId=r,this._handleLike=a}var t,n;return t=e,(n=[{key:"getId",value:function(){return this._data._id}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_doLike",value:function(){this._likeButton.classList.add("element__like_active")}},{key:"_hideLike",value:function(){this._likeButton.classList.remove("element__like_active")}},{key:"handleDeleteCard",value:function(){this._element.remove()}},{key:"isLiked",value:function(){var e=this;return this._data.likes.find((function(t){return t._id==e._userId}))}},{key:"_changeLike",value:function(){this.isLiked()?this._doLike():this._hideLike()}},{key:"_countLikes",value:function(){this._numberOfLike.textContent=this._data.likes.length}},{key:"_hideBasket",value:function(){this._basket.classList.add("element__basket_hide")}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(t){e._handleCardClick(e._data)})),this._likeButton.addEventListener("click",(function(){e._handleLike(e)})),this._basket.addEventListener("click",(function(t){e._handleOpenFormDelete(e)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like"),this._numberOfLike=this._element.querySelector(".element__count-like"),this._cardImage=this._element.querySelector(".element__image"),this._cardName=this._element.querySelector(".element__name"),this._basket=this._element.querySelector(".element__basket"),this._setEventListeners(),this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._cardName.textContent=this._data.name,this._changeLike(),this._countLikes(),this._data.owner._id!=this._userId&&this._hideBasket(),this._element}},{key:"updateCard",value:function(e){this._data=e,this._changeLike(),this._countLikes()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listAttribute=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._listAttribute.inputSelector)),this._buttonElement=this._formElement.querySelector(this._listAttribute.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._listAttribute.inputErrorClass),n.textContent=t,n.classList.add(this._listAttribute.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._listAttribute.inputErrorClass),t.classList.remove(this._listAttribute.errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._listAttribute.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._listAttribute.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){t?this._container.append(e):this._container.prepend(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.getElementById(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"!==e.key&&"Esc"!==e.key||this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup__overlay")&&t.currentTarget.classList.contains("popup_opened"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function L(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popup.querySelector(".popup__form"),n._formSubmit=t,n._inputList=n._popup.querySelectorAll(".popup__item"),n._submitButton=n._popupForm.querySelector(".popup__button-save"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e}},{key:"setEventListeners",value:function(){var e=this;k(O(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading("Сохранение..."),e._formSubmit(e._getInputValues())}))}},{key:"close",value:function(){k(O(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._about=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src,_id:this._id}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._id=e._id,this._avatar.src=e.avatar}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function B(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._cardImage=t._popup.querySelector(".popup__image"),t._cardName=t._popup.querySelector(".popup__name"),t}return t=a,(n=[{key:"open",value:function(e){this._cardImage.src=e.link,this._cardImage.alt=e.name,this._cardName.textContent=e.name,R(T(a.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=F(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function F(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function J(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=a,n=[{key:"setEventListeners",value:function(){var e=this;V(H(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._cardDelete(e._card)}))}},{key:"changeSubmitFunction",value:function(e){this._cardDelete=e}},{key:"open",value:function(e){this._card=e,V(H(a.prototype),"open",this).call(this)}}],n&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $={};function G(e){ie.open(e)}function K(e){Z.deleteCard(e.getId()).then((function(){e.handleDeleteCard(),ue.close()})).catch((function(e){console.log(e)}))}function Q(e){ue.open(e),ue.changeSubmitFunction(K.bind(this))}var W="PUT";function X(e){W=e.isLiked()?"DELETE":"PUT",Z.changeCardLike(e.getId(),W).then((function(t){e.updateCard(t)})).catch((function(e){console.log(e)}))}function Y(e){return new p(e,"#element",ee.getUserInfo()._id,G,Q,X).generateCard()}var Z=new l({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"bf5f1893-17e0-49e0-bcb2-32090faea63d","Content-Type":"application/json"}}),ee=new j(".profile__name",".profile__about",".profile__avatar-img"),te=new _({renderer:function(e){var t=Y(e);te.addItem(t,!0)}},".elements");Promise.all([Z.getUserProfile(),Z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo(o),te.renderItems(i)})).catch((function(e){console.log(e)}));var ne=new S("pp-edit",(function(e){Z.patchUserInfo(e).then((function(e){ee.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){return ne.renderLoading("Сохранить")}))}));ne.setEventListeners(),n.addEventListener("click",(function(){$[t.getAttribute("id")].resetValidation();var e=ee.getUserInfo(),n=e.name,i=e.about;r.value=n,o.value=i,ne.open()}));var re=new S("pp-avatar",(function(e){Z.patchUserAvatar(e.link).then((function(e){ee.setUserInfo(e),re.close()})).catch((function(e){console.log(e)})).finally((function(){return re.renderLoading("Сохранить")}))}));re.setEventListeners(),u.addEventListener("click",(function(){$[c.getAttribute("id")].resetValidation(),re.open()}));var oe=new S("pp-add",(function(e){Z.postNewCard(e).then((function(e){var t=Y(e);te.addItem(t,!1),oe.close()})).catch((function(e){console.log(e)})).finally((function(){return oe.renderLoading("Создать")}))}));oe.setEventListeners(),a.addEventListener("click",(function(){$[i.getAttribute("id")].resetValidation(),oe.open()}));var ie=new U("pp-img");ie.setEventListeners();var ae,ue=new M("pp-delete");ue.setEventListeners(),ae={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_active"},Array.from(document.querySelectorAll(ae.formSelector)).forEach((function(e){var t=new d(ae,e),n=e.getAttribute("id");$[n]=t,t.enableValidation()}))})();