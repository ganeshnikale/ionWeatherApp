(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locator-locator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/locator/locator.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/locator/locator.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>locator</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Home Location</ion-label>\n      <ion-input type=\"text\" name=\"homeLocation\" ngModel #homeLocation=\"ngModel\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\">Work Location</ion-label>\n        <ion-input type=\"text\" name=\"workLocation\" ngModel #workLocation=\"ngModel\"></ion-input>\n      </ion-item>\n    \n  </ion-list>\n  <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"onGetHomeLocation(homeLocation,workLocation)\" >\n      Search\n  </ion-button>\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/locator/locator.module.ts":
/*!*******************************************!*\
  !*** ./src/app/locator/locator.module.ts ***!
  \*******************************************/
/*! exports provided: LocatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatorPageModule", function() { return LocatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _locator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locator.page */ "./src/app/locator/locator.page.ts");







const routes = [
    {
        path: '',
        component: _locator_page__WEBPACK_IMPORTED_MODULE_6__["LocatorPage"]
    }
];
let LocatorPageModule = class LocatorPageModule {
};
LocatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_locator_page__WEBPACK_IMPORTED_MODULE_6__["LocatorPage"]]
    })
], LocatorPageModule);



/***/ }),

/***/ "./src/app/locator/locator.page.scss":
/*!*******************************************!*\
  !*** ./src/app/locator/locator.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0b3IvbG9jYXRvci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/locator/locator.page.ts":
/*!*****************************************!*\
  !*** ./src/app/locator/locator.page.ts ***!
  \*****************************************/
/*! exports provided: LocatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatorPage", function() { return LocatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../home/places.service */ "./src/app/home/places.service.ts");




let LocatorPage = class LocatorPage {
    constructor(router, placesservice) {
        this.router = router;
        this.placesservice = placesservice;
        this.homeLoc = '';
        this.homeLocationName = [];
        this.workLocationName = [];
    }
    ngOnInit() {
    }
    onGetHomeLocation(homeLocation, workLocation) {
        this.placesservice.homeLocation = homeLocation.viewModel;
        this.placesservice.workLocation = workLocation.viewModel;
        // this.setLocationNameLatLng(homeLocation.viewModel, this.homeLocationName);
        // this.setLocationNameLatLng(workLocation.viewModel, this.workLocationName);
        // this.placesservice.homeLocationNameLatLng = this.homeLocationName;
        // this.placesservice.workLocationNameLatLng = this.workLocationName;
        this.router.navigateByUrl('home/tabs/places');
    }
};
LocatorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _home_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] }
];
LocatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locator',
        template: __webpack_require__(/*! raw-loader!./locator.page.html */ "./node_modules/raw-loader/index.js!./src/app/locator/locator.page.html"),
        styles: [__webpack_require__(/*! ./locator.page.scss */ "./src/app/locator/locator.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _home_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]])
], LocatorPage);



/***/ })

}]);
//# sourceMappingURL=locator-locator-module-es2015.js.map