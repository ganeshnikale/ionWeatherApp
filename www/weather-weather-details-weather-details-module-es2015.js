(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-weather-details-weather-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/weather/weather-details/weather-details.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/weather/weather-details/weather-details.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>weatherDetails</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size-sm=\"6\" offset-sm=\"3\">\n\t\t\t\t<ion-list *ngFor=\"let details of weatherDetails\">\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t{{details.summary}}\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/weather/weather-details/weather-details.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/weather/weather-details/weather-details.module.ts ***!
  \************************************************************************/
/*! exports provided: WeatherDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsPageModule", function() { return WeatherDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weather_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-details.page */ "./src/app/home/weather/weather-details/weather-details.page.ts");







const routes = [
    {
        path: '',
        component: _weather_details_page__WEBPACK_IMPORTED_MODULE_6__["WeatherDetailsPage"]
    }
];
let WeatherDetailsPageModule = class WeatherDetailsPageModule {
};
WeatherDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_weather_details_page__WEBPACK_IMPORTED_MODULE_6__["WeatherDetailsPage"]]
    })
], WeatherDetailsPageModule);



/***/ }),

/***/ "./src/app/home/weather/weather-details/weather-details.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/weather/weather-details/weather-details.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2VhdGhlci93ZWF0aGVyLWRldGFpbHMvd2VhdGhlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/weather/weather-details/weather-details.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/weather/weather-details/weather-details.page.ts ***!
  \**********************************************************************/
/*! exports provided: WeatherDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsPage", function() { return WeatherDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _WeatherService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../WeatherService */ "./src/app/home/WeatherService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WeatherDetailsPage = class WeatherDetailsPage {
    constructor(weatherservice, httpactive) {
        this.weatherservice = weatherservice;
        this.httpactive = httpactive;
        this.weatherDetails = [];
    }
    ngOnInit() {
    }
};
WeatherDetailsPage.ctorParameters = () => [
    { type: _WeatherService__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
WeatherDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-details',
        template: __webpack_require__(/*! raw-loader!./weather-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/weather/weather-details/weather-details.page.html"),
        styles: [__webpack_require__(/*! ./weather-details.page.scss */ "./src/app/home/weather/weather-details/weather-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_WeatherService__WEBPACK_IMPORTED_MODULE_2__["WeatherService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], WeatherDetailsPage);



/***/ })

}]);
//# sourceMappingURL=weather-weather-details-weather-details-module-es2015.js.map