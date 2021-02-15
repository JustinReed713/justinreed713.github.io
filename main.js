(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GIT\Dzmitry-Salauyou-Tasks\angular-project\src\main.ts */"zUnb");


/***/ }),

/***/ "42F4":
/*!**************************************!*\
  !*** ./src/app/services/services.ts ***!
  \**************************************/
/*! exports provided: DataService, LevelsService, RenderService, ScoreService, SettingsService, SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _levels_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels.service */ "9uXe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LevelsService", function() { return _levels_service__WEBPACK_IMPORTED_MODULE_0__["LevelsService"]; });

/* harmony import */ var _render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.service */ "OyN4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderService", function() { return _render_service__WEBPACK_IMPORTED_MODULE_1__["RenderService"]; });

/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.service */ "gLg0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return _score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]; });

/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound.service */ "V9p5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return _sound_service__WEBPACK_IMPORTED_MODULE_3__["SoundService"]; });

/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]; });

/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.service */ "6nr9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]; });










/***/ }),

/***/ "6nr9":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
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
                isAutoGame: true
            },
            audio: {
                volume: 0.5,
                soundFX: 0.5,
                music: 0.5
            }
        };
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9uXe":
/*!********************************************!*\
  !*** ./src/app/services/levels.service.ts ***!
  \********************************************/
/*! exports provided: LevelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelsService", function() { return LevelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LevelsService {
    constructor() {
        this.LEVELS_MAP = {
            "1": [
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
            ]
        };
    }
}
LevelsService.ɵfac = function LevelsService_Factory(t) { return new (t || LevelsService)(); };
LevelsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LevelsService, factory: LevelsService.ɵfac, providedIn: 'root' });


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

/***/ "E/ma":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-window/game-window.component.ts ***!
  \*****************************************************************/
/*! exports provided: GameWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameWindowComponent", function() { return GameWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _score_count_score_count_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score-count/score-count.component */ "zQct");
/* harmony import */ var _life_count_life_count_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../life-count/life-count.component */ "sI+z");
/* harmony import */ var _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-field/game-field.component */ "HHBf");




const _c0 = ["class", "game-app"];
class GameWindowComponent {
    ngOnInit() {
    }
}
GameWindowComponent.ɵfac = function GameWindowComponent_Factory(t) { return new (t || GameWindowComponent)(); };
GameWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameWindowComponent, selectors: [["", 8, "game-app"]], attrs: _c0, decls: 5, vars: 0, consts: [[1, "game-window"], [1, "game-information", "game-window__game-information"], [1, "game-information__game-score"], [1, "game-information__life-counter"], [1, "game-field", "game-window__game-field"]], template: function GameWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_score_count_score_count_component__WEBPACK_IMPORTED_MODULE_1__["ScoreCountComponent"], _life_count_life_count_component__WEBPACK_IMPORTED_MODULE_2__["LifeCountComponent"], _game_field_game_field_component__WEBPACK_IMPORTED_MODULE_3__["GameFieldComponent"]], styles: [".game-window[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.game-window__game-information[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  border-bottom: 6px solid white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLXdpbmRvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUZSIiwiZmlsZSI6ImdhbWUtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtd2luZG93IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJl9fZ2FtZS1pbmZvcm1hdGlvbntcclxuICAgICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        this.life = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](2);
        this.currentLife = this.life.asObservable();
        this.isGameActive = false;
    }
    changeLife(life) {
        this.life.next(life);
    }
    getCurrentLife() {
        return this.life.getValue();
    }
    resetLife() {
        this.changeLife(2);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HHBf":
/*!***************************************************************!*\
  !*** ./src/app/components/game-field/game-field.component.ts ***!
  \***************************************************************/
/*! exports provided: GameFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFieldComponent", function() { return GameFieldComponent; });
/* harmony import */ var src_app_components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components */ "p6OY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services */ "42F4");



const _c0 = ["canvasField"];
const _c1 = ["class", "game-window__game-field"];
class GameFieldComponent {
    constructor(data, renderData, levels, score, sound, settings, 
    //private life: LifeService,
    renderer) {
        this.data = data;
        this.renderData = renderData;
        this.levels = levels;
        this.score = score;
        this.sound = sound;
        this.settings = settings;
        this.renderer = renderer;
        this.MESSAGES = {
            "start": {
                text: [
                    "Use left and right arrow buttons to move rocket.",
                    "To launch ball press SPACE.",
                    "To restart game press R.",
                    "Press ENTER to close this message and start game."
                ],
                fontSize: "32px"
            },
            "win": {
                text: "CONGRATULATIONS",
                fontSize: "74px"
            },
            "loose": {
                text: "GAME OVER",
                fontSize: "74px"
            }
        };
        this.width = this.renderData.CANVAS_SIZE.width;
        this.height = this.renderData.CANVAS_SIZE.height;
        this.rows = this.renderData.BRICK_GRID.rows;
        this.cols = this.renderData.BRICK_GRID.columns;
        this.COMPONENTS = {
            rocket: new src_app_components_components__WEBPACK_IMPORTED_MODULE_0__["RocketComponent"](this.settings, this.renderData),
            balls: [],
            bricks: []
        };
        this.scoreComponent = new src_app_components_components__WEBPACK_IMPORTED_MODULE_0__["ScoreCountComponent"](this.score);
        this.lifeCounterComponent = new src_app_components_components__WEBPACK_IMPORTED_MODULE_0__["LifeCountComponent"](this.data);
        this.restarting = true;
        this.gameStarted = false;
    }
    create() {
        const levelMap = this.levels.LEVELS_MAP["1"];
        const rowCount = 20;
        for (let row = 0; row < rowCount; row++) {
            let currentRow = levelMap[row];
            if ((currentRow === undefined) || (currentRow.length === 0)) {
                currentRow = new Array(20).fill(0);
            }
            fillRow(currentRow, row, this);
        }
        function fillRow(arr, row, object) {
            for (let col = 0; col < arr.length; col++) {
                let arraySize = object.COMPONENTS.bricks.push(new src_app_components_components__WEBPACK_IMPORTED_MODULE_0__["BrickComponent"](object.renderData));
                const x = (object.renderData.BRICK_SIZE.width * col);
                const y = (object.renderData.BRICK_SIZE.height * row);
                object.COMPONENTS.bricks[arraySize - 1].setCoordinates(x, y);
                object.COMPONENTS.bricks[arraySize - 1].setIsAlive(Boolean(arr[col]));
            }
        }
    }
    restart() {
        this.data.isGameActive = true;
        this.data.resetLife();
        // setting intial game settings
        this.score.resetScore();
        this.run();
        // setting inital values for ball
        this.COMPONENTS.balls[0].setStartPosition();
        this.COMPONENTS.balls[0].dx = 0;
        this.COMPONENTS.balls[0].dy = 0;
        // setting initial values for player
        this.COMPONENTS.rocket.setStartPosition();
        this.COMPONENTS.rocket.ball.isOnPlayer = true;
        // re-creating bricks
        this.COMPONENTS.bricks = [];
        this.create();
        this.restarting = true;
    }
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.rocketSprite, this.COMPONENTS.rocket.x, this.COMPONENTS.rocket.y, this.renderData.ROCKET_SIZE.width, this.renderData.ROCKET_SIZE.height);
        this.ctx.drawImage(this.ballSprite, this.COMPONENTS.balls[0].x, this.COMPONENTS.balls[0].y, this.renderData.BALL_SIZE.diameter, this.renderData.BALL_SIZE.diameter);
        // bricks rendering according to its 'isAlive' property
        this.COMPONENTS.bricks.forEach(function (e) {
            if (e.isAlive) {
                this.ctx.drawImage(e.BRICK_SPRITE, e.x, e.y, this.renderData.BRICK_SIZE.width, this.renderData.BRICK_SIZE.height);
            }
        }, this);
        if (this.data.getCurrentLife() === 0) {
            this.ctx.clearRect(this.renderData.BRICK_SIZE.width * 5, (this.renderData.BRICK_SIZE.height * 8), (this.renderData.BRICK_SIZE.width * 10), this.renderData.BRICK_SIZE.height * 6);
            this.ctx.font = this.MESSAGES.loose.fontSize + " bold";
            this.ctx.fillText(this.MESSAGES.loose.text, this.renderData.BRICK_SIZE.width * 7, (this.renderData.BRICK_SIZE.height * 12));
            this.gameStarted = false;
            this.data.isGameActive = false;
        }
        if ((this.COMPONENTS.bricks.filter(item => item.getIsAlive()).length === 0) && this.gameStarted === true) {
            this.ctx.clearRect(this.renderData.BRICK_SIZE.width * 5, (this.renderData.BRICK_SIZE.height * 8), (this.renderData.BRICK_SIZE.width * 10), this.renderData.BRICK_SIZE.height * 6);
            this.ctx.font = this.MESSAGES.win.fontSize + " bold";
            this.ctx.fillText(this.MESSAGES.win.text, this.renderData.BRICK_SIZE.width * 7, (this.renderData.BRICK_SIZE.height * 12));
            this.data.isGameActive = false;
        }
    }
    /*  */
    // start game
    start() {
        this.COMPONENTS.balls[0].setStartPosition();
        this.COMPONENTS.rocket.setStartPosition();
        this.create();
        this.run();
    }
    // detect changes
    update() {
        // move player if it has speed
        if (this.COMPONENTS.rocket.dx) {
            this.COMPONENTS.rocket.move();
        }
        if (this.COMPONENTS.balls[0].dx) {
            this.COMPONENTS.balls[0].move();
        }
        this.COMPONENTS.balls[0].borderBump();
        if (this.COMPONENTS.balls[0].collide(this.COMPONENTS.rocket) === true) {
            this.COMPONENTS.balls[0].playerBump(this.COMPONENTS.rocket);
        }
        // checking if ball collide with any brick
        this.COMPONENTS.bricks.forEach((el) => {
            // only if it's alive
            if (el.isAlive) {
                if (this.COMPONENTS.balls[0].collide(el)) {
                    this.COMPONENTS.balls[0].brickBump(el);
                }
            }
        });
        if (this.settings.SETTINGS.control.isAutoGame === true) {
            this.COMPONENTS.rocket.x = this.COMPONENTS.balls[0].x + (this.renderData.BALL_SIZE.diameter / 2) - (this.renderData.ROCKET_SIZE.width / 2);
        }
        if (this.data.isGameActive === false && this.data.getCurrentLife() >= 0) {
            this.COMPONENTS.balls[0].setStartPosition();
            this.COMPONENTS.rocket.setStartPosition();
            this.COMPONENTS.balls[0].isReleased = false;
            this.COMPONENTS.rocket.ball.isOnPlayer = true;
            this.data.isGameActive = true;
        }
    }
    run() {
        //run game if it's running or restarting
        if (this.data.isGameActive === true) {
            this.update();
            this.render();
            // loop running
            requestAnimationFrame(() => {
                this.run();
            });
        }
    }
    ngOnInit() {
        this.rocketSprite = new Image();
        this.rocketSprite.src = "../../../assets/sprites/player.png";
        this.ballSprite = new Image();
        this.ballSprite.src = "../../../assets/sprites/ball.png";
        this.COMPONENTS.balls.push(new src_app_components_components__WEBPACK_IMPORTED_MODULE_0__["BallComponent"](this.data, this.sound, this.renderData, this.score));
        if (this.settings.SETTINGS.control.isAutoGame === false) {
            this.renderer.listen('document', 'keydown', (e) => {
                if (e.keyCode === 37) {
                    this.COMPONENTS.rocket.dx = -this.COMPONENTS.rocket.velocity;
                    // check if ball is on player
                    if (this.COMPONENTS.rocket.x > (this.renderData.ROCKET_SIZE.width / 2)) {
                        if (this.COMPONENTS.rocket.ball.isOnPlayer === true) {
                            this.COMPONENTS.balls[0].dx = this.COMPONENTS.rocket.dx;
                        }
                    }
                }
                else if (e.keyCode === 39) {
                    if (this.COMPONENTS.rocket.x < this.renderData.CANVAS_SIZE.width - this.renderData.ROCKET_SIZE.width) {
                        this.COMPONENTS.rocket.dx = this.COMPONENTS.rocket.velocity;
                        if (this.COMPONENTS.rocket.ball.isOnPlayer === true) {
                            this.COMPONENTS.rocket.dx = this.COMPONENTS.rocket.dx;
                        }
                    }
                }
            });
        }
        this.renderer.listen('document', 'keyup', () => {
            this.COMPONENTS.rocket.stop();
            if (this.COMPONENTS.rocket.ball.isOnPlayer) {
                this.COMPONENTS.balls[0].stop();
            }
        });
        this.renderer.listen('document', 'keydown', (e) => {
            // launch the ball when game is running and ball is on player
            if (e.keyCode === 32 && this.data.isGameActive && this.COMPONENTS.rocket.ball.isOnPlayer) {
                this.COMPONENTS.balls[0].jump();
                // ball is not on player anymore
                this.COMPONENTS.rocket.ball.isOnPlayer = false;
                this.sound.sounds.gameStart.play();
                this.gameStarted = true;
            }
        });
        // restart game when R is pressed
        this.renderer.listen('document', 'keydown', (e) => {
            if (e.keyCode === 82) {
                this.restart();
            }
        });
    }
    ngAfterViewInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx.fillStyle = '#fff';
        if (this.data.isGameActive === false) {
            this.ctx.font = this.MESSAGES.start.fontSize + " bold";
            let index = 12;
            for (const row of this.MESSAGES.start.text) {
                this.ctx.fillText(row, this.renderData.BRICK_SIZE.width * 4, (this.renderData.BRICK_SIZE.height * index));
                index += 2;
            }
            this.renderer.listen('document', 'keydown', (e) => {
                if (e.keyCode === 13) {
                    this.data.isGameActive = true;
                    this.render();
                    this.start();
                }
            });
        }
        else {
            this.render();
            this.start();
        }
    }
}
GameFieldComponent.ɵfac = function GameFieldComponent_Factory(t) { return new (t || GameFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_2__["RenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_2__["LevelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_2__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
GameFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameFieldComponent, selectors: [["", 8, "game-window__game-field"]], viewQuery: function GameFieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, attrs: _c1, decls: 3, vars: 2, consts: [[1, "canvas-viewport", "game-field__canvas-viewport"], [1, "canvas-viewport__canvas", 3, "width", "height"], ["canvasField", ""]], template: function GameFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("height", ctx.height);
    } }, styles: [".canvas-viewport[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.canvas-viewport__canvas[_ngcontent-%COMP%] {\n  background-color: #393939;\n  border: 4px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwLmNvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7RUFDSSx5QkNWSztFRFlMLHVCQUFBO0FBSFIiLCJmaWxlIjoiZ2FtZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tbW9uLnNjc3NcIjtcclxuXHJcbi5jYW52YXMtdmlld3BvcnR7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmX19jYW52YXN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcblxyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG59XHJcbiIsIiRtYWluLWNvbG9yOiAjMzkzOTM5O1xyXG4iXX0= */"] });


/***/ }),

/***/ "NPWB":
/*!*****************************************************!*\
  !*** ./src/app/components/brick/brick.component.ts ***!
  \*****************************************************/
/*! exports provided: BrickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickComponent", function() { return BrickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/render.service */ "OyN4");


class BrickComponent {
    constructor(renderData) {
        this.renderData = renderData;
        this.x = 0;
        this.y = 0;
        this.BRICK_SPRITE = new Image(this.renderData.BRICK_SIZE.width, this.renderData.BRICK_SIZE.height);
        this.BRICK_SPRITE.src = "../../../assets/sprites/brick.png";
    }
    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
    }
    setIsAlive(value) {
        this.isAlive = value;
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
BrickComponent.ɵfac = function BrickComponent_Factory(t) { return new (t || BrickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_render_service__WEBPACK_IMPORTED_MODULE_1__["RenderService"])); };
BrickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrickComponent, selectors: [["game-brick"]], decls: 0, vars: 0, template: function BrickComponent_Template(rf, ctx) { }, styles: [""] });


/***/ }),

/***/ "OyN4":
/*!********************************************!*\
  !*** ./src/app/services/render.service.ts ***!
  \********************************************/
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _components_game_window_game_window_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-window/game-window.component */ "E/ma");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppComponent {
    constructor() {
        this.GAME_WINDOW = new _components_game_window_game_window_component__WEBPACK_IMPORTED_MODULE_0__["GameWindowComponent"]();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [[1, "game-app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, directives: [_components_game_window_game_window_component__WEBPACK_IMPORTED_MODULE_0__["GameWindowComponent"]], styles: [".game-app[_ngcontent-%COMP%] {\n  background-color: #393939;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxhcHAuY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNIUztBREViIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL2FwcC5jb21tb24uc2Nzc1wiO1xyXG5cclxuLmdhbWUtYXBwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbn1cclxuIiwiJG1haW4tY29sb3I6ICMzOTM5Mzk7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "V9p5":
/*!*******************************************!*\
  !*** ./src/app/services/sound.service.ts ***!
  \*******************************************/
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
                autoplay: true,
                loop: true,
                volume: 0
            }),
            gameStart: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/gameStart.ogg'],
                volume: 0
            }),
            brickBump: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/brickBump.wav'],
                volume: 0
            }),
            playerBump: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/playerBump.wav'],
                volume: 0
            }),
            borderBump: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/playerBump.wav'],
                volume: 0
            }),
            gameOver: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/gameOver.wav'],
                volume: 0
            }),
            youWin: new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
                src: ['../assets/sounds/youWin.wav'],
                volume: 0
            })
        };
    }
}
SoundService.ɵfac = function SoundService_Factory(t) { return new (t || SoundService)(); };
SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _components_life_count_life_count_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/life-count/life-count.component */ "sI+z");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_game_window_game_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game-window/game-window.component */ "E/ma");
/* harmony import */ var _components_game_field_game_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game-field/game-field.component */ "HHBf");
/* harmony import */ var _components_rocket_rocket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rocket/rocket.component */ "fjJ/");
/* harmony import */ var _components_brick_brick_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/brick/brick.component */ "NPWB");
/* harmony import */ var _components_score_count_score_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/score-count/score-count.component */ "zQct");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_game_window_game_window_component__WEBPACK_IMPORTED_MODULE_4__["GameWindowComponent"],
        _components_game_field_game_field_component__WEBPACK_IMPORTED_MODULE_5__["GameFieldComponent"],
        _components_rocket_rocket_component__WEBPACK_IMPORTED_MODULE_6__["RocketComponent"],
        _components_brick_brick_component__WEBPACK_IMPORTED_MODULE_7__["BrickComponent"],
        _components_score_count_score_count_component__WEBPACK_IMPORTED_MODULE_8__["ScoreCountComponent"],
        _components_life_count_life_count_component__WEBPACK_IMPORTED_MODULE_0__["LifeCountComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "fjJ/":
/*!*******************************************************!*\
  !*** ./src/app/components/rocket/rocket.component.ts ***!
  \*******************************************************/
/*! exports provided: RocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketComponent", function() { return RocketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/services */ "42F4");


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
        throw new Error("Method not implemented.");
    }
}
RocketComponent.ɵfac = function RocketComponent_Factory(t) { return new (t || RocketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_services__WEBPACK_IMPORTED_MODULE_1__["RenderService"])); };
RocketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RocketComponent, selectors: [["game-rocket"]], decls: 0, vars: 0, template: function RocketComponent_Template(rf, ctx) { }, styles: [""] });


/***/ }),

/***/ "gLg0":
/*!*******************************************!*\
  !*** ./src/app/services/score.service.ts ***!
  \*******************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScoreService {
    constructor() {
        this.score = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.currentScore = this.score.asObservable();
    }
    changeScore(score) {
        this.score.next(score);
    }
    getCurrentScore() {
        return this.score.getValue();
    }
    resetScore() {
        this.changeScore(0);
    }
}
ScoreService.ɵfac = function ScoreService_Factory(t) { return new (t || ScoreService)(); };
ScoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScoreService, factory: ScoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "p5Wg":
/*!***************************************************!*\
  !*** ./src/app/components/ball/ball.component.ts ***!
  \***************************************************/
/*! exports provided: BallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallComponent", function() { return BallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/sound.service */ "V9p5");
/* harmony import */ var _services_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/render.service */ "OyN4");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/score.service */ "gLg0");





;
class BallComponent {
    constructor(data, sound, renderData, score) {
        this.data = data;
        this.sound = sound;
        this.renderData = renderData;
        this.score = score;
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
        this.score.changeScore(this.score.getCurrentScore() + 1);
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
        else if (y < 0) {
            this.y = 0;
            this.dy = this.velocity;
            //   this.data.sounds.borderBump.play();
        }
        else if ((y > this.canvas.height)) {
            if (this.data.isGameActive === true) {
                this.data.isGameActive = false;
                this.data.changeLife(this.data.getCurrentLife() - 1);
                this.stop();
            }
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
    ngOnInit() {
    }
}
BallComponent.ɵfac = function BallComponent_Factory(t) { return new (t || BallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_render_service__WEBPACK_IMPORTED_MODULE_3__["RenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_score_service__WEBPACK_IMPORTED_MODULE_4__["ScoreService"])); };
BallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BallComponent, selectors: [["game-ball"]], decls: 0, vars: 0, template: function BallComponent_Template(rf, ctx) { }, styles: [""] });


/***/ }),

/***/ "p6OY":
/*!******************************************!*\
  !*** ./src/app/components/components.ts ***!
  \******************************************/
/*! exports provided: BallComponent, BrickComponent, ScoreCountComponent, LifeCountComponent, RocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _life_count_life_count_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./life-count/life-count.component */ "sI+z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LifeCountComponent", function() { return _life_count_life_count_component__WEBPACK_IMPORTED_MODULE_0__["LifeCountComponent"]; });

/* harmony import */ var _rocket_rocket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rocket/rocket.component */ "fjJ/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RocketComponent", function() { return _rocket_rocket_component__WEBPACK_IMPORTED_MODULE_1__["RocketComponent"]; });

/* harmony import */ var _ball_ball_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball/ball.component */ "p5Wg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BallComponent", function() { return _ball_ball_component__WEBPACK_IMPORTED_MODULE_2__["BallComponent"]; });

/* harmony import */ var _brick_brick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brick/brick.component */ "NPWB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrickComponent", function() { return _brick_brick_component__WEBPACK_IMPORTED_MODULE_3__["BrickComponent"]; });

/* harmony import */ var _score_count_score_count_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score-count/score-count.component */ "zQct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScoreCountComponent", function() { return _score_count_score_count_component__WEBPACK_IMPORTED_MODULE_4__["ScoreCountComponent"]; });









/***/ }),

/***/ "sI+z":
/*!***************************************************************!*\
  !*** ./src/app/components/life-count/life-count.component.ts ***!
  \***************************************************************/
/*! exports provided: LifeCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeCountComponent", function() { return LifeCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");


const _c0 = ["class", "game-information__life-counter"];
class LifeCountComponent {
    // get and set shared properties from DataService
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.data.currentLife.subscribe(lifeCount => this.lifeCount = lifeCount);
    }
}
LifeCountComponent.ɵfac = function LifeCountComponent_Factory(t) { return new (t || LifeCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
LifeCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LifeCountComponent, selectors: [["", 8, "game-information__life-counter"]], attrs: _c0, decls: 2, vars: 1, consts: [[1, "life-count"]], template: function LifeCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("LIVES : ", ctx.lifeCount, "");
    } }, styles: [".life-count[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaWZlLWNvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJsaWZlLWNvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpZmUtY291bnR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zQct":
/*!*****************************************************************!*\
  !*** ./src/app/components/score-count/score-count.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScoreCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCountComponent", function() { return ScoreCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/services */ "42F4");


const _c0 = ["class", "game-information__game-score"];
class ScoreCountComponent {
    // get and set shared properties from DataService
    constructor(score) {
        this.score = score;
    }
    ngOnInit() {
        this.score.currentScore.subscribe(score => this.currentScore = score);
    }
}
ScoreCountComponent.ɵfac = function ScoreCountComponent_Factory(t) { return new (t || ScoreCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_services__WEBPACK_IMPORTED_MODULE_1__["ScoreService"])); };
ScoreCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreCountComponent, selectors: [["", 8, "game-information__game-score"]], attrs: _c0, decls: 2, vars: 1, consts: [[1, "game-score"]], template: function ScoreCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SCORE : ", ctx.currentScore, "");
    } }, styles: [".game-score[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY29yZS1jb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic2NvcmUtY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1zY29yZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuIl19 */"] });


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