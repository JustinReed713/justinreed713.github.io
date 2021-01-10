"use strict";

// /**
//  * Injects current time mark as inner text at selected DOM Element.
//  * @param {Element} element - Element of DOM tree.
//  */
// function timeInjection(element) {
//     element.innerText = `${(new Date()).toLocaleTimeString()}`;
// };

// /**
//  * Injects current date mark (in DD MONTH YYYY format) as inner text at selected DOM Element.
//  * @param {Element} element - Element of DOM tree.
//  */
// function dateInjection(element) {
//     const monthArrayEn = [
//         "january",
//         "february",
//         "march",
//         "april",
//         "may",
//         "june",
//         "july",
//         "august",
//         "september",
//         "october",
//         "november",
//         "december"
//     ];
//     const timeMark = new Date();
//     element.innerText = `${timeMark.getDate()} ${monthArrayEn[timeMark.getMonth()]} ${timeMark.getFullYear()}`;
// };

// /**
//  * Returns number of days in selected month. If calls without argument, or not Date type(instance), will return number of days in current month.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function getDaysInMonth(date) {
//     if ((date instanceof Date) === false) {
//         date = new Date();
//     }
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// };

// /**
//  * Returns number of days in month before selected. If calls without argument, or not Date type(instance), will return number of days in month before current.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function getDaysInPreviousMonth(date) {
//     if ((date instanceof Date) === false) {
//         date = new Date();
//     }
//     return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
// };

// /**
//  * Returns the first day of the week of a selected month, where 0 is Sunday. If calls without argument, or not Date type(instance), will return the first day of the week of a current month.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function getFirstDayOfMonth(date) {
//     if ((date instanceof Date) === false) {
//         date = new Date();
//     }
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
// };

// /**
//  * Returns the last day of the week of a selected month, where 0 is Sunday. If calls without argument, or not Date type(instance), will return the last day of the week of a current month.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function getLastDayOfMonth(date) {
//     if ((date instanceof Date) === false) {
//         date = new Date();
//     }
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
// };

/**
 * Creates DOM element with selected type. If calls without arguments create <div> element.
 * @param {string} type - Type of created element.
 */
function createDomElement(type = "div") {
    return document.createElement(type);
}

/**
 * Updates selected DOM element.
 * @param {Element} domElement - Selected DOM element.
 * @param {Array} classes - Array with classes used to element.
 * @param {(string|number)} text - Text inside element.
 */
function updateDomElement(domElement, classes = [], text = "") {
    domElement.classList.add(...classes);
    domElement.innerText = text;
}

/**
 * Append selected DOM element to parent DOM element.
 * @param {Element} parentElement - Parent DOM element.
 * @param {Element} domElement - Appended DOM element.
 */
function attachDomElement(parentElement, domElement) {
    parentElement.appendChild(domElement);
}

/**
 * Creates element with selected type, classes, inner text and appends at parent element.
 * @param {string} type - Type of created element.
 * @param {Element} parent - Parent of created element.
 * @param {Array} classes - Array with classes used to element.
 * @param {(string|number)} text - Text inside element.
 */
function constructElement(type, parent, classes, text = "") {
    if (arguments.length < 4) {
        throw new Error("constructElementError: Function calls with wrong quantity of arguments.");
    }
    if ((typeof type !== "string") || ((parent instanceof Element) === false) || (Array.isArray(classes) === false) || ((typeof text !== "string") && (typeof text !== "number"))) {
        throw new Error("constructElementError: Function calls with wrong type of arguments.");
    }
    const element = createDomElement(type);
    updateDomElement(element, classes, text);
    attachDomElement(parent, element);
    return element;
}

// /**
//  * Creates component 'day-box' as a child of parent element, with selected text inside 'day-box__date' element. Block 'day-box' may contain additional classes. 
//  * @param {(string | number)} text - Text inside element.
//  * @param {Element} parent - Parent of created element.
//  * @param {Array} additionalClasses - Array with classes used to block 'day-box'.
//  */
// function dayBoxCreate(text, parent, additionalClasses = []) {
//     const domElementStructureByLevels = [
//         {
//             type: "div",
//             classes: ["day-box", "common-flex-center-center"].concat(additionalClasses)
//         },
//         {
//             type: "div",
//             classes: ["day-box__content", "common-flex-center-center"]
//         },
//         {
//             type: "div",
//             classes: ["day-box__date"]
//         }
//     ];
//     const dayBoxBlock = constructElement(domElementStructureByLevels[0].type, parent, domElementStructureByLevels[0].classes, "");
//     const dayBoxElementContent = constructElement(domElementStructureByLevels[1].type, dayBoxBlock, domElementStructureByLevels[1].classes, "");
//     const dayBoxElementDate = constructElement(domElementStructureByLevels[2].type, dayBoxElementContent, domElementStructureByLevels[2].classes, text);
//     return dayBoxBlock;
// }

// /**
//  * Creates elements array with day of the week inside selected element-container.
//  * @param {Element} elementContainer - Parent of created elements array.
//  */
// function fillCalendarHeader(elementContainer) {
//     const dayArrayEn = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday"
//     ];
//     for (const item of dayArrayEn) {
//         dayBoxCreate(item.slice(0, 3), elementContainer, ["day-box_borderless"]);
//     }
// }


// /**
//  * Creates elements array with day of the previous month from selected date inside selected element-container.
//  * @param {Element} container - Parent of created elements array.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function fillPreviousMonth(container, date) {
//     const firstDayCurrentMonth = getFirstDayOfMonth(date);
//     let index = (firstDayCurrentMonth === 0) ? 7 : firstDayCurrentMonth;
//     let lastMonthDaysCount = getDaysInPreviousMonth(date) - index + 1;
//     while (index > 0) {
//         dayBoxCreate(lastMonthDaysCount, container, ["day-box_color_other-month"]);
//         index--;
//         lastMonthDaysCount++;
//     }
// }

// /**
//  * Creates elements array with day of the current month of selected date inside selected element-container.
//  * @param {Element} container - Parent of created elements array.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function fillCurrentMonth(container, date) {
//     let index = 1;
//     const currentDay = date.getDate();
//     while (index <= getDaysInMonth(date)) {
//         let additionalClass = (index === currentDay) ? ["day-box_active"] : [];
//         dayBoxCreate(index, container, additionalClass);
//         index++;
//     }
// }

// /**
//  * Creates elements array with day of the next month from selected date inside selected element-container.
//  * @param {Element} container - Parent of created elements array.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function fillNextMonth(container, date) {
//     let index = 1;
//     let count = ((getLastDayOfMonth(date) === 6) ? 43 : ((container.childElementCount < 36) ? 36 : 43));
//     while (container.childElementCount < count) {
//         dayBoxCreate(index, container, ["day-box_color_other-month"]);
//         index++;
//     }
// }

// /**
//  * /**
//  * Creates elements array with day of the month inside selected element-container.
//  * @param {Element} elementContainer - Parent of created elements array.
//  * @param {Date} date - Date object with selected year and month.
//  */
// function fillDaysOfMonth(elementContainer, date) {
//     if ((date instanceof Date) === false) {
//         date = new Date();
//     }
//     fillPreviousMonth(elementContainer, date);
//     fillCurrentMonth(elementContainer, date);
//     fillNextMonth(elementContainer, date);
// }

/**
 * Subscribes geometric center of selected element to mouse move at movement field.
 * @param {Element} subscribedElement - Element that subscribed to mouse.
 * @param {Element} fieldOfObjectMovement - Element inside that subscribed element move. 
 */
function subscribeToMouseMove(subscribedElement, fieldOfObjectMovement) {
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

/**
 * Injects timetable HTML code into element-portal with selector "timetable-section".
 */
function createTimeTablePortal() {
    const timeTableHtml = `<div class="date-time-segment timetable-section_date-time-segment">
                                <div class="time-component date-time-segment__time-component"></div>
                                <div class="date-component date-time-segment__date-component"></div>
                           </div>
                           <div class="calendar-segment timetable-section__calendar-segment common-flex-column-center-center">
                                <div class="calendar-header calendar-segment__calendar-header common-flex-row-align"></div>
                                <div class="days-container calendar-segment__days-container common-flex-row-align-wrap">
                                    <div class="days-container__background"></div>
                                </div>
                            </div>
                            <div class="settings-segment timetable-section__settings-segment">
                            </div>`;
    createPortal("timetable-section", timeTableHtml);
}

/**
 * Attach activities to element Timetable such as display current time, current date, show days of the month.
 */
function attachTimeTableActivities() {
    const timeComponent = document.getElementsByClassName("time-component")[0];
    const dateComponent = document.getElementsByClassName("date-component")[0];
    const calendarHeader = document.getElementsByClassName("days-week-header")[0];
    const daysContainer = document.getElementsByClassName("days-container")[0];
    const daysContainerBackground = document.getElementsByClassName("days-container__background")[0];
    //timeInjection(timeComponent);
    //setInterval(timeInjection, 1000, timeComponent);
    //dateInjection(dateComponent);
    //fillCalendarHeader(calendarHeader);
    //fillDaysOfMonth(daysContainer);
    //subscribeToMouseMove(daysContainerBackground, daysContainer);
}

/**
 * Creates element TimeTable.
 */
function initTimeTable() {
    // createTimeTablePortal();
    attachTimeTableActivities();
}



// -----------------  task - schedule -------------------- //


