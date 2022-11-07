!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._selector=e,this._popup=document.querySelector(".".concat(e)),this._closeButton=this._popup.querySelector(".".concat(e,"__close-button"))}var n,r;return n=t,(r=[{key:"open",value:function(){this._popup.classList.add("".concat(this._selector,"_opened"))}},{key:"close",value:function(){this._popup.classList.remove("".concat(this._selector,"_opened"))}},{key:"_handleEscClose",value:function(e){"Escape"==e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("keyup",(function(t){e._handleEscClose(t)})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("".concat(e._selector,"_opened"))&&e.close()})),this._closeButton.addEventListener("click",(function(){e.close()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,r;return t=e,(r=[{key:"setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleSubmitButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleSubmitButton()}))}))}},{key:"_toggleSubmitButton",value:function(){this._hasInvalidInput(this._inputList)?this._buttonElement.classList.add(this._inactiveButtonClass):this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function a(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(p,e);var t,n,r,o,u=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=u.call(this,e))._image=t._popup.querySelector(".image-popup__image"),t._subtitle=t._popup.querySelector(".image-popup__subtitle"),t}return t=p,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt=t,this._subtitle.textContent=t,c(l(p.prototype),"open",this).call(this)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(t),f=[{name:"Vale de Yosemite",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lago Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Montanhas Carecas",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Parque Nacional da Vanoise ",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],_=document.querySelector(".info__edit-button"),d=document.querySelector(".add-button"),y=new p("image-popup"),h=document.querySelector(".info__name"),m=document.querySelector(".info__job"),v=document.querySelector("#name-input"),b=document.querySelector("#job-input"),g=(document.querySelector(".popup_user"),document.querySelector(".popup_card"),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input_type_error_active"});function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(o);if(i){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t,n=e.selector,r=e.sending;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,n))._form=document.querySelector(".".concat(t._selector)).querySelector(".form"),t._inputs={},t._closeButton=document.querySelector(".".concat(t._selector)).querySelector(".popup__close-button"),t._sendButton=t._form.querySelector(".form__submit"),t._sending=r,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsList.forEach((function(t){var n=t.id;e._inputs["".concat(n)]=t.value})),this._inputs}},{key:"open",value:function(){this._inputsList=this._form.querySelectorAll(".form__input"),new r(g,this._form).setEventListeners(),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("keyup",(function(t){e._handleEscClose(t)})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()})),this._closeButton.addEventListener("click",(function(){e.close()})),this._sendButton.addEventListener("click",(function(t){t.preventDefault(),e._sending()})),document.addEventListener("keydown",(function(t){"Enter"==t.key&&e._sendButton.classList.contains("form__submit_inactive")&&t.preventDefault()}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(t);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._image=t.link,this._cardSelector=n,this._isLiked=!1,this.handleCardClick=o}var t,n;return t=e,(n=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._setImage(),this._setTitle(),this._element}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_setImage",value:function(){var e=this._element.querySelector(".card__image");e.src=this._image,e.alt=this._title}},{key:"_setTitle",value:function(){this._element.querySelector(".card__title").textContent=this._title}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__like-button").addEventListener("click",(function(){e._handleLike()})),this._element.querySelector(".card__trash-icon").addEventListener("click",(function(){e._deleteCard()})),this._element.querySelector(".card__image").addEventListener("click",(function(){y.open(e._image,e._title),y.setEventListeners()}))}},{key:"_handleLike",value:function(){this._element.querySelector(".card__like-button").classList.toggle("card__like-button_active"),this._isLiked=!this._isLiked}},{key:"_deleteCard",value:function(){this._element.remove()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=new(function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({items:f,renderer:function(e){var t=new O(e,"#card__template",{handleCardClick:function(){t.addEventListener("click",(function(){y.open(t._link,t._title)}))}});P.addItem(t.generateCard())}},".elements");P.renderItems(),_.addEventListener("click",(function(){var e=new C({selector:"popup_user",sending:function(){var t=e._getInputValues();h.textContent=t["name-input"],m.textContent=t["job-input"],e.close(),v.value=t["name-input"],b.value=t["job-input"]}});e.open(),e.setEventListeners()})),d.addEventListener("click",(function(){var e=new C({selector:"popup_card",sending:function(){var t=e._getInputValues();f.push({name:t["title-input"],link:t["image-input"]});var n=new O(f[f.length-1],"#card__template",{handleCardClick:function(){n.addEventListener("click",(function(){y.open(n._link,n._title)}))}}),r=n.generateCard();P.addItem(r),e.close()}});e.open(),e.setEventListeners()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDdEQsSUFBTUksRUFBVSxJQUFJdkMsRUFBS3RCLEVBQU1BLEVBQU04RCxPQUFPLEdBQUksa0JBQW1CLENBQ2pFckMsZ0JBQWlCLFdBQ2ZvQyxFQUFRNUcsaUJBQWlCLFNBQVMsV0FDaENvRCxFQUFXaUMsS0FBS3VCLEVBQVFULE1BQU9TLEVBQVFuQyxPQUN4QyxHQUNGLElBRUdxQyxFQUFZRixFQUFRUCxlQUMxQmQsRUFBWWEsUUFBUVUsR0FDcEJKLEVBQVEzRyxPQUNULElBRUgyRyxFQUFRckIsT0FDUnFCLEVBQVF2QyxtQkFDVCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWFuZGV4LnByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly95YW5kZXgucHJhY3RpY3VtLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3lhbmRleC5wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3J9YCk7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9yfV9fY2xvc2UtYnV0dG9uYCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChgJHt0aGlzLl9zZWxlY3Rvcn1fb3BlbmVkYCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoYCR7dGhpcy5fc2VsZWN0b3J9X29wZW5lZGApO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgaWYgKGV2dC5rZXkgPT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKGV2dCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgJHt0aGlzLl9zZWxlY3Rvcn1fb3BlbmVkYCkpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IoZm9ybVNlbGVjdG9ycywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBmb3JtU2VsZWN0b3JzLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBmb3JtU2VsZWN0b3JzLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IGZvcm1TZWxlY3RvcnMuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gZm9ybVNlbGVjdG9ycy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gZm9ybVNlbGVjdG9ycy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gZm9ybVNlbGVjdG9ycy5lcnJvckNsYXNzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLl90b2dnbGVTdWJtaXRCdXR0b24oKTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLl90b2dnbGVTdWJtaXRCdXR0b24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVTdWJtaXRCdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0TGlzdCkpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZvcm1WYWxpZGF0b3IgfTtcclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5jbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgc3VwZXIoc2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLXBvcHVwX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX3N1YnRpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5pbWFnZS1wb3B1cF9fc3VidGl0bGVcIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKGltYWdlLCB0aXRsZSkge1xyXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgICB0aGlzLl9pbWFnZS5hbHQgPSB0aXRsZTtcclxuICAgIHRoaXMuX3N1YnRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9O1xyXG4iLCJpbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcblxyXG5cclxuIGNvbnN0IGNhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFsZSBkZSBZb3NlbWl0ZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW9udGFuaGFzIENhcmVjYXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJQYXJxdWUgTmFjaW9uYWwgZGEgVmFub2lzZSBcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbiBjb25zdCBlZGl0VXNlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19fZWRpdC1idXR0b25cIik7XHJcbiBjb25zdCBhZGRVc2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnV0dG9uXCIpO1xyXG4gY29uc3QgSW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcImltYWdlLXBvcHVwXCIpO1xyXG4gY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fX25hbWVcIik7XHJcbiBjb25zdCB1c2VySm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvX19qb2JcIik7XHJcbiBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtaW5wdXRcIik7XHJcbiBjb25zdCBqb2JJbnB1dCA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb2ItaW5wdXRcIik7XHJcbiBjb25zdCB1c2VyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3VzZXJcIik7XHJcbiBjb25zdCBjYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2NhcmRcIik7XHJcbiBjb25zdCBmb3JtU2VsZWN0b3JzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogXCIuZm9ybVwiLFxyXG5cclxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxyXG5cclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fc3VibWl0XCIsXHJcblxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIsXHJcblxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcblxyXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvcl9hY3RpdmVcIixcclxufTtcclxuXHJcblxyXG4gZXhwb3J0IHtjYXJkcywgZWRpdFVzZXJCdXR0b24sIGFkZFVzZXJCdXR0b24sIEltYWdlUG9wdXAsIHVzZXJOYW1lLCB1c2VySm9iLCBuYW1lSW5wdXQsIGpvYklucHV0LCB1c2VyUG9wdXAsIGNhcmRQb3B1cCwgZm9ybVNlbGVjdG9yc307IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IHtjYXJkcywgZWRpdFVzZXJCdXR0b24sIGFkZFVzZXJCdXR0b24sIEltYWdlUG9wdXAsIHVzZXJOYW1lLCB1c2VySm9iLCBuYW1lSW5wdXQsIGpvYklucHV0LCBmb3JtTGlzdCwgdXNlclBvcHVwLCBjYXJkUG9wdXAsIGZvcm1TZWxlY3RvcnN9IGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xyXG5cclxuXHJcbmNsYXNzIFBvcHVwV2l0aEZvcm1zIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgc2VsZWN0b3IsIHNlbmRpbmcgfSkge1xyXG4gICAgc3VwZXIoc2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuX3NlbGVjdG9yfWApLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgIHRoaXMuX2lucHV0cyA9IHt9O1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9zZWxlY3Rvcn1gKS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZS1idXR0b25cIik7XHJcbiAgICB0aGlzLl9zZW5kQnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdFwiKTtcclxuICAgIHRoaXMuX3NlbmRpbmcgPSBzZW5kaW5nO1xyXG4gIH1cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dHNMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGlucHV0LmlkO1xyXG4gICAgICB0aGlzLl9pbnB1dHNbYCR7aW5wdXROYW1lfWBdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dHM7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9pbnB1dHNMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpO1xyXG4gICAgY29uc3QgbmV3Rm9ybSA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1TZWxlY3RvcnMsIHRoaXMuX2Zvcm0pO1xyXG4gICAgbmV3Rm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlbmVkXCIpO1xyXG4gIH1cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKGV2dCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX29wZW5lZFwiKSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NlbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuX3NlbmRpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZihldnQua2V5ID09IFwiRW50ZXJcIiAmJiB0aGlzLl9zZW5kQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm1fX3N1Ym1pdF9pbmFjdGl2ZVwiKSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCB7IFBvcHVwV2l0aEZvcm1zIH07XHJcbiIsImltcG9ydCB7IEltYWdlUG9wdXAgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhcmRTZWxlY3RvciwgeyBoYW5kbGVDYXJkQ2xpY2sgfSkge1xyXG4gICAgdGhpcy5fdGl0bGUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9pbWFnZSA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2lzTGlrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fc2V0SW1hZ2UoKTtcclxuICAgIHRoaXMuX3NldFRpdGxlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9zZXRJbWFnZSgpIHtcclxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5faW1hZ2U7XHJcbiAgICBpbWFnZS5hbHQgPSB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIF9zZXRUaXRsZSgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5fZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX190cmFzaC1pY29uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGV0ZUNhcmQoKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIEltYWdlUG9wdXAub3Blbih0aGlzLl9pbWFnZSwgdGhpcy5fdGl0bGUpO1xyXG4gICAgICAgIEltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTGlrZSgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcclxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgICB0aGlzLl9pc0xpa2VkID0gIXRoaXMuX2lzTGlrZWQ7XHJcbiAgfVxyXG5cclxuICBfZGVsZXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDYXJkIH07XHJcbiIsImltcG9ydCBcIi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IFBvcHVwV2l0aEZvcm1zIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3Jtcy5qc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IHtjYXJkcywgZWRpdFVzZXJCdXR0b24sIGFkZFVzZXJCdXR0b24sIEltYWdlUG9wdXAsIHVzZXJOYW1lLCB1c2VySm9iLCBuYW1lSW5wdXQsIGpvYklucHV0LCBmb3JtTGlzdCwgdXNlclBvcHVwLCBjYXJkUG9wdXAsIGZvcm1TZWxlY3RvcnN9IGZyb20gXCIuL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5cclxuY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBpdGVtczogY2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaXRlbSwgXCIjY2FyZF9fdGVtcGxhdGVcIiwge1xyXG4gICAgICAgICAgaGFuZGxlQ2FyZENsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICBJbWFnZVBvcHVwLm9wZW4oY2FyZC5fbGluaywgY2FyZC5fdGl0bGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkLmdlbmVyYXRlQ2FyZCgpKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBcIi5lbGVtZW50c1wiXHJcbik7XHJcblxyXG5jYXJkU2VjdGlvbi5yZW5kZXJJdGVtcygpO1xyXG5cclxuXHJcblxyXG5lZGl0VXNlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IFVzZXJGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm1zKHtcclxuICAgIHNlbGVjdG9yOiBcInBvcHVwX3VzZXJcIixcclxuICAgIHNlbmRpbmc6ICgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRzID0gVXNlckZvcm0uX2dldElucHV0VmFsdWVzKCk7XHJcbiAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gaW5wdXRzW1wibmFtZS1pbnB1dFwiXTtcclxuICAgICAgdXNlckpvYi50ZXh0Q29udGVudCA9IGlucHV0c1tcImpvYi1pbnB1dFwiXTtcclxuICAgICAgVXNlckZvcm0uY2xvc2UoKTtcclxuICAgICAgbmFtZUlucHV0LnZhbHVlID0gaW5wdXRzW1wibmFtZS1pbnB1dFwiXTtcclxuICAgICAgam9iSW5wdXQudmFsdWUgPSBpbnB1dHNbXCJqb2ItaW5wdXRcIl07XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBcclxuICBVc2VyRm9ybS5vcGVuKCk7XHJcbiAgVXNlckZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcblxyXG5hZGRVc2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgQWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3Jtcyh7XHJcbiAgICBzZWxlY3RvcjogXCJwb3B1cF9jYXJkXCIsXHJcbiAgICBzZW5kaW5nOiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0cyA9IEFkZEZvcm0uX2dldElucHV0VmFsdWVzKCk7XHJcbiAgICAgIGNhcmRzLnB1c2goe25hbWU6IGlucHV0c1tcInRpdGxlLWlucHV0XCJdLCBsaW5rOiBpbnB1dHNbXCJpbWFnZS1pbnB1dFwiXX0pO1xyXG4gICAgICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoY2FyZHNbY2FyZHMubGVuZ3RoLTFdLCBcIiNjYXJkX190ZW1wbGF0ZVwiLCB7XHJcbiAgICAgICAgaGFuZGxlQ2FyZENsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICBuZXdDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEltYWdlUG9wdXAub3BlbihuZXdDYXJkLl9saW5rLCBuZXdDYXJkLl90aXRsZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgY2FyZFRvQWRkID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgICAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkVG9BZGQpO1xyXG4gICAgICBBZGRGb3JtLmNsb3NlKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIEFkZEZvcm0ub3BlbigpO1xyXG4gIEFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcbiIsImNsYXNzIFNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgU2VjdGlvbiB9O1xyXG4iXSwibmFtZXMiOlsiUG9wdXAiLCJzZWxlY3RvciIsInRoaXMiLCJfc2VsZWN0b3IiLCJfcG9wdXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfY2xvc2VCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJldnQiLCJrZXkiLCJjbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRXNjQ2xvc2UiLCJ0YXJnZXQiLCJjb250YWlucyIsIkZvcm1WYWxpZGF0b3IiLCJmb3JtU2VsZWN0b3JzIiwiZm9ybUVsZW1lbnQiLCJfZm9ybUVsZW1lbnQiLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYnV0dG9uRWxlbWVudCIsIl90b2dnbGVTdWJtaXRCdXR0b24iLCJmb3JFYWNoIiwiaW5wdXRFbGVtZW50IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJ0ZXh0Q29udGVudCIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX3N1YnRpdGxlIiwiaW1hZ2UiLCJ0aXRsZSIsInNyYyIsImFsdCIsImNhcmRzIiwibmFtZSIsImxpbmsiLCJlZGl0VXNlckJ1dHRvbiIsImFkZFVzZXJCdXR0b24iLCJJbWFnZVBvcHVwIiwidXNlck5hbWUiLCJ1c2VySm9iIiwibmFtZUlucHV0Iiwiam9iSW5wdXQiLCJQb3B1cFdpdGhGb3JtcyIsInNlbmRpbmciLCJfZm9ybSIsIl9pbnB1dHMiLCJfc2VuZEJ1dHRvbiIsIl9zZW5kaW5nIiwiX2lucHV0c0xpc3QiLCJpbnB1dCIsImlucHV0TmFtZSIsInZhbHVlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJwcmV2ZW50RGVmYXVsdCIsIkNhcmQiLCJkYXRhIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiX3RpdGxlIiwiX2NhcmRTZWxlY3RvciIsIl9pc0xpa2VkIiwiX2VsZW1lbnQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfc2V0SW1hZ2UiLCJfc2V0VGl0bGUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2hhbmRsZUxpa2UiLCJfZGVsZXRlQ2FyZCIsIm9wZW4iLCJ0b2dnbGUiLCJjYXJkU2VjdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtIiwiY2FyZCIsIl9saW5rIiwiYWRkSXRlbSIsImdlbmVyYXRlQ2FyZCIsInJlbmRlckl0ZW1zIiwiVXNlckZvcm0iLCJpbnB1dHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJBZGRGb3JtIiwicHVzaCIsIm5ld0NhcmQiLCJsZW5ndGgiLCJjYXJkVG9BZGQiXSwic291cmNlUm9vdCI6IiJ9