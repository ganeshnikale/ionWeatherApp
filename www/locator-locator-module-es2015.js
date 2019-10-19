(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locator-locator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/locator/locator.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/locator/locator.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>locator</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-label position=\"floating\">Enter Work Location</ion-label>\n    <ion-input type=\"text\" name=\"workLocationauto\" [(ngModel)]=\"workLocationauto\"\n      (keyup)=\"autocomplatePridiction($event, 'work')\"></ion-input>\n  </ion-item>\n\n  <ion-item *ngFor=\"let prediction of werkPridiction | async\"\n    (click)=\"setLocation(prediction.description,prediction.place_id, 'workpre', 'work')\">\n    <div> {{prediction.description}} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Enter Home Location</ion-label>\n    <ion-input type=\"text\" name=\"homeLocationauto\" [(ngModel)]=\"homeLocationauto\"\n      (keyup)=\"autocomplatePridiction($event, 'home')\"></ion-input>\n  </ion-item>\n\n  <ion-item *ngFor=\"let prediction of homePridiction | async\"\n    (click)=\"setLocation(prediction.description,prediction.place_id, 'homepre', 'home')\">\n    <div> {{prediction.description}} </div>\n  </ion-item>\n\n  <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click) =\"this.navigateHome()\" [disabled]=\"(!placesservice.workLocationData.length) || (!placesservice.homeLocationData.length)\">\n    Search\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/locator/auto-complate.service.ts":
/*!**************************************************!*\
  !*** ./src/app/locator/auto-complate.service.ts ***!
  \**************************************************/
/*! exports provided: AutoComplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComplateService", function() { return AutoComplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AutoComplateService = class AutoComplateService {
    constructor(http) {
        this.http = http;
        this.apiKey = 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';
    }
    autoComplate(area) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("input", area)
            .set("key", this.apiKey);
        return this.http.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?`, { params });
    }
    latlngbyPlaceId(placeId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("place_id", placeId)
            .set("key", this.apiKey);
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?`, { params });
    }
};
AutoComplateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AutoComplateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AutoComplateService);



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auto_complate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auto-complate.service */ "./src/app/locator/auto-complate.service.ts");







let LocatorPage = class LocatorPage {
    constructor(router, placesservice, autocomplateService) {
        this.router = router;
        this.placesservice = placesservice;
        this.autocomplateService = autocomplateService;
        this.workLocationauto = '';
        this.homeLocationauto = '';
        this.locationData = [];
    }
    ngOnInit() { }
    autocomplatePridiction(event, setTO) {
        this.autocomplateService.autoComplate(event['target'].value);
        if (setTO == 'work') {
            this.werkPridiction = this.autocomplateService.autoComplate(event['target'].value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(x => x['predictions']));
        }
        else {
            this.homePridiction = this.autocomplateService.autoComplate(event['target'].value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(x => x['predictions']));
        }
    }
    setLocation(pridiction, placeId, text, setName) {
        if (setName == 'work') {
            console.log(this.workLocationauto.length);
            this.workLocationauto = pridiction;
            this.autocomplateService.latlngbyPlaceId(placeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(x => [{ [text]: [x['results'][0].geometry][0].location, location: pridiction }]))
                .subscribe(abc => {
                this.placesservice.workLocationData = abc;
            });
        }
        else {
            this.homeLocationauto = pridiction;
            this.autocomplateService.latlngbyPlaceId(placeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(x => [{ [text]: [x['results'][0].geometry][0].location, location: pridiction }]))
                .subscribe(abc => {
                this.placesservice.homeLocationData = abc;
            });
        }
        this.werkPridiction = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
        this.homePridiction = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
    }
    navigateHome() {
        this.router.navigateByUrl('/home/tabs/places');
    }
};
LocatorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _home_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] },
    { type: _auto_complate_service__WEBPACK_IMPORTED_MODULE_6__["AutoComplateService"] }
];
LocatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locator',
        template: __webpack_require__(/*! raw-loader!./locator.page.html */ "./node_modules/raw-loader/index.js!./src/app/locator/locator.page.html"),
        styles: [__webpack_require__(/*! ./locator.page.scss */ "./src/app/locator/locator.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _home_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
        _auto_complate_service__WEBPACK_IMPORTED_MODULE_6__["AutoComplateService"]])
], LocatorPage);



/***/ })

}]);
//# sourceMappingURL=locator-locator-module-es2015.js.map