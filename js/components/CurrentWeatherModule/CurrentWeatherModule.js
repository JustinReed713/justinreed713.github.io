"use strict";

class CurrentWeatherModule {
    constructor(parentElement, props) {
        this.state = {
            currentWeather: props.weather,
            currentLocation: props.location
        }
        this.parentElement = parentElement;
        this.props = props;
        this.initWeatherModule();
    }

    renderWeatherModuleDomTree() {
        const parent = this.parentElement;
        const injectedHTML = `<div class="day-weather-segment__update-info"><span class="last-update-time"></span></div>
                                <div class="temperature-icon-container day-weather-segment__temperature-icon-wrapper common-flex-row-between-center">
                                    <div class="temperature-section temperature-icon-container__temperature-section common-flex-column">
                                        <div class="current-temperature temperature-section__current-temperature common-flex-center-center">
                                            <div class="current-temperature__caption"></div>
                                            <div class="current-temperature__measure-units">&#8451;</div>
                                        </div>
                                        <div class="feels-like-temperature temperature-section__feels-like-temperature common-flex-center-center">
                                            <div class="feels-like-temperature__description">Feels</div>
                                            <div class="feels-like-temperature__caption"></div>
                                        </div>
                                    </div>
                                    <div class="temperature-icon-wrapper__weather-icon"></div>
                                </div>
                                <div class="day-weather-segment__weather-description"></div>
                                <div class="day-weather-segment__location"></div>`;
        Framework.transitPortalContent(parent, injectedHTML);
    }

    fillWeatherInfo() {
        const dayTemperature = Framework.getFirstElementByClassName("current-temperature__caption");
        const dayTemperatureValue = Math.round(this.state.currentWeather.current.temp);
        Framework.injectElementInnerText(dayTemperature, dayTemperatureValue)
        const weatherIcon = Framework.getFirstElementByClassName("temperature-icon-wrapper__weather-icon");
        const weatherIconValue = this.state.currentWeather.current.weather[0].icon;
        Framework.setDomElementAttribute(weatherIcon, `background-image: url("http://openweathermap.org/img/wn/${weatherIconValue}@2x.png");`, "style");
        const weatherDescription = Framework.getFirstElementByClassName("day-weather-segment__weather-description");
        const weatherDescriptionValue = this.state.currentWeather.current.weather[0].description;
        Framework.injectElementInnerText(weatherDescription, `"${weatherDescriptionValue}"`);
        const feelsLike = Framework.getFirstElementByClassName("feels-like-temperature__caption");
        const feelsLikeValue = Math.round(this.state.currentWeather.current.feels_like);
        Framework.injectElementInnerText(feelsLike, feelsLikeValue);
        const location = Framework.getFirstElementByClassName("day-weather-segment__location");
        const locationValue = this.state.currentLocation.response.GeoObjectCollection.featureMember[0].GeoObject.description
        Framework.injectElementInnerText(location, locationValue);
    }

    initWeatherModule() {
        this.renderWeatherModuleDomTree();
        this.fillWeatherInfo();
    }


}
