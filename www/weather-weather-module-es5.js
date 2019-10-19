(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-weather-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/weather/weather.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/weather/weather.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar  color=\"light\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>weather</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n\t<ion-grid class=\"ion-no-margin ion-no-padding\">\n\t\t<ion-row>\n\t\t\t<ion-col size-sm=6 offset-sm=3>\n\t\t\t\t<ion-segment (ionChange)=\"segmentChanged($event)\" color=\"light\">\n\t\t\t\t\t<ion-segment-button value=\"home\" checked>\n\t\t\t\t\t\t\t<ion-label>Home </ion-label>\n\t\t\t\t\t\t<ion-icon name=\"home\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\n\t\t\t\t\t<ion-segment-button value=\"work\">\n\t\t\t\t\t\t\t<ion-label>Work </ion-label>\n\t\t\t\t\t\t<ion-icon name=\"business\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\n\t\t\t\t</ion-segment>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size-sm=6 offset-sm=3 class=\"ion-no-margin ion-no-padding\">\n\t\t\t\t\t<div *ngIf=\"currentView == 'home'\">\n\t\t\t\t\t\t<div *ngFor=\"let wData of homeplacesMasterData\">\n\t\t\t\t\t\t\t<ion-card >\n\t\t\t\t\t\t\t\t<ion-card-header class=\"whiteColor\" class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle  [ngClass]=\"['icon', 'icon-',wData.currently.icon]\">{{wData.currently.summary}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t\t<ion-card-title>{{wData.currently.apparentTemperature}} <span class=\"icon degreecelsius\"></span></ion-card-title>\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle class=\"ion-text-uppercase\">{{homeLocationText}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t\t<div class=\"backgroudFill\">\n\t\t\t\t\t\t\t<ion-list *ngFor=\"let day of wData.daily.data;let i = index\">\n\t\t\t\t\t\t\t\t<div class=\"item-content\" detail [routerLink]=\"[day.time]\">\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-start left\" [ngClass]=\"['icon',day.icon]\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.time  | utcConverter | date: 'EEEE, d MMM'}} </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-end right\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.apparentTemperatureHigh}} To {{day.apparentTemperatureLow}}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"currentView == 'work'\">\n\t\t\t\t\t\t<div *ngFor=\"let wData of workplacesMasterData\">\n\t\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t\t<ion-card-header class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle  [ngClass]=\"['icon', 'icon-',wData.currently.icon]\">{{wData.currently.summary}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t\t<ion-card-title>{{wData.currently.apparentTemperature}} <span class=\"icon degreecelsius\"></span></ion-card-title>\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle class=\"ion-text-uppercase\">{{workLocationText}}</ion-card-subtitle>\n\t\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t\t<div class=\"backgroudFill\">\n\t\t\t\t\t\t\t<ion-list *ngFor=\"let day of wData.daily.data;let i = index\">\n\t\t\t\t\t\t\t\t<div class=\"item-content\" detail [routerLink]=\"[day.time]\">\n\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-text-wrap\">\n\t\t\t\t\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-start left\" [ngClass]=\"['icon', 'icon-',day.icon]\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.time  | utcConverter | date: 'EEEE, d MMM'}} </div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ion-text-end right\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{day.apparentTemperatureHigh}} To {{day.apparentTemperatureLow}}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t\n\t</ion-grid>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_utc_converter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../pipes/utc-converter.pipe */ "./src/app/pipes/utc-converter.pipe.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weather_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather.page */ "./src/app/home/weather/weather.page.ts");








var routes = [
    {
        path: '',
        component: _weather_page__WEBPACK_IMPORTED_MODULE_7__["WeatherPage"]
    }
];
var WeatherPageModule = /** @class */ (function () {
    function WeatherPageModule() {
    }
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
    return WeatherPageModule;
}());



/***/ }),

/***/ "./src/app/home/weather/weather.page.scss":
/*!************************************************!*\
  !*** ./src/app/home/weather/weather.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left {\n  float: left !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.background {\n  --background: none;\n  background-image: url('bgImg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.51);\n}\n\nion-grid.ion-no-margin.ion-no-padding.md.hydrated {\n  background: #000000a6;\n}\n\nion-card {\n  padding: 40px 0;\n  box-shadow: none;\n  margin: 0;\n}\n\nion-card-subtitle, ion-card-title {\n  color: #ffffff;\n  font-size: 17px;\n}\n\nion-card-title {\n  font-size: 35px;\n}\n\nion-card-header.whiteColor {\n  color: #ffffff;\n}\n\n.backgroudFill {\n  padding: 0 15px;\n  color: #fff;\n}\n\nion-list, ion-item {\n  background: transparent;\n  border-bottom: 1px solid #031e35;\n  padding: 20px 15px;\n}\n\n.item .item-content {\n  background-color: transparent !important;\n}\n\n.item-content .icon {\n  padding-left: 30px;\n}\n\n.item-content .icon:before {\n  color: #42a8de;\n  top: 10px;\n  font-size: 38px;\n  position: absolute;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvaW9uV2VhdGhlcjIuMC9pb25XZWF0aGVyQXBwLTEvc3JjL2FwcC9ob21lL3dlYXRoZXIvd2VhdGhlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvd2VhdGhlci93ZWF0aGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0FDTUo7O0FESEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDTUo7O0FEREE7RUFDSSx3Q0FBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7QUNLSjs7QURIRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93ZWF0aGVyL3dlYXRoZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnR7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0e1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZ0ltZy5qcGcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTEpO1xufVxuaW9uLWdyaWQuaW9uLW5vLW1hcmdpbi5pb24tbm8tcGFkZGluZy5tZC5oeWRyYXRlZCB7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGE2O1xufVxuaW9uLWNhcmR7XG4gICAgcGFkZGluZzogNDBweCAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuaW9uLWNhcmQtc3VidGl0bGUsaW9uLWNhcmQtdGl0bGV7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuaW9uLWNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuaW9uLWNhcmQtaGVhZGVyLndoaXRlQ29sb3J7XG4gICAgY29sb3I6ICNmZmZmZmY7IFxufVxuXG4uYmFja2dyb3VkRmlsbHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1saXN0LCBpb24taXRlbXtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAzMWUzNTtcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG59XG5cblxuXG4uaXRlbSAuaXRlbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG4gIC5pdGVtLWNvbnRlbnQgLmljb24ge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbiAgLml0ZW0tY29udGVudCAuaWNvbjpiZWZvcmUge1xuICAgIGNvbG9yOiAjNDJhOGRlO1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG59IiwiLmxlZnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnSW1nLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MSk7XG59XG5cbmlvbi1ncmlkLmlvbi1uby1tYXJnaW4uaW9uLW5vLXBhZGRpbmcubWQuaHlkcmF0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTY7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogNDBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlLCBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIud2hpdGVDb2xvciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYmFja2dyb3VkRmlsbCB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1saXN0LCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAzMWUzNTtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xufVxuXG4uaXRlbSAuaXRlbS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tY29udGVudCAuaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLml0ZW0tY29udGVudCAuaWNvbjpiZWZvcmUge1xuICBjb2xvcjogIzQyYThkZTtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDM4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn0iXX0= */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../places.service */ "./src/app/home/places.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _WeatherService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../WeatherService */ "./src/app/home/WeatherService.ts");





var WeatherPage = /** @class */ (function () {
    function WeatherPage(weatherservice, placesservice) {
        this.weatherservice = weatherservice;
        this.placesservice = placesservice;
        this.workplacesMasterData = [];
        this.homeplacesMasterData = [];
        this.homeLocationText = this.placesservice.homeLocationData[0].location;
        this.workLocationText = this.placesservice.workLocationData[0].location;
        this.homeLat = this.placesservice.homeLocationData[0].homepre.lat;
        this.homeLng = this.placesservice.homeLocationData[0].homepre.lng;
        this.workLat = this.placesservice.workLocationData[0].workpre.lat;
        this.workLng = this.placesservice.workLocationData[0].workpre.lng;
        this.currentView = 'home';
    }
    WeatherPage.prototype.ngOnInit = function () {
        this.getPlacesweatherData(this.workLat, this.workLng, this.workplacesMasterData);
        this.getPlacesweatherData(this.homeLat, this.homeLng, this.homeplacesMasterData);
    };
    WeatherPage.prototype.getPlacesweatherData = function (lat, lng, storeData) {
        this.weatherservice.getWeatherData(lat, lng).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) { return x; })).subscribe(function (abc) {
            storeData.push(abc);
        });
    };
    WeatherPage.prototype.segmentChanged = function ($event) {
        this.currentView = $event.detail.value;
    };
    WeatherPage.ctorParameters = function () { return [
        { type: _WeatherService__WEBPACK_IMPORTED_MODULE_4__["WeatherService"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
    ]; };
    WeatherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! raw-loader!./weather.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/weather/weather.page.html"),
            styles: [__webpack_require__(/*! ./weather.page.scss */ "./src/app/home/weather/weather.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_WeatherService__WEBPACK_IMPORTED_MODULE_4__["WeatherService"], _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
    ], WeatherPage);
    return WeatherPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtcConverterPipe = /** @class */ (function () {
    function UtcConverterPipe() {
    }
    UtcConverterPipe.prototype.transform = function (value, args) {
        var d = new Date(0);
        d.setUTCSeconds(value);
        return d;
    };
    UtcConverterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'utcConverter'
        })
    ], UtcConverterPipe);
    return UtcConverterPipe;
}());



/***/ })

}]);
//# sourceMappingURL=weather-weather-module-es5.js.map