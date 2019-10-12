(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-weather-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/weather/weather.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/weather/weather.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar  color=\"light\">\n\t\t<ion-title>weather</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<ion-grid class=\"ion-no-margin ion-no-padding\">\n\t\t<ion-row>\n\t\t\t<ion-col size-sm=6 offset-sm=3>\n\t\t\t\t<ion-segment (ionChange)=\"segmentChanged($event)\" color=\"light\">\n\t\t\t\t\t<ion-segment-button value=\"home\" checked>\n\t\t\t\t\t\t<ion-icon name=\"home\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\n\t\t\t\t\t<ion-segment-button value=\"work\">\n\t\t\t\t\t\t<ion-icon name=\"business\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\n\t\t\t\t</ion-segment>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size-sm=6 offset-sm=3 class=\"ion-no-margin ion-no-padding\">\n\t\t\t\t\t<div *ngIf=\"currentView == 'home'\">\n\t\t\t\t\t\t<div *ngFor=\"let wData of homeplacesMasterData\">\n\t\t\t\t\t\t\t<ion-card >\n\t\t\t\t\t\t\t\t<ion-card-header class=\"whiteColor\" class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle  [ngClass]=\"['icon', 'icon-',wData.currently.icon]\">{{wData.currently.summary}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t\t<ion-card-title>{{wData.currently.apparentTemperature}} <span class=\"icon degreecelsius\"></span></ion-card-title>\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle class=\"ion-text-uppercase\">{{homeLocation}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t\t<div class=\"backgroudFill\">\n\t\t\t\t\t\t\t<ion-list *ngFor=\"let day of wData.daily.data;let i = index\">\n\t\t\t\t\t\t\t\t<div class=\"item-content\" detail [routerLink]=\"[day.time]\">\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-start left\" [ngClass]=\"['icon',day.icon]\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.time  | utcConverter | date: 'EEEE, d MMM'}} </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-end right\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.apparentTemperatureHigh}} To {{day.apparentTemperatureLow}}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"currentView == 'work'\">\n\t\t\t\t\t\t<div *ngFor=\"let wData of workplacesMasterData\">\n\t\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t\t<ion-card-header class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle  [ngClass]=\"['icon', 'icon-',wData.currently.icon]\">{{wData.currently.summary}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t\t<ion-card-title>{{wData.currently.apparentTemperature}} <span class=\"icon degreecelsius\"></span></ion-card-title>\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle class=\"ion-text-uppercase\">{{workLocation}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t\t<div class=\"backgroudFill\">\n\t\t\t\t\t\t\t<ion-list *ngFor=\"let day of wData.daily.data;let i = index\">\n\t\t\t\t\t\t\t\t<div class=\"item-content\" detail [routerLink]=\"[day.time]\">\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-start left\" [ngClass]=\"['icon', 'icon-',day.icon]\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.time  | utcConverter | date: 'EEEE, d MMM'}} </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-end right\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.apparentTemperatureHigh}} To {{day.apparentTemperatureLow}}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/weather/weather.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/weather/weather.module.ts ***!
  \************************************************/
/*! exports provided: WeatherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPageModule", function() { return WeatherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pipes_utc_converter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../pipes/utc-converter.pipe */ "./src/app/pipes/utc-converter.pipe.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weather_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather.page */ "./src/app/home/weather/weather.page.ts");








const routes = [
    {
        path: '',
        component: _weather_page__WEBPACK_IMPORTED_MODULE_7__["WeatherPage"]
    }
];
let WeatherPageModule = class WeatherPageModule {
};
WeatherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_weather_page__WEBPACK_IMPORTED_MODULE_7__["WeatherPage"], _pipes_utc_converter_pipe__WEBPACK_IMPORTED_MODULE_5__["UtcConverterPipe"]]
    })
], WeatherPageModule);



/***/ }),

/***/ "./src/app/home/weather/weather.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/weather/weather.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left {\n  float: left !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.background {\n  --background: none;\n  background-image: url('bgImg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.51);\n}\n\nion-grid.ion-no-margin.ion-no-padding.md.hydrated {\n  background: #000000a6;\n}\n\nion-card {\n  padding: 40px 0;\n  box-shadow: none;\n  margin: 0;\n}\n\nion-card-subtitle, ion-card-title {\n  color: #ffffff;\n  font-size: 17px;\n}\n\nion-card-title {\n  font-size: 35px;\n}\n\nion-card-header.whiteColor {\n  color: #ffffff;\n}\n\n.backgroudFill {\n  padding: 0 15px;\n  color: #fff;\n}\n\nion-list, ion-item {\n  background: transparent;\n  border-bottom: 1px solid #031e35;\n  padding: 20px 15px;\n}\n\n.item .item-content {\n  background-color: transparent !important;\n}\n\n.item-content .icon {\n  padding-left: 30px;\n}\n\n.item-content .icon:before {\n  color: #42a8de;\n  top: 10px;\n  font-size: 38px;\n  position: absolute;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvaW9uV2VhdGhlci9zcmMvYXBwL2hvbWUvd2VhdGhlci93ZWF0aGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS93ZWF0aGVyL3dlYXRoZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDTUo7O0FESEE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QUREQTtFQUNJLHdDQUFBO0FDSUo7O0FERkU7RUFDRSxrQkFBQTtBQ0tKOztBREhFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dlYXRoZXIvd2VhdGhlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ucmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnSW1nLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MSk7XG59XG5pb24tZ3JpZC5pb24tbm8tbWFyZ2luLmlvbi1uby1wYWRkaW5nLm1kLmh5ZHJhdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTY7XG59XG5pb24tY2FyZHtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG5pb24tY2FyZC1zdWJ0aXRsZSxpb24tY2FyZC10aXRsZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5pb24tY2FyZC1oZWFkZXIud2hpdGVDb2xvcntcbiAgICBjb2xvcjogI2ZmZmZmZjsgXG59XG5cbi5iYWNrZ3JvdWRGaWxse1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWxpc3QsIGlvbi1pdGVte1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDMxZTM1O1xuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbn1cblxuXG5cbi5pdGVtIC5pdGVtLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLml0ZW0tY29udGVudCAuaWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuICAuaXRlbS1jb250ZW50IC5pY29uOmJlZm9yZSB7XG4gICAgY29sb3I6ICM0MmE4ZGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbn0iLCIubGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdJbWcuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUxKTtcbn1cblxuaW9uLWdyaWQuaW9uLW5vLW1hcmdpbi5pb24tbm8tcGFkZGluZy5tZC5oeWRyYXRlZCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhNjtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUsIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlci53aGl0ZUNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5iYWNrZ3JvdWRGaWxsIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWxpc3QsIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDMxZTM1O1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG59XG5cbi5pdGVtIC5pdGVtLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1jb250ZW50IC5pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uaXRlbS1jb250ZW50IC5pY29uOmJlZm9yZSB7XG4gIGNvbG9yOiAjNDJhOGRlO1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/weather/weather.page.ts":
/*!**********************************************!*\
  !*** ./src/app/home/weather/weather.page.ts ***!
  \**********************************************/
/*! exports provided: WeatherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPage", function() { return WeatherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../places.service */ "./src/app/home/places.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _WeatherService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../WeatherService */ "./src/app/home/WeatherService.ts");




let WeatherPage = class WeatherPage {
    constructor(weatherservice, placesservice) {
        this.weatherservice = weatherservice;
        this.placesservice = placesservice;
        this.weatherData = [];
        this.workplacesMasterData = [];
        this.homeplacesMasterData = [];
        this.workLocation = '';
        this.homeLocation = '';
        this.currentView = 'home';
    }
    ngOnInit() {
        this.workLocation = this.placesservice.workLocation;
        this.homeLocation = this.placesservice.homeLocation;
        // this.workLocation = "thane";
        // this.homeLocation = "kurla";
        this.getPlacesweatherData(this.workLocation, this.workLocationLatLng, this.workplacesMasterData);
        this.getPlacesweatherData(this.homeLocation, this.homeLocationLatLng, this.homeplacesMasterData);
    }
    getPlacesweatherData(worklocation, latlan, storeData) {
        this.placesservice.getLatLongs(worklocation)
            .subscribe(abc => {
            latlan = abc['results'][0].geometry.location;
            let data = this.weatherservice.getWeatherData(latlan.lat, latlan.lng);
            data.subscribe(abc => {
                storeData.push(abc);
            });
        });
    }
    segmentChanged($event) {
        this.currentView = $event.detail.value;
    }
};
WeatherPage.ctorParameters = () => [
    { type: _WeatherService__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"] }
];
WeatherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! raw-loader!./weather.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/weather/weather.page.html"),
        styles: [__webpack_require__(/*! ./weather.page.scss */ "./src/app/home/weather/weather.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_WeatherService__WEBPACK_IMPORTED_MODULE_3__["WeatherService"], _places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"]])
], WeatherPage);



/***/ }),

/***/ "./src/app/pipes/utc-converter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/utc-converter.pipe.ts ***!
  \*********************************************/
/*! exports provided: UtcConverterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtcConverterPipe", function() { return UtcConverterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtcConverterPipe = class UtcConverterPipe {
    transform(value, args) {
        var d = new Date(0);
        d.setUTCSeconds(value);
        return d;
    }
};
UtcConverterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'utcConverter'
    })
], UtcConverterPipe);



/***/ })

}]);
//# sourceMappingURL=weather-weather-module-es2015.js.map