"use strict";

class LocalStorage {

    constructor(key) {
        this._storage = window.localStorage;
        this._storageKey = key;
    }

    setDataAtStorage(data) {
        this._storage.setItem(this._storageKey, JSON.stringify(data));
        return this._storage
    }

    getDataFromStorage() {
        return JSON.parse(this._storage.getItem(this._storageKey));
    }

    clearDataFromStorage() {
        this._storage.removeItem(this._storageKey);
        return this._storage
    }

    updateDataAtStorage(data) {
        let currentDataAtStorage = this.getDataFromStorage();
        Object.assign(currentDataAtStorage, data);
        return this.setDataAtStorage(currentDataAtStorage);
    }
}

class SessionStorage {

}


class Framework {
    /**
     * Finds entries indexes of injected string in HTML code. Matches by array with start and end match strings.
     * @param {string} injectedHtmlCode - Source HTML code in string format.
     * @param {Array} stringMatchArray - Array with match points of search injected string.
     */
    static searchEntriesPoints(injectedHtmlCode, stringMatchArray) {
        const firstEntryIndex = injectedHtmlCode.indexOf(stringMatchArray[0]);
        const secondEntryIndex = injectedHtmlCode.indexOf(stringMatchArray[1], firstEntryIndex) + stringMatchArray[1].length;
        return [firstEntryIndex, secondEntryIndex];
    }

    /**
     * Delete injected string from HTML code by array with start and end match points.
     * @param {string} injectedHtmlCode - Source HTML code in string format.
     * @param {Array} stringMatchArray - Array with match points of search injected string.
     */
    static deleteInjectedString(injectedHtmlCode, stringMatchArray) {
        const entriesArray = Framework.searchEntriesPoints(injectedHtmlCode, stringMatchArray);
        const firstPartString = injectedHtmlCode.slice(0, entriesArray[0]);
        const secondPartString = injectedHtmlCode.slice(entriesArray[1]);
        return firstPartString.concat(secondPartString);
    }

    /**
     * Search and delete injected script in HTML code string.
     * @param {string} injectedHtmlCode - Source HTML code in string format.
     */
    static portalXssDefence(injectedHtmlCode) {
        const scriptMatchArray = ["<script", "/script>"];
        if (injectedHtmlCode.includes(scriptMatchArray[0])) {
            while (injectedHtmlCode.includes(scriptMatchArray[0])) {
                injectedHtmlCode = Framework.deleteInjectedString(injectedHtmlCode, scriptMatchArray)
            }
        }
        return injectedHtmlCode
    }

    /**
     * Creates DOM element with selected type.
     * @param {string} type - Type of created element.
     */
    static createDomElement(type) {
        return document.createElement(type);
    }

    /**
     * Creates "div" DOM element.
     */
    static createDivElement() {
        return Framework.createDomElement("div");
    }

    /**
     * Creates "input" DOM element.
     */
    static createInputElement() {
        return Framework.createDomElement("input");
    }

    /**
     * Set attribute at selected DOM element.
     * @param {Element} domElement - Selected DOM element.
     * @param {string} attributeValue - Value of inserted attribute.
     * @param {string} attributeName - Name of inserted attribute.
     */
    static setDomElementAttribute(domElement, attributeValue, attributeName) {
        domElement.setAttribute(attributeName, attributeValue);
        return domElement;
    }

    /**
     * Creates Input DOM element with selected type.
     * @param {string} inputType - Type of created Input DOM element.
     */
    static createDomInputElement(inputType = "text") {
        const inputElement = Framework.createInputElement();
        const inputElementAttribute = "type";
        return Framework.setDomElementAttribute(inputElement, inputType, inputElementAttribute);
    }

    /**
     * Set ID attribute at selected DOM element.
     * @param {Element} domElement - Selected DOM element.
     * @param {string} elementId - Selected ID element.
     */
    static setDomElementId(domElement, elementId) {
        return Framework.setDomElementAttribute(domElement, elementId, "id");
    }

    /**
     * Set CSS classes at class attribute of selected DOM element.
     * @param {Element} domElement - Selected DOM element.
     * @param {Array} classes - Array with names of selected CSS classes.
     */
    static setElementClass(domElement, classes) {
        domElement.classList.add(...classes);
        return domElement;
    }

    /**
     * Returns first element at document with selected class.
     * @param {string} classSelector - Class selector of sought element.
     */
    static getFirstElementByClassName(classSelector) {
        return document.getElementsByClassName(classSelector)[0];
    }

    /**
     * Injects HTML code at selected DOM element.
     * @param {Element} domElement - Selected DOM element.
     * @param {string} htmlCode - Injected HTML code.
     */
    static injectElementInnerHtml(domElement, htmlCode) {
        domElement.innerHTML = Framework.portalXssDefence(htmlCode);
        return domElement;
    }

    static concatElementInnerHtml(domElement, htmlCode) {
        domElement.innerHTML += Framework.portalXssDefence(htmlCode);
        return domElement;
    }

    /**
     * Clear inner HTML code of selected DOM element.
     * @param {Element} domElement - Selected DOM element.
     */
    static clearElementInnerHtml(domElement) {
        domElement.innerHTML = "";
        return domElement;
    }

    /**
     * Injects string at selected DOM element.
     * @param {Element} domElement - Selected DOM element.
     * @param {(string|number)} text - Injected text.
     */
    static injectElementInnerText(domElement, text) {
        domElement.innerText = text;
        return domElement;
    }

    /**
     * Updates selected DOM element.
     * @param {Element} domElement - Selected DOM element.
     * @param {Array} classes - Array with classes used to element.
     * @param {(string|number)} text - Text inside element.
     */
    static updateDomElement(domElement, classes = [], text = "") {
        Framework.setElementClass(domElement, classes);
        Framework.injectElementInnerText(domElement, text);
        return domElement;
    }

    /**
     * Append selected DOM element to parent DOM element.
     * @param {Element} parentElement - Parent DOM element.
     * @param {Element} domElement - Appended DOM element.
     */
    static attachDomElement(parentElement, domElement) {
        parentElement.appendChild(domElement);
    }

    /**
     * 
     * @param {*} domElement 
     */
    static unmountDomElement(domElement) {
        domElement.remove()
    }

    /**
     * Creates "div" element as a Portal
     * @param {Array} portalClasses - Array with classes used to created portal element.
     */
    static createPortalElement(portalClasses) {
        const portal = Framework.createDivElement();
        return Framework.updateDomElement(portal, portalClasses, "");
    }

    /**
     * Injects HTML code at selected Portal element.
     * @param {Element} portalElement - Portal DOM element.
     * @param {string} portalContent - String with HTML code.
     */
    static transitPortalContent(portalElement, portalContent) {
        Framework.injectElementInnerHtml(portalElement, portalContent);
    }

    /**
     * Deploys Portal element inside of selected parent DOM element, with selected Class selectors and injected HTML code.
     * @param {Element} parentElement - Parent DOM element of deployed Portal.
     * @param {Array} portalClasses - Main Class selectors of deployed Portal.
     * @param {string} portalContent - Injected HTML code.
     * @param {Array} additionalPortalClasses - Additional Class selectors of deployed Portal.
     */
    static deployPortal(parentElement, portalClasses, portalContent, additionalPortalClasses = []) {
        const portal = Framework.createPortalElement(portalClasses);
        Framework.setElementClass(portal, additionalPortalClasses);
        Framework.attachDomElement(parentElement, portal);
        Framework.transitPortalContent(portal, portalContent);
    }

    /**
     * Finds parent DOM element by selected Class selector. Creates Portal element with additional Class selectors inside parent DOM element. Injects HTML code inside deployed Portal element.
     * @param {string} parentClass - Class selector of parent DOM element.
     * @param {Array} additionalPortalClasses - Additional Class selectors of deployed Portal.
     * @param {string} portalContent - Injected HTML code.
     * @param {Array} portalClass - Main Class selectors of deployed Portal.
     */
    static initDomPortal(parentClass, additionalPortalClasses, portalContent, portalClass) {
        const parentElement = Framework.getFirstElementByClassName(parentClass);
        Framework.deployPortal(parentElement, portalClass, portalContent, additionalPortalClasses);
        return parentElement;
    }

    static setActivityListener(domElement, typeActivity, activity) {
        domElement.addEventListener(typeActivity, activity)
    }

    static setClickActivity(domElement, activity) {
        Framework.setActivityListener(domElement, "click", activity)
    }

    /**
     * Returns number of days in selected month. If calls without argument, or not Date type(instance), will return number of days in current month.
     * @param {Date} date - Date object with selected year and month.
     */
    static getDaysInMonth(date) {
        if ((date instanceof Date) === false) {
            date = new Date();
        }
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    /**
     * Returns number of days in month before selected. If calls without argument, or not Date type(instance), will return number of days in month before current.
     * @param {Date} date - Date object with selected year and month.
     */
    static getDaysInPreviousMonth(date) {
        if ((date instanceof Date) === false) {
            date = new Date();
        }
        return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    };

    /**
     * Returns the first day of the week of a selected month, where 0 is Sunday. If calls without argument, or not Date type(instance), will return the first day of the week of a current month.
     * @param {Date} date - Date object with selected year and month.
     */
    static getFirstDayOfMonth(date) {
        if ((date instanceof Date) === false) {
            date = new Date();
        }
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    /**
     * Returns the last day of the week of a selected month, where 0 is Sunday. If calls without argument, or not Date type(instance), will return the last day of the week of a current month.
     * @param {Date} date - Date object with selected year and month.
     */
    static getLastDayOfMonth(date) {
        if ((date instanceof Date) === false) {
            date = new Date();
        }
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    };
}

class Controller {
    /**
     * Compare previous and current state of DOM element and execute function if states are different.
     * @param {*} currentState 
     * @param {*} previousState 
     * @param {Function} subscribedFunction 
     * @param {Object} object 
     */
    static updateViewComponent(currentState, previousState, subscribedFunction, object) {
        if (typeof currentState === "string") {
            currentState = currentState.toLowerCase();
            previousState = previousState.toLowerCase();
        }
        const jsonCurrentState = JSON.stringify(currentState);
        const jsonPreviousState = JSON.stringify(previousState);
        const subscribedFunctionSubstance = subscribedFunction.bind(object);
        if (jsonCurrentState !== jsonPreviousState) {
            subscribedFunctionSubstance();
        }
    }

    static subscribeValueChange(value, valueActivity, subscribedDomElements) {

    }
}


// static updateElement(currentState, previousState, subscribedFunction, object) {
//     
// }





class BeautifiedButton {
    static renderDomButton(captionText, additionalClasses, iconHtmlCode) {
        if ((captionText !== "") || (iconHtmlCode !== "")) {
            const button = Framework.createDivElement();
            Framework.updateDomElement(button, ["beautified-button", "beautified-button__wrapper", "common-flex-center-center"], "");
            Framework.setElementClass(button, additionalClasses);
            if (iconHtmlCode !== "") {
                const icon = Framework.createDivElement();
                Framework.injectElementInnerHtml(icon, iconHtmlCode);
                Framework.attachDomElement(button, icon);
            }
            if (captionText !== "") {
                const caption = Framework.createDivElement();
                Framework.updateDomElement(caption, ["beautified-button__button-caption"], captionText);
                if (iconHtmlCode !== "") {
                    Framework.setElementClass(caption, ["common_margin-left_5px"])
                }
                Framework.attachDomElement(button, caption);
            }
            return button;
        } else {
            throw new Error("BeautifiedButtonError: Wrong count of arguments. Nothing to render.");
        }
    }

    static subscribeButtonActivities(domElement, activity) {
        Framework.setClickActivity(domElement, activity)
    }

    static bindClickAnimation(domElement) {
        domElement.addEventListener("click", () => {
            const ripple = Framework.createDivElement();
            Framework.setElementClass(ripple, ["beautified-button__ripple"]);
            domElement.appendChild(ripple);
            const domElementPosition = domElement.getBoundingClientRect();
            const offsetX = event.clientX - domElementPosition.left;
            const offsetY = event.clientY - domElementPosition.top;
            ripple.style.left = offsetX + "px";
            ripple.style.top = offsetY + "px";
            setTimeout(() => {
                ripple.remove();
            }, 300);
        })
    }

    static new(parentElement, caption, activity, additionalClasses, iconHtmlCode) {
        const button = BeautifiedButton.renderDomButton(caption, additionalClasses, iconHtmlCode);
        Framework.attachDomElement(parentElement, button);
        BeautifiedButton.subscribeButtonActivities(button, activity);
        BeautifiedButton.bindClickAnimation(button);
        return button
    }
}
