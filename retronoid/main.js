(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 5, vars: 0, consts: [[1, "about-content"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Retronoid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Its a Arkanoid-like game with retro style.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "/xh9":
/*!**************************************!*\
  !*** ./src/app/firebase.settings.ts ***!
  \**************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
const firebaseConfig = {
    apiKey: "AIzaSyAQHVa4mnqumLAX5s6tKTog4q5cLS1AT7o",
    authDomain: "epamtrainingprojectarco-00001.firebaseapp.com",
    databaseURL: "https://epamtrainingprojectarco-00001-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "epamtrainingprojectarco-00001",
    storageBucket: "epamtrainingprojectarco-00001.appspot.com",
    messagingSenderId: "705858477717",
    appId: "1:705858477717:web:c286b5785fe5bd2c9e459c"
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GIT\Dzmitry-Salauyou-Tasks\angular-project\retronoid-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0+v6":
/*!******************************************************************************************!*\
  !*** ./src/app/components/score/components/profile-details/profile-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function() { return ProfileDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/player-list/player-list.service */ "mffc");


class ProfileDetailsComponent {
    constructor(playerListService) {
        this.playerListService = playerListService;
        this.updateUserInterval = null;
        this.playerData = null;
        this.playerId = "";
    }
    ngOnInit() {
        this.getPlayerData();
    }
    getPlayerData() {
        this.playerData = this.playerListService.getPlayer(this.playerId);
    }
}
ProfileDetailsComponent.ɵfac = function ProfileDetailsComponent_Factory(t) { return new (t || ProfileDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_1__["PlayerListService"])); };
ProfileDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDetailsComponent, selectors: [["app-profile-details"]], inputs: { playerId: "playerId" }, decls: 16, vars: 6, consts: [[1, "nickname"], [1, "registration-date"], [1, "stats-container"], [1, "games-played"], [1, "levels-cleared"], [1, "loses"], [1, "score"], [1, "achievements-list"]], template: function ProfileDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerData.nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerData.registrationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerData.stats.gamesPlayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerData.stats.levelsCleared);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerData.stats.loses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerData.stats.score);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "1U8w":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "1y+R":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataService {
    constructor() {
        this.signedPlayerId = "";
        this.isSigned = false;
        this.isGameSaved = true;
        this.getIdFromCookie();
    }
    toggleIsSigned() {
        this.isSigned = !this.isSigned;
    }
    getIdFromCookie() {
        function getCookie(name) {
            let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        const idFromCookie = getCookie('myId');
        if (idFromCookie === undefined) {
            this.isSigned = false;
            this.signedPlayerId = "";
        }
        else {
            this.isSigned = true;
            this.signedPlayerId = idFromCookie;
        }
    }
    setCookie(name, value, options) {
        const cookieOptions = Object.assign({ path: '/' }, options);
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in cookieOptions) {
            updatedCookie += "; " + optionKey;
            let optionValue = cookieOptions[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
    deleteCookie(name) {
        this.setCookie(name, "", {
            'max-age': -1
        });
    }
    setCookieId() {
        const expiredDate = new Date(Date.now() + (1000 * 60 * 60 * 24 * 7));
        this.setCookie('myId', this.signedPlayerId, { expires: expiredDate });
    }
    deleteCookieId() {
        this.deleteCookie('myId');
    }
    toggleIsGameSaved() {
        this.isGameSaved = !this.isGameSaved;
        console.log("game is saved :", this.isGameSaved);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2Ij+":
/*!***********************************************************************!*\
  !*** ./src/app/components/level-designer/level-designer.component.ts ***!
  \***********************************************************************/
/*! exports provided: LevelDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelDesignerComponent", function() { return LevelDesignerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LevelDesignerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LevelDesignerComponent.ɵfac = function LevelDesignerComponent_Factory(t) { return new (t || LevelDesignerComponent)(); };
LevelDesignerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelDesignerComponent, selectors: [["app-level-designer"]], decls: 2, vars: 0, template: function LevelDesignerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "level-designer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXZlbC1kZXNpZ25lci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "3Rhj":
/*!************************************************!*\
  !*** ./src/app/components/game/game.module.ts ***!
  \************************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_ball_ball_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ball/ball.component */ "IfZV");
/* harmony import */ var _components_rocket_rocket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/rocket/rocket.component */ "xfsW");
/* harmony import */ var _components_brick_brick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/brick/brick.component */ "gkX6");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.component */ "opiA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GameModule {
}
GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function GameModule_Factory(t) { return new (t || GameModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], _components_ball_ball_component__WEBPACK_IMPORTED_MODULE_1__["BallComponent"], _components_rocket_rocket_component__WEBPACK_IMPORTED_MODULE_2__["RocketComponent"], _components_brick_brick_component__WEBPACK_IMPORTED_MODULE_3__["BrickComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "3jDR":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/score/components/authentication-form/authentication-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AuthenticationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationFormComponent", function() { return AuthenticationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/database/database.service */ "aX8X");
/* harmony import */ var _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/player-list/player-list.service */ "mffc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function AuthenticationFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are not authorized user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please SIGN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationFormComponent_ng_template_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationFormComponent_ng_template_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthenticationFormComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " sign up ");
} }
function AuthenticationFormComponent_ng_container_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "nickname: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthenticationFormComponent_ng_container_2_ng_template_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.nickname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.nickname);
} }
function AuthenticationFormComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthenticationFormComponent_ng_container_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.registrate(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthenticationFormComponent_ng_container_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthenticationFormComponent_ng_container_2_ng_template_4_Template, 5, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthenticationFormComponent_ng_container_2_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthenticationFormComponent_ng_container_2_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationFormComponent_ng_container_2_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sign ", ctx_r1.signType, "");
} }
class AuthenticationFormComponent {
    constructor(dataService, databaseService, playerListService) {
        this.dataService = dataService;
        this.databaseService = databaseService;
        this.playerListService = playerListService;
        this.signType = "none";
        this.authError = false;
        this.nickname = '';
        this.email = '';
        this.password = '';
    }
    registrate(model) {
        const currentEssence = this;
        if (this.signType === "in") {
            this.databaseService.isAccessGrantedPromise(model.form.value).then(function (result) {
                if (typeof result === 'string') {
                    currentEssence.dataService.signedPlayerId = result;
                    currentEssence.dataService.setCookieId();
                    currentEssence.dataService.toggleIsSigned();
                }
                else {
                    currentEssence.authError = true;
                }
            });
        }
        if (this.signType === "up") {
            currentEssence.databaseService.registrationActivity(model.form.value);
            currentEssence.dataService.signedPlayerId = model.form.value.userNickname;
            currentEssence.databaseService.getUsersSnapshotPromise().then(function (snapshot) {
                currentEssence.playerListService.playerBaseSnapshot = Object.values(snapshot.val());
            }).then(function () {
                currentEssence.dataService.setCookieId();
                currentEssence.dataService.toggleIsSigned();
            });
        }
    }
    ngOnInit() {
    }
    signIn() {
        this.signType = "in";
    }
    signUp() {
        this.signType = "up";
    }
    getSignType(condition) {
        return this.signType === condition;
    }
    cancel() {
        this.email = "";
        this.nickname = "";
        this.password = "";
        this.signType = "none";
    }
}
AuthenticationFormComponent.ɵfac = function AuthenticationFormComponent_Factory(t) { return new (t || AuthenticationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_3__["PlayerListService"])); };
AuthenticationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationFormComponent, selectors: [["app-authentication-form"]], decls: 3, vars: 2, consts: [[3, "ngSwitch"], ["ngSwitchCase", "none"], [4, "ngIf"], [1, "sign-button", 3, "click"], [1, "app--registration", 3, "ngSubmit"], ["registrationForm", "ngForm"], ["ngSwitchCase", "up"], [1, "app--registration--field"], [1, "app--registration--field-name"], ["name", "userEmail", "type", "email", "pattern", "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/", "required", "", 1, "app--registration--field-value", 3, "ngModel", "ngModelChange"], ["emailModel", "ngModel"], ["name", "userPassword", "type", "password", "required", "", 1, "app--registration--field-value", 3, "ngModel", "ngModelChange"], ["passwordModel", "ngModel"], ["type", "submit"], ["type", "reset", 3, "click"], ["name", "userNickname", "type", "text", "required", "", 1, "app--registration--field-value", 3, "ngModel", "ngModelChange"], ["nicknameModel", "ngModel"]], template: function AuthenticationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthenticationFormComponent_ng_template_1_Template, 11, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthenticationFormComponent_ng_container_2_Template, 19, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.signType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getSignType("none"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".sign-button[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  padding: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\ninput[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF1dGhlbnRpY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSx1QkFBQTtFQUNULGFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24tYnV0dG9ue2JvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDt9XHJcblxyXG5pbnB1dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "6HHA":
/*!***************************************************!*\
  !*** ./src/app/services/render/render.service.ts ***!
  \***************************************************/
/*! exports provided: RenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderService", function() { return RenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RenderService {
    constructor() {
        this.WINDOW_SIZE = window.innerWidth;
        this.canvasWidth = this.WINDOW_SIZE * 0.85;
        this.CANVAS_SIZE = {
            width: this.canvasWidth,
            height: this.canvasWidth / 2
        };
        this.BRICK_GRID = {
            columns: 20,
            rows: 20
        };
        this.brickWidth = this.canvasWidth / this.BRICK_GRID.columns;
        this.BALL_SIZE = {
            diameter: this.brickWidth / 3
        };
        this.ROCKET_SIZE = {
            width: this.brickWidth * 2,
            height: this.BALL_SIZE.diameter
        };
        this.BRICK_SIZE = {
            width: this.brickWidth,
            height: this.brickWidth / 3
        };
    }
}
RenderService.ɵfac = function RenderService_Factory(t) { return new (t || RenderService)(); };
RenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RenderService, factory: RenderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AznG":
/*!**********************************************************************************!*\
  !*** ./src/app/components/score/components/player-list/player-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/database/database.service */ "aX8X");
/* harmony import */ var _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/player-list/player-list.service */ "mffc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player/player.component */ "xk8M");





function PlayerListComponent_app_player_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 9);
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r1)("playerWinRate", player_r1.stats.levelsCleared / player_r1.stats.loses);
} }
class PlayerListComponent {
    constructor(dataBaseService, playerListService) {
        this.dataBaseService = dataBaseService;
        this.playerListService = playerListService;
        this.header = {
            nickname: "Player name",
            stats: {
                gamesPlayed: "Games played",
                score: "Max score",
                levelsCleared: "Levels passed",
            },
            playerWinRate: "Win/Lose"
        };
    }
    ngOnInit() {
    }
}
PlayerListComponent.ɵfac = function PlayerListComponent_Factory(t) { return new (t || PlayerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_2__["PlayerListService"])); };
PlayerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerListComponent, selectors: [["app-player-list"]], decls: 14, vars: 1, consts: [[1, "players-data", "score-container__players-data"], [1, "header"], [1, "header__item", "header__item_right-border", "header__item_name"], [1, "header__item", "header__item_right-border", "header__item_score"], [1, "header__item", "header__item_right-border", "header__item_levels"], [1, "header__item", "header__item_right-border", "header__item_games"], [1, "header__item", "header__item_pass-lose"], [1, "player-list"], [3, "player", "playerWinRate", 4, "ngFor", "ngForOf"], [3, "player", "playerWinRate"]], template: function PlayerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Max score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Levels cleared");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Games played");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Win/Lose rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerListComponent_app_player_13_Template, 1, 2, "app-player", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playerListService.playerBaseSnapshot);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"]], styles: [".players-data[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  border-bottom: 3px solid white;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n}\n\n.header__item_right-border[_ngcontent-%COMP%] {\n  border-right: 1px solid white;\n}\n\n.header__item_name[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30vw;\n}\n\n.header__item_score[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n\n.header__item_levels[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n\n.header__item_games[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n\n.header__item_pass-lose[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n\n.player-list[_ngcontent-%COMP%] {\n  height: calc(100% - 40px);\n  overflow-y: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFFQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFFQSw4QkFBQTtBQUZKOztBQUlJO0VBRUksaUJBQUE7QUFIUjs7QUFLUTtFQUNJLDZCQUFBO0FBSFo7O0FBTVE7RUFDSSxlQUFBO0VBRUEsV0FBQTtBQUxaOztBQVFRO0VBQ0ksV0FBQTtBQU5aOztBQVNRO0VBQ0ksV0FBQTtBQVBaOztBQVVRO0VBQ0ksV0FBQTtBQVJaOztBQVdRO0VBQ0ksV0FBQTtBQVRaOztBQWNBO0VBQ0kseUJBQUE7RUFFQSxtQkFBQTtBQVpKIiwiZmlsZSI6InBsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllcnMtZGF0YXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAmX19pdGVte1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDZweDtcclxuXHJcbiAgICAgICAgJl9yaWdodC1ib3JkZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9uYW1le1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgJl9zY29yZXtcclxuICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgJl9sZXZlbHN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICZfZ2FtZXN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICZfcGFzcy1sb3Nle1xyXG4gICAgICAgICAgICB3aWR0aDogMTB2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wbGF5ZXItbGlzdHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XHJcblxyXG4gICAgb3ZlcmZsb3cteTp2aXNpYmxlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "E9zK":
/*!***************************************************************!*\
  !*** ./src/app/components/start-menu/start-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: StartMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartMenuComponent", function() { return StartMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data/data.service */ "1y+R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function StartMenuComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx_r0.dataService.signedPlayerId, "");
} }
class StartMenuComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ngOnInit() {
    }
    signActivity() {
        if (this.dataService.isSigned === true) {
            this.dataService.toggleIsSigned();
            this.dataService.deleteCookieId();
        }
        else {
            this.router.navigate(['score/my-profile']);
        }
    }
    isSignId() {
        return this.dataService.signedPlayerId !== "";
    }
}
StartMenuComponent.ɵfac = function StartMenuComponent_Factory(t) { return new (t || StartMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StartMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartMenuComponent, selectors: [["app-start-menu"]], decls: 22, vars: 2, consts: [[1, "start-menu"], [1, "app-navigation"], ["routerLink", "/game", "routerLinkActive", "active", 1, "app-navigation--item"], ["routerLink", "/score/score-table", "routerLinkActive", "active", 1, "app-navigation--item"], ["routerLink", "/designer", "routerLinkActive", "active", 1, "app-navigation--item"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "app-navigation--item"], ["routerLink", "/rules", "routerLinkActive", "active", 1, "app-navigation--item"], ["routerLink", "/about", "routerLinkActive", "active", 1, "app-navigation--item"], [1, "start-menu__image"], [1, "sign-panel"], [4, "ngIf"], [1, "sign-button", 3, "click"]], template: function StartMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Score table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Level designer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Game rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StartMenuComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartMenuComponent_Template_div_click_20_listener() { return ctx.signActivity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.isSigned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataService.isSigned ? "Out" : "In");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".start-menu[_ngcontent-%COMP%] {\n  width: calc(89vw - 2 * 40px);\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.app-navigation[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.app-navigation--item[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-transform: uppercase;\n  font-size: 56px;\n  text-decoration: none;\n  outline: none;\n}\n\n.start-menu__image[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n}\n\n.sign-button[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  padding: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFydC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQU5SOztBQVVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFQSjs7QUFVQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQVBKIiwiZmlsZSI6InN0YXJ0LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtbWVudXtcclxuICAgIHdpZHRoOiBjYWxjKDg5dncgLSAyICogNDBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuXHJcbi5hcHAtbmF2aWdhdGlvbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuICAgICYtLWl0ZW17XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcclxuXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGFydC1tZW51X19pbWFnZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWduLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "IE6C":
/*!********************************************************************************!*\
  !*** ./src/app/components/score/components/my-profile/my-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/data/data.service */ "1y+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication-form/authentication-form.component */ "3jDR");
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-details/profile-details.component */ "0+v6");





function MyProfileComponent_app_authentication_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-authentication-form");
} }
function MyProfileComponent_app_profile_details_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-details", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playerId", ctx_r1.dataService.signedPlayerId);
} }
class MyProfileComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "playerId", 4, "ngIf"], [3, "playerId"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyProfileComponent_app_authentication_form_0_Template, 1, 0, "app-authentication-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_app_profile_details_1_Template, 1, 1, "app-profile-details", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.isSigned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.isSigned);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationFormComponent"], _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_4__["ProfileDetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "IfZV":
/*!*******************************************************************!*\
  !*** ./src/app/components/game/components/ball/ball.component.ts ***!
  \*******************************************************************/
/*! exports provided: BallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallComponent", function() { return BallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_game_data_game_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-data/game-data.service */ "l14U");
/* harmony import */ var _services_sound_sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/sound/sound.service */ "qNz0");
/* harmony import */ var _services_render_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/render/render.service */ "6HHA");




class BallComponent {
    constructor(gameDataService, sound, renderData) {
        this.gameDataService = gameDataService;
        this.sound = sound;
        this.renderData = renderData;
        // ball position and size
        this.width = this.renderData.BALL_SIZE.diameter;
        this.height = this.width;
        this.x = 0;
        this.y = 0;
        // ball speed
        this.velocity = 6;
        this.dx = 0;
        this.dy = 0;
        // ball status
        this.isReleased = false;
        // shared properties
        this.canvas = this.renderData.CANVAS_SIZE;
    }
    // launch ball from player
    jump() {
        this.dy = -this.velocity;
        this.dx = -this.velocity;
        this.isReleased = true;
    }
    // ball moving on canvas
    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
    stop() {
        this.dx = 0;
        this.dy = 0;
    }
    // checking collisions
    collide(e) {
        // re-assign position properties according to their future value
        const x = this.x + this.dx;
        const y = this.y + this.dy;
        const elementBoundaries = e.getBoundaries();
        if (((x + this.width / 2) > elementBoundaries.left) &&
            ((x + this.width / 2) < (elementBoundaries.right)) &&
            ((y + this.height / 2) > elementBoundaries.top) &&
            ((y + this.height / 2) < elementBoundaries.bottom)) {
            return true;
        }
        return false;
    }
    // ball bumped brick, adding score, removing brick
    brickBump(e) {
        this.dy *= -1;
        e.isAlive = false;
        this.gameDataService.changeScore(this.gameDataService.getCurrentScore() + 1);
        this.sound.sounds.brickBump.play();
    }
    // ball bumped canvas border
    borderBump() {
        // re-assing position properties according to their future value
        const x = this.x + this.dx;
        const y = this.y + this.dy;
        // checking border side
        // left side
        if (x < 0) {
            this.x = 0;
            this.dx = this.velocity;
            this.sound.sounds.borderBump.play();
            // right side
        }
        else if (x + this.width > this.canvas.width) {
            this.x = this.canvas.width - this.width;
            this.dx = -this.velocity;
            this.sound.sounds.borderBump.play();
            // top side
        }
        else if (y < this.renderData.BRICK_SIZE.height) {
            this.y = this.renderData.BRICK_SIZE.height;
            this.dy = this.velocity;
            //   this.data.sounds.borderBump.play();
        }
        else if ((y > this.canvas.height)) {
            this.gameDataService.changeLife(this.gameDataService.getCurrentLife() - 1);
            this.stop();
        }
    }
    // ball bumped player
    playerBump(player) {
        this.dy = -this.velocity;
        this.dx = this.onPlayerBumpSide(player) ? -this.velocity : this.velocity;
    }
    // checking the side of player when ball bumped it
    onPlayerBumpSide(player) {
        return (this.x + this.width / 2) < (player.x + this.renderData.ROCKET_SIZE.width / 2);
    }
    setStartPosition() {
        this.x = (this.renderData.CANVAS_SIZE.width - this.width) / 2;
        this.y = this.renderData.CANVAS_SIZE.height - this.renderData.ROCKET_SIZE.height - this.height;
    }
    reset() {
        this.dx = 0;
        this.dy = 0;
    }
    ngOnInit() {
    }
}
BallComponent.ɵfac = function BallComponent_Factory(t) { return new (t || BallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_data_game_data_service__WEBPACK_IMPORTED_MODULE_1__["GameDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_render_render_service__WEBPACK_IMPORTED_MODULE_3__["RenderService"])); };
BallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BallComponent, selectors: [["app-ball"]], decls: 2, vars: 0, template: function BallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ball works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "LjSU":
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SettingsService {
    constructor() {
        this.SETTINGS = {
            control: {
                rocketSpeed: 10,
                isMouseControl: false,
                isAutoGame: false
            },
            audio: {
                volume: 0.5,
                soundFX: 0.5,
                music: 0.5
            },
            graphic: {
                isPlayOnFullScreen: false
            }
        };
    }
    toggleAutoGame() {
        this.SETTINGS.control.isAutoGame = !this.SETTINGS.control.isAutoGame;
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _firebase_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.settings */ "/xh9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_render_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/render/render.service */ "6HHA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["viewportContainer"];
class AppComponent {
    constructor(render) {
        this.render = render;
    }
    ngOnInit() {
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(_firebase_settings__WEBPACK_IMPORTED_MODULE_1__["firebaseConfig"]);
    }
    ngAfterViewInit() {
        const viewportSize = this.viewportContainer.nativeElement.getBoundingClientRect();
        this.render.CANVAS_SIZE.height = viewportSize.height;
        this.render.CANVAS_SIZE.width = viewportSize.width;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_render_render_service__WEBPACK_IMPORTED_MODULE_3__["RenderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.viewportContainer = _t.first);
    } }, decls: 11, vars: 0, consts: [[1, "game-app"], [1, "game-app__information"], [1, "game-app__title"], [1, "game-app__viewport"], [1, "game-app__viewport__screen"], ["viewportContainer", ""], [1, "game-app__control"], ["routerLink", "/", "routerLinkActive", "active", 1, "game-app__control__item"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "RETRONOID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: ["@font-face {\n  font-family: \"Neon Led\";\n  src: url('NeonLedLight.ttf') format(\"truetype\");\n}\n.game-app[_ngcontent-%COMP%] {\n  background-color: #6976BF;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.game-app__title[_ngcontent-%COMP%] {\n  font-size: 62px;\n  font-family: \"Neon Led\";\n  color: red;\n  text-shadow: 4px 4px blue;\n}\n.game-app__information[_ngcontent-%COMP%] {\n  height: 8vh;\n  width: 100%;\n  border-bottom: 6px solid white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.game-app__viewport[_ngcontent-%COMP%] {\n  width: 89vw;\n  height: 100%;\n  padding: 30px;\n  border-left: 6px solid white;\n  border-right: 6px solid white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.game-app__viewport__screen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 6px solid white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.game-app__control[_ngcontent-%COMP%] {\n  height: 12vh;\n  width: 100%;\n  border-top: 6px solid white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.game-app__control__item[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-transform: uppercase;\n  font-size: 16px;\n  text-decoration: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmZvbnRzLnNjc3MiLCIuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcYXBwLmNvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FBQUE7RUFDSSx5QkNKVTtFRE1WLGFBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFUWjtBQWFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSwyQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFiUjtBQWVRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUFmWiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTmVvbiBMZWRcIjtcclxuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9OZW9uTGVkL05lb25MZWRMaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJOZW9uIExlZFwiO1xuICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvTmVvbkxlZC9OZW9uTGVkTGlnaHQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi5nYW1lLWFwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTc2QkY7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdhbWUtYXBwX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogNjJweDtcbiAgZm9udC1mYW1pbHk6IFwiTmVvbiBMZWRcIjtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggYmx1ZTtcbn1cbi5nYW1lLWFwcF9faW5mb3JtYXRpb24ge1xuICBoZWlnaHQ6IDh2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdhbWUtYXBwX192aWV3cG9ydCB7XG4gIHdpZHRoOiA4OXZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lLWFwcF9fdmlld3BvcnRfX3NjcmVlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lLWFwcF9fY29udHJvbCB7XG4gIGhlaWdodDogMTJ2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdhbWUtYXBwX19jb250cm9sX19pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59IiwiJG1haW4tY29sb3I6ICAjNjk3NkJGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjRjA4NUYyO1xyXG4kZmlyc3QtYWNjZW50OiAjMTUyMTI2O1xyXG4kc2Vjb25kLWFjY2VudDogIzMxM0I1OTtcclxuJHRoaXJkLWFjY2VudDogI0QwRDdEOTtcclxuIl19 */"] });


/***/ }),

/***/ "VB1u":
/*!*****************************************************!*\
  !*** ./src/app/components/score/score.component.ts ***!
  \*****************************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_render_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/render/render.service */ "6HHA");
/* harmony import */ var _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/player-list/player-list.service */ "mffc");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database/database.service */ "aX8X");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function ScoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { width: a0, height: a1 }; };
class ScoreComponent {
    constructor(dataService, renderService, playerListService, dataBaseService) {
        this.dataService = dataService;
        this.renderService = renderService;
        this.playerListService = playerListService;
        this.dataBaseService = dataBaseService;
        this.viewportSize = {
            height: 0,
            width: 0
        };
    }
    ngOnInit() {
        this.playersBase = this.setPlayersBase();
        this.viewportSize.height = this.renderService.CANVAS_SIZE.height;
        this.viewportSize.width = this.renderService.CANVAS_SIZE.width;
    }
    setPlayersBase() {
        const currentEssence = this;
        this.dataBaseService.getUsersSnapshotPromise().then(function (snapshot) {
            currentEssence.playerListService.playerBaseSnapshot = Object.values(snapshot.val());
        }).then(function () {
            currentEssence.playerListService.isLoading = false;
        });
    }
    updateBase() {
        this.playerListService.isLoading = true;
        this.setPlayersBase();
    }
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_render_render_service__WEBPACK_IMPORTED_MODULE_2__["RenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_3__["PlayerListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"])); };
ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["app-score"]], decls: 5, vars: 6, consts: [[1, "score-container", 3, "ngStyle"], ["class", "data-wrapper", 4, "ngIf"], [1, "players-data__update-button", 3, "click"], [4, "ngIf"], [1, "data-wrapper"], [1, "selector-container"], ["routerLink", "/score/score-table", "routerLinkActive", "active"], [1, "score-container__title"], ["routerLink", "/score/my-profile", "routerLinkActive", "active"], [1, "outlet-wrapper"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreComponent_div_1_Template, 10, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComponent_Template_div_click_2_listener() { return ctx.updateBase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScoreComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.viewportSize.width + "px", ctx.viewportSize.height + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playerListService.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playerListService.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".score-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.score-container__title[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid white;\n}\n\n.outlet-wrapper[_ngcontent-%COMP%] {\n  height: 60vh;\n  border: 1px solid white;\n}\n\n.players-data[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\n.players-data__update-button[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  padding: 8px 12px;\n  border: 1px solid white;\n  cursor: pointer;\n  margin-top: 20px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n\n.selector-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBRUEsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLHVCQUFBO0FBRko7O0FBS0E7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFFQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsaUJBQUE7RUFFQSx1QkFBQTtFQUVBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUkoiLCJmaWxlIjoic2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmUtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zY29yZS1jb250YWluZXJfX3RpdGxle1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ub3V0bGV0LXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5wbGF5ZXJzLWRhdGF7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnBsYXllcnMtZGF0YV9fdXBkYXRlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuXHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0b3ItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */", ".linkInactive[_ngcontent-%COMP%]{pointer-events : none;}"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/start-menu/start-menu.component */ "E9zK");
/* harmony import */ var _components_level_designer_level_designer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/level-designer/level-designer.component */ "2Ij+");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/settings/settings.component */ "1U8w");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_score_score_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/score/score.module */ "l9OI");
/* harmony import */ var _components_game_game_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game/game.module */ "3Rhj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _components_game_game_module__WEBPACK_IMPORTED_MODULE_8__["GameModule"],
            _components_score_score_module__WEBPACK_IMPORTED_MODULE_7__["ScoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_3__["StartMenuComponent"],
        _components_level_designer_level_designer_component__WEBPACK_IMPORTED_MODULE_4__["LevelDesignerComponent"],
        _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _components_game_game_module__WEBPACK_IMPORTED_MODULE_8__["GameModule"],
        _components_score_score_module__WEBPACK_IMPORTED_MODULE_7__["ScoreModule"]], exports: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] }); })();


/***/ }),

/***/ "aX8X":
/*!*******************************************************!*\
  !*** ./src/app/services/database/database.service.ts ***!
  \*******************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var _components_score_models_player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/score/models/player.model */ "kiW+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DatabaseService {
    constructor() {
        this.databaseRootRef = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].database().ref();
    }
    getUsersSnapshotPromise() {
        return this.databaseRootRef.child('users').get();
    }
    getUsersSecurityToken(value) {
        return this.databaseRootRef.child('security').orderByChild('email').equalTo(value).once('value');
    }
    isAccessGrantedPromise(userSecurity) {
        return this.getUsersSecurityToken(userSecurity.userEmail).then(function (snapshot) {
            const data = snapshot.val();
            return data;
        }).then(function (data) {
            if (data === null) {
                return false;
            }
            else {
                return Object.values(data)[0].id;
            }
        });
    }
    registrationActivity(registrationData) {
        this.addNewPlayerSecurity(registrationData);
        this.addNewPlayer(_components_score_models_player_model__WEBPACK_IMPORTED_MODULE_2__["Player"].createPlayer(registrationData.userNickname), registrationData.userNickname);
    }
    addNewPlayerSecurity(player) {
        this.databaseRootRef.child('security').child(player.userNickname.split(".").join("_")).set({ id: player.userNickname, email: player.userPassword, password: player.userPassword });
    }
    addNewPlayer(player, playerId) {
        this.databaseRootRef.child('users').child(playerId).set(player);
    }
    updatePlayerStats(playerId, stats) {
        const playerRef = this.databaseRootRef.child('users').child(playerId);
        const update = (new Date()).toISOString();
        const updates = {
            '/stats': stats,
            '/lastUpdate': update
        };
        return playerRef.update(updates);
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(); };
DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'platform' });


/***/ }),

/***/ "dUsC":
/*!***************************************************!*\
  !*** ./src/app/services/levels/levels.service.ts ***!
  \***************************************************/
/*! exports provided: LevelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelsService", function() { return LevelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LevelsService {
    constructor() {
        this._LEVELS_MAP = [
            [
                [],
                [],
                [],
                [],
                [],
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            ],
            [
                [],
                [],
                [],
                [],
                [],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                [],
                [],
                [],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
            ]
        ];
        this.LEVELS_MAP = [
            [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            [
                [],
                [],
                [],
                [],
                [],
                [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            ]
        ];
        this.levelsCount = this.LEVELS_MAP.length;
    }
}
LevelsService.ɵfac = function LevelsService_Factory(t) { return new (t || LevelsService)(); };
LevelsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LevelsService, factory: LevelsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gkX6":
/*!*********************************************************************!*\
  !*** ./src/app/components/game/components/brick/brick.component.ts ***!
  \*********************************************************************/
/*! exports provided: BrickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickComponent", function() { return BrickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_render_render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/render/render.service */ "6HHA");


class BrickComponent {
    constructor(renderData) {
        this.renderData = renderData;
        this.x = 0;
        this.y = 0;
        this.isAlive = false;
        this.BRICK_SPRITE = new Image(this.renderData.BRICK_SIZE.width, this.renderData.BRICK_SIZE.height);
        this.BRICK_SPRITE.src = "../../../assets/sprites/brick.png";
    }
    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    setIsAlive(value) {
        this.isAlive = value;
        return this;
    }
    getIsAlive() {
        return this.isAlive;
    }
    getBoundaries() {
        return {
            top: this.y,
            right: this.x + this.renderData.BRICK_SIZE.width,
            bottom: this.y + this.renderData.BRICK_SIZE.height,
            left: this.x,
        };
    }
    ngOnInit() {
    }
}
BrickComponent.ɵfac = function BrickComponent_Factory(t) { return new (t || BrickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_render_render_service__WEBPACK_IMPORTED_MODULE_1__["RenderService"])); };
BrickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrickComponent, selectors: [["app-brick"]], decls: 2, vars: 0, template: function BrickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brick works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmljay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "kFKE":
/*!**************************************************************************!*\
  !*** ./src/app/components/score/components/profile/profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/player-list/player-list.service */ "mffc");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/data/data.service */ "1y+R");
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-details/profile-details.component */ "0+v6");





class ProfileComponent {
    constructor(route, playerListService, dataService) {
        this.route = route;
        this.playerListService = playerListService;
        this.dataService = dataService;
        this.playerId = "";
    }
    ngOnInit() {
        this.playerId = this.getRouteId();
        // console.log(this.playerData)
        // if (this.playerId === null) {
        //   const currentEssence = this;
        //   this.dataService.signedPlayer.subscribe(function (playerId : string) {
        //     currentEssence.playerId = playerId;
        //     console.log(currentEssence.playerId, playerId)
        //   });
        // } else {
        //   this.getPlayerData();
        // }
    }
    getRouteId() {
        const result = this.route.snapshot.paramMap.get('id');
        return (result === null) ? "" : result;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_2__["PlayerListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 1, consts: [[3, "playerId"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-details", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playerId", ctx.playerId);
    } }, directives: [_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_4__["ProfileDetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "kGHS":
/*!**********************************************************!*\
  !*** ./src/app/components/score/pipes/sort/sort.pipe.ts ***!
  \**********************************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SortPipe {
    transform(value, ...args) {
        return null;
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });


/***/ }),

/***/ "kiW+":
/*!*********************************************************!*\
  !*** ./src/app/components/score/models/player.model.ts ***!
  \*********************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(nickname, registrationDate, lastUpdate, stats, achievements) {
        this.nickname = nickname;
        this.registrationDate = registrationDate;
        this.lastUpdate = lastUpdate;
        this.stats = stats;
        this.achievements = achievements;
    }
    /**
     * Creates clear new profile of Player
     * @param {string} userNickname - String value of created user nickname
     */
    static createPlayer(userNickname) {
        const creationDate = (new Date()).toISOString();
        return new Player(userNickname, creationDate, creationDate, { gamesPlayed: 0, levelsCleared: 0, loses: 0, score: 0 }, false);
    }
}


/***/ }),

/***/ "l14U":
/*!*************************************************************************!*\
  !*** ./src/app/components/game/services/game-data/game-data.service.ts ***!
  \*************************************************************************/
/*! exports provided: GameDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDataService", function() { return GameDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GameDataService {
    constructor() {
        /* In-game data variables declaration */
        this.playerStats = null;
        this.isGamePaused = true;
        this.currentLevelIndex = 0;
        /* Game session life counter declaration as Observable value */
        this.life = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](2);
        this.currentLife = this.life.asObservable();
        /* Game session score counter declaration as Observable value */
        this.score = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.currentScore = this.score.asObservable();
    }
    /* Methods for handle with player stats */
    setPlayerStats(value) {
        this.playerStats = value;
    }
    getCurrentPlayerStats() {
        return this.playerStats;
    }
    resetPlayerStats() {
        this.setPlayerStats(null);
    }
    resetLevelIndex() {
        this.currentLevelIndex = 0;
    }
    /* Methods for handle with life data */
    changeLife(life) {
        this.life.next(life);
    }
    getCurrentLife() {
        return this.life.getValue();
    }
    resetLife() {
        this.changeLife(2);
    }
    /* Methods for handle with score data */
    changeScore(score) {
        this.score.next(score);
    }
    getCurrentScore() {
        return this.score.getValue();
    }
    resetScore() {
        this.changeScore(0);
    }
    reset() {
        this.resetPlayerStats();
        this.resetLife();
        this.resetScore();
        this.resetLevelIndex();
    }
}
GameDataService.ɵfac = function GameDataService_Factory(t) { return new (t || GameDataService)(); };
GameDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameDataService, factory: GameDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "l9OI":
/*!**************************************************!*\
  !*** ./src/app/components/score/score.module.ts ***!
  \**************************************************/
/*! exports provided: ScoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreModule", function() { return ScoreModule; });
/* harmony import */ var _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/player-list/player-list.service */ "mffc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/sort/sort.pipe */ "kGHS");
/* harmony import */ var _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/search/search.pipe */ "nAaA");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/player/player.component */ "xk8M");
/* harmony import */ var _score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score.component */ "VB1u");
/* harmony import */ var _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/player-list/player-list.component */ "AznG");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/database/database.service */ "aX8X");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "kFKE");
/* harmony import */ var _components_authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/authentication-form/authentication-form.component */ "3jDR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "IE6C");
/* harmony import */ var _components_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile-details/profile-details.component */ "0+v6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class ScoreModule {
}
ScoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ScoreModule });
ScoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function ScoreModule_Factory(t) { return new (t || ScoreModule)(); }, providers: [
        _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_0__["PlayerListService"],
        _services_database_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ScoreModule, { declarations: [_pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"],
        _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"],
        _score_component__WEBPACK_IMPORTED_MODULE_6__["ScoreComponent"],
        _components_player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
        _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__["PlayerListComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _components_authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_10__["AuthenticationFormComponent"],
        _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_12__["MyProfileComponent"],
        _components_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_13__["ProfileDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]], exports: [_score_component__WEBPACK_IMPORTED_MODULE_6__["ScoreComponent"]] }); })();


/***/ }),

/***/ "mffc":
/*!*************************************************************!*\
  !*** ./src/app/services/player-list/player-list.service.ts ***!
  \*************************************************************/
/*! exports provided: PlayerListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListService", function() { return PlayerListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlayerListService {
    constructor() {
        this.isLoading = true;
        this.playerBaseSnapshot = null;
    }
    getPlayer(id) {
        return this.playerBaseSnapshot.filter((item) => item.nickname === id)[0];
    }
}
PlayerListService.ɵfac = function PlayerListService_Factory(t) { return new (t || PlayerListService)(); };
PlayerListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerListService, factory: PlayerListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nAaA":
/*!**************************************************************!*\
  !*** ./src/app/components/score/pipes/search/search.pipe.ts ***!
  \**************************************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchPipe {
    transform(value, ...args) {
        return null;
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ }),

/***/ "opiA":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _components_brick_brick_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/brick/brick.component */ "gkX6");
/* harmony import */ var _components_rocket_rocket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rocket/rocket.component */ "xfsW");
/* harmony import */ var _components_ball_ball_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ball/ball.component */ "IfZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_game_data_game_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/game-data/game-data.service */ "l14U");
/* harmony import */ var _services_render_render_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/render/render.service */ "6HHA");
/* harmony import */ var _services_levels_levels_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/levels/levels.service */ "dUsC");
/* harmony import */ var _services_sound_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/sound/sound.service */ "qNz0");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/settings/settings.service */ "LjSU");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/player-list/player-list.service */ "mffc");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/database/database.service */ "aX8X");












const _c0 = ["canvasField"];
class GameComponent {
    constructor(gameDataService, renderData, levelsService, soundService, settingsService, renderer, dataService, playerListService, databaseService) {
        this.gameDataService = gameDataService;
        this.renderData = renderData;
        this.levelsService = levelsService;
        this.soundService = soundService;
        this.settingsService = settingsService;
        this.renderer = renderer;
        this.dataService = dataService;
        this.playerListService = playerListService;
        this.databaseService = databaseService;
        this.MESSAGES = {
            "win": {
                text: "CONGRATULATIONS",
                fontSize: 74
            },
            "lose": {
                text: "GAME OVER",
                fontSize: 74
            }
        };
        this.width = this.renderData.CANVAS_SIZE.width;
        this.height = this.renderData.CANVAS_SIZE.height;
        this.rows = this.renderData.BRICK_GRID.rows;
        this.cols = this.renderData.BRICK_GRID.columns;
        this.isGameActive = true;
        this.isGamePaused = false;
        this.bricksArray = [];
        this.ballsArray = [];
        this.rocket = new _components_rocket_rocket_component__WEBPACK_IMPORTED_MODULE_1__["RocketComponent"](this.settingsService, this.renderData);
    }
    ngOnInit() {
        this.loadSprites();
        this.addBall();
        this.addKeyListener();
        this.setPlayerStats();
    }
    ngAfterViewInit() {
        const currentEssence = document.querySelector("app-game");
        // if (!document.fullscreenElement) {
        //     currentEssence!.requestFullscreen().catch(err => {
        //     alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        //   });
        // } else {
        //   document.exitFullscreen();
        // }
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx.fillStyle = '#fff';
        this.start();
        this.render();
    }
    ngOnDestroy() {
        this.soundService.sounds.gameStart.stop();
        this.clearSessionData();
    }
    /**
     * Starts the game
     */
    start() {
        this.rocket.setStartPosition();
        this.ballsArray[0].setStartPosition();
        this.createBricks();
        this.run();
    }
    /**
     * Restart the game
     */
    restart() {
        this.isGameActive = true;
        this.isGamePaused = false;
        this.gameDataService.resetLife();
        this.gameDataService.resetScore();
        this.restorePosition();
        // re-creating bricks
        this.bricksArray = [];
        this.createBricks();
        this.run();
    }
    /**
     * Starts loop for rendering and calculate game
     */
    run() {
        //run game if it's running or restarting
        if ((this.isGameActive === true)) {
            this.update();
            this.render();
            // loop running
            requestAnimationFrame(() => {
                this.run();
            });
        }
    }
    /**
     * Add another ball to ball array
     */
    addBall() {
        this.ballsArray.push(new _components_ball_ball_component__WEBPACK_IMPORTED_MODULE_2__["BallComponent"](this.gameDataService, this.soundService, this.renderData));
    }
    /**
     * Create Brick components at game field
     */
    createBricks() {
        /**
         * Fills row with bricks by level map
         *
         * @param {array} arr - Row array of level map
         * @param {number} row - Current number of row
         * @param {GameComponent} currentEssence - Link to current class GameComponent
         */
        function fillRow(arr, row, currentEssence) {
            const brickSize = currentEssence.renderData.BRICK_SIZE;
            for (let col = 0; col < arr.length; col++) {
                const brick = new _components_brick_brick_component__WEBPACK_IMPORTED_MODULE_0__["BrickComponent"](currentEssence.renderData);
                const arraySize = currentEssence.bricksArray.push(brick);
                const x = (brickSize.width * col);
                const y = (brickSize.height * (row + 1));
                currentEssence.bricksArray[arraySize - 1].setCoordinates(x, y).setIsAlive(Boolean(arr[col]));
            }
        }
        const levelMap = this.levelsService.LEVELS_MAP[this.gameDataService.currentLevelIndex];
        const rowCount = 20;
        for (let row = 0; row < rowCount; row++) {
            let currentRow = levelMap[row];
            if ((currentRow === undefined) || (currentRow.length === 0)) {
                currentRow = new Array(20).fill(0);
            }
            fillRow(currentRow, row, this);
        }
    }
    /**
     * Restore position of ball and rocket
     */
    restorePosition() {
        // setting inital values for ball
        this.ballsArray = [];
        this.addBall();
        this.ballsArray[0].setStartPosition();
        this.ballsArray[0].reset();
        // setting initial values for player
        this.rocket.setStartPosition();
        this.rocket.ball.isOnPlayer = true;
    }
    /**
     * Render game canvas
     */
    render() {
        const currentEssence = this;
        /**
         * Clear canvas field
         */
        function clearCanvas() {
            currentEssence.ctx.clearRect(0, 0, currentEssence.width, currentEssence.height);
        }
        /**
         * Render in-game data (score and lives)
         */
        function renderDataField() {
            const brickSizes = currentEssence.renderData.BRICK_SIZE;
            const textHeight = brickSizes.height - 2;
            currentEssence.ctx.fillStyle = "black";
            currentEssence.ctx.fillRect(0, 0, currentEssence.width, brickSizes.height);
            currentEssence.ctx.fillStyle = "white";
            currentEssence.ctx.font = brickSizes.height + "px bold";
            currentEssence.ctx.fillText("Score: " + currentEssence.gameDataService.getCurrentScore(), (brickSizes.width / 2), textHeight);
            currentEssence.ctx.fillText("Lives: " + currentEssence.gameDataService.getCurrentLife(), (brickSizes.width * 18), textHeight);
            if (currentEssence.isGamePaused === true) {
                currentEssence.ctx.fillText("-Game is paused-", (brickSizes.width * 8), textHeight);
            }
        }
        /**
         * Render rocket sprite
         */
        function drawRocket() {
            currentEssence.ctx.drawImage(currentEssence.rocketSprite, currentEssence.rocket.x, currentEssence.rocket.y, currentEssence.renderData.ROCKET_SIZE.width, currentEssence.renderData.ROCKET_SIZE.height);
        }
        /**
         * Render ball sprite
         */
        function drawBall() {
            currentEssence.ctx.drawImage(currentEssence.ballSprite, currentEssence.ballsArray[0].x, currentEssence.ballsArray[0].y, currentEssence.renderData.BALL_SIZE.diameter, currentEssence.renderData.BALL_SIZE.diameter);
        }
        /**
         * Rendering bricks according to its 'isAlive' property
         */
        function drawBricks() {
            currentEssence.bricksArray.forEach(function (e) {
                if (e.isAlive) {
                    currentEssence.ctx.drawImage(e.BRICK_SPRITE, e.x, e.y, currentEssence.renderData.BRICK_SIZE.width, currentEssence.renderData.BRICK_SIZE.height);
                }
            });
        }
        /**
         * Clear rectangular on canvas for showing message
         */
        function clearMessageField() {
            const brickSize = currentEssence.renderData.BRICK_SIZE;
            currentEssence.ctx.clearRect((brickSize.width * 5), (brickSize.height * 8), (brickSize.width * 10), (brickSize.height * 6));
        }
        /**
         * Render in-game message on canvas
         * @param message {string} - Text of in-game message
         */
        function renderMessage(message) {
            const brickSize = currentEssence.renderData.BRICK_SIZE;
            currentEssence.ctx.font = message.fontSize + " bold";
            currentEssence.ctx.fillText(message.text, (brickSize.width * 7), (brickSize.height * 12));
        }
        /**
         * Render message on game lose
         */
        function isGameLose() {
            if (currentEssence.gameDataService.getCurrentLife() === 0) {
                clearMessageField();
                renderMessage(currentEssence.MESSAGES.lose);
                currentEssence.isGameActive = false;
                if (currentEssence.gameDataService.playerStats !== null) {
                    currentEssence.gameDataService.playerStats.loses++;
                    currentEssence.gameDataService.playerStats.gamesPlayed++;
                    currentEssence.updateDB();
                }
            }
        }
        /**
         * Render message if all levels passed
         */
        function isGameWin() {
            if (currentEssence.gameDataService.currentLevelIndex === currentEssence.levelsService.levelsCount) {
                clearMessageField();
                renderMessage(currentEssence.MESSAGES.win);
                currentEssence.isGameActive = false;
            }
        }
        /*
            Calling render functions
        */
        clearCanvas();
        renderDataField();
        drawRocket();
        drawBall();
        drawBricks();
        isGameLose();
        isGameWin();
    }
    /**
     * Detect any changes
     */
    update() {
        const currentEssence = this;
        /**
         * Handle changes stranded with rocket
         */
        function rocketHandle() {
            if (currentEssence.rocket.dx) {
                currentEssence.rocket.move();
            }
        }
        /**
         * Handle changes stranded with balls
         */
        function ballsHandle() {
            if (currentEssence.ballsArray[0].dx) {
                currentEssence.ballsArray[0].move();
            }
            currentEssence.ballsArray[0].borderBump();
            if (currentEssence.ballsArray[0].collide(currentEssence.rocket) === true) {
                currentEssence.ballsArray[0].playerBump(currentEssence.rocket);
            }
        }
        /**
         * Handle changes stranded with bricks
         */
        function bricksHandle() {
            currentEssence.bricksArray.forEach((el) => {
                // only if it's alive
                if (el.isAlive) {
                    if (currentEssence.ballsArray[0].collide(el)) {
                        currentEssence.ballsArray[0].brickBump(el);
                    }
                }
            });
            const aliveBricksCount = currentEssence.bricksArray.filter(function (item) { return (item.getIsAlive() === true); }).length;
            if (aliveBricksCount === 0) {
                if (currentEssence.gameDataService.currentLevelIndex < currentEssence.levelsService.levelsCount) {
                    currentEssence.gameDataService.currentLevelIndex++;
                    if (currentEssence.gameDataService.playerStats !== null) {
                        currentEssence.gameDataService.playerStats.levelsCleared++;
                        currentEssence.updateDB();
                    }
                    currentEssence.restorePosition();
                    currentEssence.start();
                }
            }
        }
        /**
         * Handle in-game changes stranded with cheat activation
         */
        function cheatsHandle() {
            if (currentEssence.settingsService.SETTINGS.control.isAutoGame === true) {
                currentEssence.rocket.x = currentEssence.ballsArray[0].x + (currentEssence.renderData.BALL_SIZE.diameter / 2) - (currentEssence.renderData.ROCKET_SIZE.width / 2);
            }
        }
        /* if (this.isGameActive === false && this.gameDataService.getCurrentLife() >= 0) {
                this.ballsArray[0].setStartPosition();
                this.rocket.setStartPosition();
                this.ballsArray[0].isReleased = false;
                this.rocket.ball.isOnPlayer = true;
                this.isGameActive = true;
        } */
        /*
            Call sub functions
        */
        rocketHandle();
        ballsHandle();
        bricksHandle();
        cheatsHandle();
    }
    /**
     * Load in-Game sprites
     */
    loadSprites() {
        this.rocketSprite = new Image();
        this.rocketSprite.src = "../../../assets/sprites/player.png";
        this.ballSprite = new Image();
        this.ballSprite.src = "../../../assets/sprites/ball.png";
    }
    /**
     * Bind key activities
     */
    addKeyListener() {
        const keyCodes = {
            leftArrow: 37,
            rightArrow: 39,
            spacebar: 32,
            aKey: 65,
            rKey: 82,
            esc: 27,
            enter: 13
        };
        const currentEssence = this;
        /**
         * Listening to activity with left and right arrows
         */
        function onKeyMovement() {
            currentEssence.renderer.listen('document', 'keydown', (e) => {
                if (currentEssence.isGamePaused === false) {
                    //to left
                    if (e.keyCode === keyCodes.leftArrow) {
                        currentEssence.rocket.dx = -currentEssence.rocket.velocity;
                        // check if ball is on player
                        if (currentEssence.rocket.ball.isOnPlayer === true) {
                            currentEssence.ballsArray[0].dx = currentEssence.rocket.dx;
                        }
                        // to right
                    }
                    else if (e.keyCode === keyCodes.rightArrow) {
                        currentEssence.rocket.dx = currentEssence.rocket.velocity;
                        if (currentEssence.rocket.ball.isOnPlayer === true) {
                            currentEssence.rocket.dx = currentEssence.rocket.dx;
                        }
                    }
                }
            });
            currentEssence.renderer.listen('document', 'keyup', (e) => {
                if (currentEssence.isGamePaused === false) {
                    if ((e.keyCode === keyCodes.leftArrow) || (e.keyCode === keyCodes.rightArrow)) {
                        currentEssence.rocket.stop();
                        if (currentEssence.rocket.ball.isOnPlayer) {
                            currentEssence.ballsArray[0].stop();
                        }
                    }
                }
            });
        }
        /**
         * Listening to activity with spacebar
         */
        function onSpacebar() {
            if (currentEssence.isGamePaused === false) {
                currentEssence.renderer.listen('document', 'keydown', (e) => {
                    // launch the ball when game is running and ball is on player (space)
                    if ((e.keyCode === keyCodes.spacebar) && (currentEssence.isGamePaused === false) && (currentEssence.rocket.ball.isOnPlayer === true)) {
                        currentEssence.ballsArray[0].jump();
                        currentEssence.soundService.sounds.gameStart.play();
                        currentEssence.rocket.ball.isOnPlayer = false;
                    }
                });
            }
        }
        function onEscKey() {
            currentEssence.renderer.listen('document', 'keydown', (e) => {
                if ((e.keyCode === keyCodes.esc)) {
                    currentEssence.toggleGamePause();
                }
            });
        }
        /**
         * Listening to activity with R key
         */
        function onRKey() {
            if (currentEssence.isGamePaused === false) {
                currentEssence.renderer.listen('document', 'keydown', (e) => {
                    if (e.keyCode === keyCodes.rKey) {
                        currentEssence.restart();
                    }
                });
            }
        }
        /**
         * Listening to activity with A key
         */
        function onAKey() {
            if (currentEssence.isGamePaused === false) {
                currentEssence.renderer.listen('document', 'keydown', (e) => {
                    if (e.keyCode === keyCodes.aKey) {
                        currentEssence.settingsService.toggleAutoGame();
                    }
                });
            }
        }
        /*
            Calling all listeners functions
        */
        onKeyMovement();
        onSpacebar();
        onRKey();
        onAKey();
        onEscKey();
    }
    clearSessionData() {
        this.gameDataService.reset();
    }
    /**
     * Set player stats at game service if player signed in
     */
    setPlayerStats() {
        if (this.dataService.isSigned === true) {
            if (this.playerListService.playerBaseSnapshot === null) {
            }
            else {
                const playerData = this.playerListService.getPlayer(this.dataService.signedPlayerId);
                const playerStats = playerData.stats;
                this.gameDataService.setPlayerStats(playerStats);
            }
        }
        else {
            this.gameDataService.setPlayerStats(null);
        }
    }
    /**
     * Update linked database on critical game changes
     */
    updateDB() {
        const sessionGameStats = this.gameDataService.playerStats;
        if (sessionGameStats !== null) {
            const currentEssence = this;
            const playerId = this.dataService.signedPlayerId;
            const sessionScore = this.gameDataService.getCurrentScore();
            const updatedStats = {
                gamesPlayed: sessionGameStats.gamesPlayed,
                levelsCleared: sessionGameStats.levelsCleared,
                loses: sessionGameStats.loses,
                score: (sessionScore > sessionGameStats.score) ? sessionScore : sessionGameStats.score
            };
            this.dataService.toggleIsGameSaved();
            this.databaseService.updatePlayerStats(playerId, updatedStats).then(currentEssence.dataService.toggleIsGameSaved());
        }
    }
    /**
     * Toggle isGamePaused value
     */
    toggleGamePause() {
        this.isGamePaused = !this.isGamePaused;
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_game_data_game_data_service__WEBPACK_IMPORTED_MODULE_4__["GameDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_render_render_service__WEBPACK_IMPORTED_MODULE_5__["RenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_levels_levels_service__WEBPACK_IMPORTED_MODULE_6__["LevelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sound_sound_service__WEBPACK_IMPORTED_MODULE_7__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_player_list_player_list_service__WEBPACK_IMPORTED_MODULE_10__["PlayerListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_11__["DatabaseService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 3, vars: 2, consts: [[1, "canvas-viewport", "game-field__canvas-viewport"], [1, "canvas-viewport__canvas", 3, "width", "height"], ["canvasField", ""]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("height", ctx.height);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "qNz0":
/*!*************************************************!*\
  !*** ./src/app/services/sound/sound.service.ts ***!
  \*************************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SoundService {
    constructor() {
        this.sounds = {
            backgroundMusic: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../../assets/sounds/backgroundMusic.mp3'],
                loop: true,
                volume: 0.2
            }),
            gameStart: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/gameStart.ogg'],
                volume: 0.2
            }),
            brickBump: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/brickBump.wav'],
                volume: 0.2
            }),
            playerBump: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/playerBump.wav'],
                volume: 0.2
            }),
            borderBump: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/playerBump.wav'],
                volume: 0.2
            }),
            gameOver: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/gameOver.wav'],
                volume: 0.2
            }),
            youWin: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/youWin.wav'],
                volume: 0.2
            })
        };
    }
}
SoundService.ɵfac = function SoundService_Factory(t) { return new (t || SoundService)(); };
SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_score_components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/score/components/player-list/player-list.component */ "AznG");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/settings/settings.component */ "1U8w");
/* harmony import */ var _components_level_designer_level_designer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/level-designer/level-designer.component */ "2Ij+");
/* harmony import */ var _components_score_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/score/score.component */ "VB1u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/start-menu/start-menu.component */ "E9zK");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game/game.component */ "opiA");
/* harmony import */ var _components_score_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/score/components/profile/profile.component */ "kFKE");
/* harmony import */ var _components_score_components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/score/components/my-profile/my-profile.component */ "IE6C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: "", component: _components_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_6__["StartMenuComponent"] },
    { path: "game", component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"] },
    {
        path: "score",
        component: _components_score_score_component__WEBPACK_IMPORTED_MODULE_4__["ScoreComponent"],
        children: [
            {
                path: "score-table",
                component: _components_score_components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_0__["PlayerListComponent"]
            },
            {
                path: "my-profile",
                component: _components_score_components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__["MyProfileComponent"]
            },
            {
                path: ":id",
                component: _components_score_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
            }
        ]
    },
    { path: "designer", component: _components_level_designer_level_designer_component__WEBPACK_IMPORTED_MODULE_3__["LevelDesignerComponent"] },
    { path: "settings", component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
    { path: "about", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();


/***/ }),

/***/ "xfsW":
/*!***********************************************************************!*\
  !*** ./src/app/components/game/components/rocket/rocket.component.ts ***!
  \***********************************************************************/
/*! exports provided: RocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketComponent", function() { return RocketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/settings/settings.service */ "LjSU");
/* harmony import */ var _services_render_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/render/render.service */ "6HHA");



class RocketComponent {
    constructor(settings, renderData) {
        this.settings = settings;
        this.renderData = renderData;
        // player position and size
        this.x = 0;
        this.y = 0;
        // player speed
        this.velocity = this.settings.SETTINGS.control.rocketSpeed;
        this.dx = 0;
        // shared properties
        this.ball = {
            isOnPlayer: true
        };
    }
    getBoundaries() {
        return {
            top: this.y,
            right: this.x + this.renderData.ROCKET_SIZE.width,
            bottom: this.y + this.renderData.ROCKET_SIZE.height,
            left: this.x,
        };
    }
    // move player if it is not outside the game
    move() {
        if (((this.x + this.dx) > 0) && ((this.x + this.dx) < (this.renderData.CANVAS_SIZE.width - this.renderData.ROCKET_SIZE.width))) {
            this.x += this.dx;
        }
    }
    // stop player
    stop() {
        this.dx = 0;
    }
    setStartPosition() {
        this.x = (this.renderData.CANVAS_SIZE.width - this.renderData.ROCKET_SIZE.width) / 2;
        this.y = this.renderData.CANVAS_SIZE.height - this.renderData.ROCKET_SIZE.height;
    }
    ngOnInit() {
    }
}
RocketComponent.ɵfac = function RocketComponent_Factory(t) { return new (t || RocketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_render_render_service__WEBPACK_IMPORTED_MODULE_2__["RenderService"])); };
RocketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RocketComponent, selectors: [["app-rocket"]], decls: 2, vars: 0, template: function RocketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rocket works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2NrZXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "xk8M":
/*!************************************************************************!*\
  !*** ./src/app/components/score/components/player/player.component.ts ***!
  \************************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PlayerComponent {
    constructor() {
        this.playerData = null;
        this.updateUserInterval = null;
        this.playerWinRate = 0;
        this.isActive = false;
    }
    set player(player) {
        this.playerData = player;
    }
    get player() {
        return this.playerData;
    }
    ngOnInit() {
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], inputs: { player: "player", playerWinRate: "playerWinRate", isActive: "isActive" }, decls: 11, vars: 6, consts: [[1, "player-container"], [1, "player-container__item", "player-container__item_right-border", "player-container__name", 3, "routerLink"], [1, "player-container__item", "player-container__item_right-border", "player-container__score"], [1, "player-container__item", "player-container__item_right-border", "player-container__levels"], [1, "player-container__item", "player-container__item_right-border", "player-container__games"], [1, "player-container__item", "player-container__pass-lose"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/score/", ctx.player.nickname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.nickname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.stats.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.stats.levelsCleared);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.stats.gamesPlayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playerWinRate);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".player-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  border-bottom: 1px solid white;\n}\n.player-container__item[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n}\n.player-container__item_right-border[_ngcontent-%COMP%] {\n  border-right: 1px solid white;\n}\n.player-container__name[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30vw;\n}\n.player-container__score[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n.player-container__levels[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n.player-container__games[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n.player-container__pass-lose[_ngcontent-%COMP%] {\n  width: 10vw;\n}\n.player-container__name[_ngcontent-%COMP%]:hover {\n  color: #bfff8a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLDhCQUFBO0FBREo7QUFHSTtFQUVJLGlCQUFBO0FBRlI7QUFJUTtFQUNJLDZCQUFBO0FBRlo7QUFNSTtFQUNJLGVBQUE7RUFFQSxXQUFBO0FBTFI7QUFRSTtFQUNJLFdBQUE7QUFOUjtBQVNJO0VBQ0ksV0FBQTtBQVBSO0FBVUk7RUFDSSxXQUFBO0FBUlI7QUFXSTtFQUNJLFdBQUE7QUFUUjtBQWFBO0VBQ0ksY0FBQTtBQVZKIiwiZmlsZSI6InBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgICZfX2l0ZW17XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNnB4O1xyXG5cclxuICAgICAgICAmX3JpZ2h0LWJvcmRlcntcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX25hbWV7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMzB2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19zY29yZXtcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19sZXZlbHN7XHJcbiAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZ2FtZXN7XHJcbiAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcGFzcy1sb3Nle1xyXG4gICAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGxheWVyLWNvbnRhaW5lcl9fbmFtZTpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMTkxLCAyNTUsIDEzOCk7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map