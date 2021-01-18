class Timetable {
    constructor() {
        this.state = {
            settings: null,
            selectedMonthIncrement: 0,
            isSettingsOpen: false,
            selectedDate: this.getCurrentDate(),
            userPosition: {},
            weatherForecastData: {},
            userLocationData: {}
        };
        this.previousState = {};
        this.monthArrayEn = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ];
        this.dayArrayEn = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        this.getSettingsRequest(this.makeRequest, this);

        this.setPreviousState(this.state);
    }

    /* setters */

    setSelectedMonthIncrement(value) {
        this.state.selectedMonthIncrement = value;
    };

    setFirstDay(value) {
        this.state.settings.isFirstDaySunday = value;
    };

    setSiblingsMonthsShowed(value) {
        this.state.settings.isSiblingsMonthsShowed = value;
    };

    setScheduleActive(value) {
        this.state.settings.isScheduleActive = value;
    };

    setHolidaysIndex(array) {
        this.state.settings.holidaysIndex = array;
    };

    setSettingsOpen(value) {
        this.state.isSettingsOpen = value;
    }

    setWeatherForecastData(value) {
        this.state.weatherForecastData = value;
    }

    setUserPosition(value) {
        this.state.userPosition = value;
    }

    setUserLocationData(value) {
        this.state.userLocationData = value;
    }

    setPreviousState(currentState) {
        this.previousState = JSON.parse(JSON.stringify(currentState));
    };

    setSettings(value) {
        this.state.settings = value;
    }

    /* getters */

    getCurrentState() {
        return this.state;
    }

    getSelectedMonthIncrement() {
        return this.getCurrentState().selectedMonthIncrement;
    }

    getFirstDay() {
        return this.getCurrentState().settings.isFirstDaySunday
    }

    getSiblingsMonthsShowed() {
        return this.getCurrentState().settings.isSiblingsMonthsShowed
    };

    getScheduleActive() {
        return this.getCurrentState().settings.isScheduleActive
    };

    getHolidaysIndex() {
        return this.getCurrentState().settings.holidaysIndex;
    }

    getHolidaysList() {
        return this.getCurrentState().settings.holidaysList
    }

    getCurrentDate() {
        return (new Date());
    };


    callSettings() {
        if (this.state.settings === null) {
            this.getSettingsRequest()
        }
    }


    getSettingsRequest(method, callObject) {
        const object = this;

        function readTextFile(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }

        //usage:
        readTextFile("./config.json", function (text) {
            var data = JSON.parse(text);
            object.setSettings(data.settings)
            method.call(callObject)
        });
    }

    getSettingsOpen() {
        return this.getCurrentState().isSettingsOpen
    }

    getWeatherForecastData() {
        return this.getCurrentState().weatherForecastData
    }

    getUserLocationData() {
        return this.getCurrentState().userLocationData
    }

    getPreviousSelectedMonthIncrement() {
        return this.previousState.selectedMonthIncrement;
    }

    getSelectedDate() {
        const currentYear = this.getCurrentDate().getFullYear();
        const selectedMonth = this.getCurrentDate().getMonth() + this.getSelectedMonthIncrement();
        const currentMonthDay = this.getCurrentDate().getDate();
        return new Date(currentYear, selectedMonth, currentMonthDay);
    }

    getUserPosition() {
        return this.getCurrentState().userPosition;
    }

    getCurrentPosition() {
        return new Promise(
            (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
        )
    }

    /* mixin */

    updatePreviousState() {
        const currentState = this.getCurrentState();
        this.setPreviousState(currentState);
    }

    toggleSettingsOpen() {
        const previousValue = this.getSettingsOpen();
        this.setSettingsOpen(!previousValue);
    }

    toggleFirstDay() {
        const previousValue = this.getFirstDay();
        this.setFirstDay(!previousValue);
    };

    toggleSiblingsMonthsShowed() {
        const previousValue = this.getSiblingsMonthsShowed();
        this.setSiblingsMonthsShowed(!previousValue)
    };

    toggleScheduleActive() {
        const previousValue = this.getScheduleActive();
        this.setScheduleActive(!previousValue)
    };


    /* components create */

    /* additional */

    callPositionRequest(additionalFunction, callObject) {
        const object = this;
        this.getCurrentPosition()
            .then(position => {
                if (position.coords) {
                    const locationData = { latitude: position.coords.latitude, longitude: position.coords.longitude }
                    object.setUserPosition(locationData)
                    if (additionalFunction) {
                        additionalFunction.call(callObject);
                    }
                    return position;
                } else {
                    console.error('Geolocation is not supported by this browser.');
                }
                return position;
            }
            ).catch(
                error => console.error(error)
            )
    }


    makeRequest() {
        this.callPositionRequest(this.combinedRequest, this)
    }




    requestWeatherForecastData(additionalFunction) {
        const latitude = this.getUserPosition().latitude;
        const longitude = this.getUserPosition().longitude;
        return new Promise((resolve, reject) => setTimeout(() => {
            resolve(
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=metric&appid=fa89f5efb789b4e5e23e5761db403636`)
                    .then(response => response.json())
                    .then(data => {
                        this.setWeatherForecastData(data);
                        return data;
                    }))
        }, 0))
    }

    requestUserLocation(additionalFunction) {
        const coordinatesRequest = `${this.getUserPosition().longitude},${this.getUserPosition().latitude}`;
        return new Promise((resolve, reject) => setTimeout(() => {
            resolve(fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=2317cb5b-df6a-48f6-b15f-abd253896d8b&geocode=${coordinatesRequest}&format=json&lang=en_US`)
                .then(response => response.json())
                .then(data => {
                    this.setUserLocationData(data);
                    return data
                }))
        }, 0))
    }

    combinedRequest() {
        const promises = [this.requestWeatherForecastData(), this.requestUserLocation()]
        Promise.allSettled(promises)
            .then(results => {
                this.initTimetable()
            })
    }








    makeDateString(timeMark) {
        return `${timeMark.getDate()} ${this.monthArrayEn[timeMark.getMonth()]} ${timeMark.getFullYear()}`;
    };

    makeTimeString(timeMark) {
        return `${timeMark.toLocaleTimeString()}`;
    }

    updateDateTimeSegment() {
        this.subscribeDateComponentChangingCurrentDate();
        this.subscribeTimeComponentChangingCurrentDate();
    }

    getSettingsInputsState() {
        const inputsArray = new Array(...document.getElementsByTagName("input"));
        const weekendSelectArray = inputsArray.filter((item) => item.id.includes("holiday-is"));
        const resultWeekendSelect = [];
        for (let index = 0; index < weekendSelectArray.length; index++) {
            const item = weekendSelectArray[index];
            if (item.checked === true) {
                resultWeekendSelect.push(index)
            }
        }
        this.setHolidaysIndex(resultWeekendSelect);
        const firstDaySelect = document.getElementById("first-day-select");
        this.setFirstDay(firstDaySelect.checked);
        const siblingsMonthsSelect = document.getElementById("other-months-show");
        this.setSiblingsMonthsShowed(siblingsMonthsSelect.checked);
        const activeScheduleSelect = document.getElementById("schedule-active");
        this.setScheduleActive(activeScheduleSelect.checked)
    }



    dayTypeDetermination() {
        const dateCorrection = (this.getFirstDay() === false) ? 1 : 0;
        const currentDay = this.getCurrentDate().getDate() - dateCorrection;
        let holidaysIndex = this.getHolidaysIndex();
        if (this.getFirstDay() === false) {
            holidaysIndex = holidaysIndex.map((item) => {
                const result = item - 1;
                if (result === -1) {
                    return 6
                }
                return result
            })
        }
        if (holidaysIndex.includes(currentDay) === true) {
            return "weekend"
        } else {
            return "workday"
        }
    }

    /* activities */

    /**
     * Injects current time mark as inner text at selected DOM Element.
     * @param {Element} element - Selected DOM element.
     */
    timeInjection(element, timeMark) {
        const timeString = this.makeTimeString(timeMark);
        Framework.injectElementInnerText(element, timeString);
    };

    /**
     * Injects current date mark as inner text at selected DOM Element.
     * @param {Element} element - Selected DOM element.
     */
    dateInjection(element, timeMark) {
        const dateString = this.makeDateString(timeMark);
        Framework.injectElementInnerText(element, dateString);
    }

    increaseSelectedMonthIncrement(value) {
        const newValue = this.getSelectedMonthIncrement() + value;
        this.setSelectedMonthIncrement(newValue);
    }

    /**
     * Creates elements array with day of the previous month from selected date inside selected element-container.
     * @param {Element} container - Parent of created elements array.
     * @param {Date} date - Date object with selected year and month.
     */
    fillPreviousMonth(container, date) {
        const dateCorrection = (this.getFirstDay() === false) ? 1 : 0;
        const firstDayCurrentMonth = Framework.getFirstDayOfMonth(date) - dateCorrection;
        let index = (firstDayCurrentMonth === 0) ? 7 : firstDayCurrentMonth;
        let lastMonthDaysCount = Framework.getDaysInPreviousMonth(date) - index + 1;
        while (index > 0) {
            const content = (this.getSiblingsMonthsShowed() === false) ? "" : lastMonthDaysCount;
            this.dayBoxCreate(content, container, ["day-box_color_other-month"]);
            index--;
            lastMonthDaysCount++;
        }
    }

    /**
     * Creates elements array with day of the current month of selected date inside selected element-container.
     * @param {Element} container - Parent of created elements array.
     * @param {Date} date - Date object with selected year and month.
     */
    fillCurrentMonth(container, date) {
        let index = 1;
        const dateCorrection = (this.getFirstDay() === false) ? 1 : 0;
        let dayOfWeekIndex = Framework.getFirstDayOfMonth(date) - dateCorrection;
        const currentDay = date.getDate();
        let holidaysIndex = this.getHolidaysIndex();
        if (this.getFirstDay() === false) {
            holidaysIndex = holidaysIndex.map((item) => {
                const result = item - 1;
                if (result === -1) {
                    return 6
                }
                return result
            })
        }
        while (index <= Framework.getDaysInMonth(date)) {
            let additionalClass = (index === currentDay) ? ["day-box_active"] : [];
            if (holidaysIndex.includes(dayOfWeekIndex) === true) {
                additionalClass = additionalClass.concat(["day-box_holiday"])
            }
            this.dayBoxCreate(index, container, additionalClass);
            index++;
            dayOfWeekIndex++;
            if (dayOfWeekIndex > 6) {
                dayOfWeekIndex = 0;
            }
        }
    }

    /**
     * Creates elements array with day of the next month from selected date inside selected element-container.
     * @param {Element} container - Parent of created elements array.
     * @param {Date} date - Date object with selected year and month.
     */
    fillNextMonth(container, date) {
        let index = 1;
        let count = ((Framework.getLastDayOfMonth(date) === 6) ? 42 : ((container.childElementCount < 35) ? 35 : 42));
        while (container.childElementCount < count) {
            const content = (this.getSiblingsMonthsShowed() === false) ? "" : index;
            this.dayBoxCreate(content, container, ["day-box_color_other-month"]);
            index++;
        }
    }

    /**
     * /**
     * Creates elements array with day of the month inside selected element-container.
     * @param {Element} elementContainer - Parent of created elements array.
     * @param {Date} date - Date object with selected year and month.
     */
    fillDaysOfMonth(elementContainer, date) {
        if ((date instanceof Date) === false) {
            date = new Date();
        }
        this.fillPreviousMonth(elementContainer, date);
        this.fillCurrentMonth(elementContainer, date);
        this.fillNextMonth(elementContainer, date);
    }

    fillDaysContainerSelectedDate(date) {
        if ((date instanceof Date) === false) {
            date = this.getCurrentDate();
        }
        const daysContainer = document.getElementsByClassName("days-container__month-wrapper")[0];
        Framework.clearElementInnerHtml(daysContainer);
        this.fillDaysOfMonth(daysContainer, date);
    }

    fillDaysOfWeekCaption() {
        const calendarHeader = document.getElementsByClassName("days-week-header")[0];
        Framework.clearElementInnerHtml(calendarHeader)
        this.fillCalendarHeader(calendarHeader);
    }

    /**
     * Creates elements array with day of the week inside selected element-container.
     * @param {Element} elementContainer - Parent of created elements array.
     */
    fillCalendarHeader(elementContainer) {
        let daysArray;
        if (this.getFirstDay() === false) {
            daysArray = this.dayArrayEn.slice(1).concat(this.dayArrayEn[0])
        } else {
            daysArray = this.dayArrayEn
        }
        for (const item of daysArray) {
            this.dayBoxCreate(item.slice(0, 3), elementContainer, ["day-box_borderless"]);
        }
    }

    /* create components */

    createDateSelectorButton(elementId) {
        const injectedHtml = `<div class="date-control date-selector__date-control common-flex-column-center">
                                    <div class="date-control__switch-button date-control__switch-button_increase"><span class="material-icons">keyboard_arrow_up</span></div>
                                    <div id="${elementId}" class="date-control__caption common_font-size_1d8em common_text-transform_capitalize"></div>
                                    <div class="date-control__switch-button date-control__switch-button_decrease"><span class="material-icons">keyboard_arrow_down</span></div>
                                </div>`;
        return Framework.portalXssDefence(injectedHtml);
    };

    /**
     * Creates component 'day-box' as a child of parent element, with selected text inside 'day-box__date' element. Block 'day-box' may contain additional classes. 
     * @param {(string | number)} text - Text inside element.
     * @param {Element} parent - Parent of created element.
     * @param {Array} additionalClasses - Array with classes used to block 'day-box'.
     */
    dayBoxCreate(text, parent, additionalClasses = []) {
        const domElementStructureByLevels = [
            {
                type: "div",
                classes: ["day-box", "common-flex-center-center"].concat(additionalClasses)
            },
            {
                type: "div",
                classes: ["day-box__content", "common-flex-center-center"]
            },
            {
                type: "div",
                classes: ["day-box__date"]
            }
        ];
        const dayBoxBlock = this.constructElement(domElementStructureByLevels[0].type, parent, domElementStructureByLevels[0].classes, "");
        const dayBoxElementContent = this.constructElement(domElementStructureByLevels[1].type, dayBoxBlock, domElementStructureByLevels[1].classes, "");
        const dayBoxElementDate = this.constructElement(domElementStructureByLevels[2].type, dayBoxElementContent, domElementStructureByLevels[2].classes, text);
        return dayBoxBlock;
    }

    createSliderSwitchButton(parent, inputId, initialState) {
        const sliderWrapper = this.constructElement("div", parent, ["input-checkbox", "common-flex-center-center"], "");
        const sliderInput = Framework.createDomInputElement("checkbox");
        Framework.setDomElementId(sliderInput, inputId);
        Framework.setElementClass(sliderInput, ["input-checkbox__input"]);
        sliderInput.checked = initialState;
        Framework.attachDomElement(sliderWrapper, sliderInput);
        const sliderHover = Framework.createDomElement("label");
        Framework.setElementClass(sliderHover, ["input-hover", "input-checkbox__input-hover"]);
        Framework.setDomElementAttribute(sliderHover, inputId, "for");
        Framework.attachDomElement(sliderWrapper, sliderHover);
    }



    /**
     * Creates element with selected type, classes, inner text and appends at parent element.
     * @param {string} type - Type of created element.
     * @param {Element} parent - Parent of created element.
     * @param {Array} classes - Array with classes used to element.
     * @param {(string|number)} text - Text inside element.
     */
    constructElement(type, parent, classes, text = "") {
        if (arguments.length < 4) {
            throw new Error("constructElementError: Function calls with wrong quantity of arguments.");
        }
        if ((typeof type !== "string") || ((parent instanceof Element) === false) || (Array.isArray(classes) === false) || ((typeof text !== "string") && (typeof text !== "number"))) {
            throw new Error("constructElementError: Function calls with wrong type of arguments.");
        }
        const element = Framework.createDomElement(type);
        Framework.updateDomElement(element, classes, text);
        Framework.attachDomElement(parent, element);
        return element;
    }

    /* render components */

    /**
     * Render Calendar section of app
     */
    renderCalendarSection() {
        const injectedHtml = `  <div class="date-time-weather-wrapper common-flex-row-between-center">
                                    <div class="date-time-segment calendar-section__date-time-segment">
                                        <div class="time-component date-time-segment__time-component"></div>
                                        <div class="date-component date-component-wrapper__date-component"></div>
                                    </div>
                                    <div class="day-weather-segment calendar-section__day-weather-segment common-flex-column-between-center"></div>
                                </div>
                                <div class="month-segment calendar-section__month-segment common-flex-column-center-center">
                                    <div class="date-selector month-segment__date-selector common-flex-row-between-center">
                                        <div class="date-selector-wrapper__hint common-flex-center-center common_font-size_1d4em common_visibility_hidden"><span class="material-icons common_padding-right_4px"> restore </span>Click to restore date</div>
                                    </div>
                                    <div class="days-week-header month-segment__calendar-header common-flex-row-align"></div>
                                    <div class="days-container month-segment__days-container">
                                        <div class="days-container__month-wrapper common-flex-row-align-wrap"></div>
                                        <div class="days-container__background"></div>
                                    </div>
                                </div>
                                <div class="settings-segment calendar-section__settings-segment"></div>`;
        Framework.initDomPortal("main-container__wrapper", ["main-container__calendar-section", "common_sections-width", "common-flex-column-center-center"], injectedHtml, ["calendar-section"]);
    };

    renderTaskScheduleSection() {
        const injectedHtml = ``;
        Framework.initDomPortal("main-container__wrapper", ["main-container__task-schedule-section", "common_sections-width"], injectedHtml, ["task-schedule-section"]);
    }

    renderSettingsContainer() {
        const injectedHtml = `<div class="settings-container-wrapper common-flex-column-center">
                                  <div class="settings-container__header common_padding_left_10px">Settings</div>
                                  <div class="settings-option settings-option_first-day-week settings-container__settings-option common-flex-column">
                                    <div class="settings-option__caption common_padding_left_10px">Select the 1st day of the week:</div>
                                  </div>
                                  <div class="settings-option settings-container__settings-option settings-option_weekends-select common-flex-column">
                                    <div class="settings-option__caption common_padding_left_10px">Select weekends:</div>
                                  </div>
                                  <div class="settings-option settings-option_one-line settings-container__settings-option settings-option_other-month-show common-flex-row-between-center">
                                    <div class="settings-option__caption common_padding_left_10px">Show another months days</div>
                                  </div>
                                  <div class="settings-option settings-option_one-line settings-container__settings-option settings-option_schedule-active common-flex-row-between-center">
                                    <div class="settings-option__caption common_padding_left_10px">Task schedule active</div>
                                  </div>
                              </div>`;
        Framework.initDomPortal("task-schedule-section", ["task-schedule-section__settings-container", "common-flex-column-between-center"], injectedHtml, ["settings-container"]);
    }

    /**
     * Render date selectors
     */
    renderDateSelector() {
        const injectedHtml = this.createDateSelectorButton("date-control-month") + this.createDateSelectorButton("date-control-year");
        Framework.initDomPortal("date-selector", ["common-flex-row-align"], injectedHtml, ["date-selector__date-control-wrapper"]);
    };

    renderSettingsCallButton() {
        const iconHtmlCode = `<span class="material-icons">settings</span>`;
        const parent = Framework.getFirstElementByClassName("calendar-section__settings-segment");
        const object = this;
        function callSettingsClick() {
            const settingsState = object.getSettingsOpen();
            if (settingsState !== true) {
                object.toggleSettingsOpen();
                object.initSettingsContainer();
            }
        }
        BeautifiedButton.new(parent, "Settings", callSettingsClick, ["settings-segment__button"], iconHtmlCode);
    }

    renderFirstDayWeekSelect() {
        const optionArray = this.dayArrayEn.slice(0, 2);
        const initialState = this.getFirstDay();
        function setCaption(parent, index, array) {
            const caption = Framework.createDivElement();
            Framework.updateDomElement(caption, ["option-switch__caption"], array[index]);
            Framework.attachDomElement(parent, caption)
        }
        Framework.initDomPortal("settings-option_first-day-week", ["common-flex-row-between-center"], "", ["option-switch", "option-switch__wrapper", "option-switch__wrapper_first-day-week"]);
        const selectWrapper = Framework.getFirstElementByClassName("option-switch__wrapper_first-day-week");
        setCaption(selectWrapper, 1, optionArray);
        this.createSliderSwitchButton(selectWrapper, "first-day-select", initialState);
        setCaption(selectWrapper, 0, optionArray);
    }

    renderWeekendsSelect() {
        const weekendsArray = this.getHolidaysIndex();
        function isDaySelected(index, array) {
            return array.includes(index)
        }
        for (let index = 0; index < this.dayArrayEn.length; index++) {
            const switchInput = this.dayArrayEn[index];
            const injectedHtml = `<div class="option-switch__caption">${switchInput}</div>`;
            const classSelector = `option-switch__wrapper_weekends-select-${switchInput}`
            Framework.initDomPortal("settings-option_weekends-select", ["common-flex-row-between-center"], injectedHtml, ["option-switch", "option-switch__wrapper", "option-switch__wrapper_weekends-select", classSelector]);
            const selectWrapper = Framework.getFirstElementByClassName(classSelector);
            this.createSliderSwitchButton(selectWrapper, `holiday-is-${switchInput.toLowerCase()}`, isDaySelected(index, weekendsArray));
        }
    }

    renderOtherMonthSelect() {
        const initialState = this.getSiblingsMonthsShowed()
        const parent = Framework.getFirstElementByClassName("settings-option_other-month-show");
        this.createSliderSwitchButton(parent, "other-months-show", initialState)
    }

    renderActivateTaskSchedule() {
        const initialState = this.getScheduleActive()
        const parent = Framework.getFirstElementByClassName("settings-option_schedule-active");
        this.createSliderSwitchButton(parent, "schedule-active", initialState)
    }

    unmountSettingsContainer() {
        const domElement = Framework.getFirstElementByClassName("task-schedule-section__settings-container");
        Framework.unmountDomElement(domElement)
    }

    renderCancelControlButton(parent) {
        const object = this;
        function cancelClick() {
            object.toggleSettingsOpen();
            setTimeout(object.unmountSettingsContainer, 300);
        }
        BeautifiedButton.new(parent, "Cancel", cancelClick, ["control-buttons-wrapper__control-button", "control-buttons-wrapper__control-button_cancel"], "");
    }

    renderApplyControlButton(parent) {
        const object = this;
        function applyClick() {
            object.getSettingsInputsState();
            setTimeout(object.unmountSettingsContainer, 300);
            object.fillDaysContainerSelectedDate();
            object.fillDaysOfWeekCaption();
            object.toggleSettingsOpen();
        }
        BeautifiedButton.new(parent, "Apply", applyClick, ["control-buttons-wrapper__control-button"], "");
    }

    renderControlButtons() {
        Framework.initDomPortal("task-schedule-section__settings-container", ["common-flex-row-between-center"], "", ["control-buttons-wrapper", "settings-container__control-buttons-wrapper"]);
        const parent = Framework.getFirstElementByClassName("settings-container__control-buttons-wrapper");
        this.renderCancelControlButton(parent);
        this.renderApplyControlButton(parent);
    }

    renderDaySummary() {
        const injectedHtml = `<div class="day-summary__selected-date"></div>
                                <div class="day-information day-summary__day-information">
                                    <div class="day-information__type"></div>
                                    <div class="day-information__caption"></div>
                                </div>
                                <div class="selected-day-weather day-summary__selected-day-weather"></div>
                                <div class="day-task-section day-summary__day-task-section"></div>`;
        Framework.initDomPortal("main-container__task-schedule-section", ["common-flex-column"], injectedHtml, ["day-summary", "task-schedule-section__day-summary"]);
    }

    initSettingsContainer() {
        this.renderSettingsContainer();
        this.renderFirstDayWeekSelect();
        this.renderWeekendsSelect();
        this.renderOtherMonthSelect();
        this.renderActivateTaskSchedule();
        this.renderControlButtons();
    }

    initDaySummary() {
        const parent = Framework.getFirstElementByClassName("main-container__task-schedule-section");
        Framework.clearElementInnerHtml(parent);
        this.renderDaySummary();
        this.bindDataDaySummary()
    }

    //--------------------------//

    renderTimetableTree() {
        this.renderCalendarSection();
        this.renderSettingsCallButton();
        this.renderTaskScheduleSection();

        /* additional */

        this.renderDateSelector();

        /* test */

        this.initDaySummary();


    }

    //--------------------------//

    /* bind components */

    bindElementClickIncreaseMonthIncrement(element, increment) {
        element.addEventListener("click", () => {
            this.bindElementClickIncreaseMonthIncrementActivity(increment)
        });
    }

    bindDateSelectorButtonMonthIncrement(elementId, increment) {
        const boundElement = document.getElementById(elementId);
        const increaseButton = boundElement.previousElementSibling;
        const decreaseButton = boundElement.nextElementSibling;
        this.bindElementClickIncreaseMonthIncrement(increaseButton, increment);
        this.bindElementClickIncreaseMonthIncrement(decreaseButton, (- increment));
    }

    bindDateControlMonthIncrement() {
        this.bindDateSelectorButtonMonthIncrement("date-control-month", 1);
        this.bindDateSelectorButtonMonthIncrement("date-control-year", 12)
    }

    bindDateControlMonthSelectedDate() {
        const dateControlMonth = document.getElementById("date-control-month");
        const selectedDate = this.getSelectedDate();
        const indexSelectedMonth = selectedDate.getMonth();
        const selectedMonth = this.monthArrayEn[indexSelectedMonth];
        Framework.injectElementInnerText(dateControlMonth, selectedMonth);
    }

    bindDateControlYearSelectedDate() {
        const dateControlYear = document.getElementById("date-control-year");
        const selectedDate = this.getSelectedDate();
        const selectedYear = selectedDate.getFullYear();
        Framework.injectElementInnerText(dateControlYear, selectedYear);
    }

    bindDaysContainerSelectedDate() {
        const selectedDate = this.getSelectedDate();
        this.fillDaysContainerSelectedDate(selectedDate)
    }

    bindShowHideResetDateButton() {
        const dateResetButton = document.getElementsByClassName('date-selector-wrapper__hint')[0];
        const currentStateSelectedMonthIncrement = this.getSelectedMonthIncrement();
        if (currentStateSelectedMonthIncrement !== 0) {
            dateResetButton.classList.remove("common_visibility_hidden");
        } else {
            dateResetButton.classList.add("common_visibility_hidden");
        }
    }



    bindShowingResetDateButtonSelectedDate() {
        const dateResetButton = document.getElementsByClassName('date-selector-wrapper__hint')[0]
        dateResetButton.addEventListener("click", () => {
            this.setSelectedMonthIncrement(0);
            this.subscribeDateControlMonthChangingSelectedDate();
        })
    }

    bindElementClickIncreaseMonthIncrementActivity(increment) {
        this.increaseSelectedMonthIncrement(increment);
        this.subscribeDateControlMonthChangingSelectedDate();
        this.updatePreviousState();
    }

    bindTimeComponentCurrentDate() {
        const timeComponent = document.getElementsByClassName("time-component")[0];
        const timeMark = this.getCurrentDate();
        this.timeInjection(timeComponent, timeMark);
    }



    bindMouthMove() {
        const daysContainer = document.getElementsByClassName("month-segment__days-container")[0];
        const daysContainerBackground = document.getElementsByClassName("days-container__background")[0];
        this.subscribeToMouseMove(daysContainerBackground, daysContainer);
    }

    bindDataDaySummary() {
        const selectedDate = Framework.getFirstElementByClassName("day-summary__selected-date");
        const dayType = Framework.getFirstElementByClassName("day-information__type");

    }



    bindDateComponentCurrentDate() {
        const dateComponent = document.getElementsByClassName("date-component")[0];
        const timeMark = this.getCurrentDate();
        this.dateInjection(dateComponent, timeMark);
    }

    /**
     * Subscribes geometric center of selected element to mouse move at movement field.
     * @param {Element} subscribedElement - Element that subscribed to mouse.
     * @param {Element} fieldOfObjectMovement - Element inside that subscribed element move. 
     */
    subscribeToMouseMove(subscribedElement, fieldOfObjectMovement) {
        if (arguments.length < 2) {
            throw new Error("ObjectMotionSubscribeError: calls with wrong quantity of arguments");
        }
        if (((subscribedElement instanceof Element) === false) || ((fieldOfObjectMovement instanceof Element) === false)) {
            throw new Error("ObjectMotionSubscribeError: calls with wrong type of arguments");
        }
        fieldOfObjectMovement.addEventListener("mousemove", (e) => {
            const subscribedElementRect = subscribedElement.getBoundingClientRect();
            const fieldOfObjectMovementRect = fieldOfObjectMovement.getBoundingClientRect();
            subscribedElement.style.left = (e.pageX - fieldOfObjectMovementRect.x - (subscribedElementRect.width / 2)) + "px";
            subscribedElement.style.top = (e.pageY - fieldOfObjectMovementRect.y - (subscribedElementRect.height / 2)) + "px";
        })
    }


    /* subscribe */

    subscribeTimeComponentChangingCurrentDate() {
        const timeComponent = document.getElementsByClassName("time-component")[0];
        const currentStateTimeMark = this.makeTimeString(this.getCurrentDate());
        const previousStateTimeMark = timeComponent.innerText;
        Controller.updateViewComponent(currentStateTimeMark, previousStateTimeMark, this.bindTimeComponentCurrentDate, this);
    }

    subscribeDateComponentChangingCurrentDate() {
        const dateComponent = document.getElementsByClassName("date-component")[0];
        const currentStateDateMark = this.makeDateString(this.getCurrentDate());
        const previousStateDateMark = dateComponent.innerText;
        Controller.updateViewComponent(currentStateDateMark, previousStateDateMark, this.bindDateComponentCurrentDate, this);
    }

    subscribeDateControlMonthChangingSelectedDate() {
        const currentStateSelectedMonthIncrement = this.getSelectedMonthIncrement();
        const previousStateSelectedMonthIncrement = this.getPreviousSelectedMonthIncrement();
        Controller.updateViewComponent(currentStateSelectedMonthIncrement, previousStateSelectedMonthIncrement, this.bindDateControlMonthSelectedDate, this);
        Controller.updateViewComponent(currentStateSelectedMonthIncrement, previousStateSelectedMonthIncrement, this.bindDateControlYearSelectedDate, this);
        Controller.updateViewComponent(currentStateSelectedMonthIncrement, previousStateSelectedMonthIncrement, this.bindDaysContainerSelectedDate, this);
        Controller.updateViewComponent(currentStateSelectedMonthIncrement, previousStateSelectedMonthIncrement, this.bindShowHideResetDateButton, this);
    }

    subscribeDateTimeSegmentChangeCurrentTime() {
        const activity = this.updateDateTimeSegment;
        const object = this;
        setInterval(function () {
            activity.call(object)
        }, 100);
    }


    /* init components */

    initTimetable() {
        const object = this;
        this.renderTimetableTree();


        this.bindDateControlMonthIncrement();
        this.bindDateControlMonthSelectedDate();
        this.bindDateControlYearSelectedDate();
        this.bindShowingResetDateButtonSelectedDate();
        this.fillDaysContainerSelectedDate();
        this.fillDaysOfWeekCaption();
        this.subscribeDateTimeSegmentChangeCurrentTime();
        this.bindMouthMove();
        const parent = Framework.getFirstElementByClassName("calendar-section__day-weather-segment")
        const currentWeatherModule = new CurrentWeatherModule(parent, { weather: object.getWeatherForecastData(), location: object.getUserLocationData() })

    };

}



