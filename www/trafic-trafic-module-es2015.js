(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trafic-trafic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/trafic/trafic.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/trafic/trafic.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Traffic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card >\n        <ion-card-header>\n          \n          <ion-card-subtitle>{{homeLocationText}}</ion-card-subtitle>\n          <ion-card-subtitle>{{workLocationText}}</ion-card-subtitle>\n        </ion-card-header>\n    \n        <ion-card-content *ngFor=\"let trafic of traficMasterData\">\n          <ion-label>\n            Distance : {{trafic.rows[0].elements[0].distance.text}}\n          </ion-label>\n          <ion-label>\n              Duration : {{trafic.rows[0].elements[0].duration.text}}\n            </ion-label>\n            <ion-label>\n                Duration in Traffic : {{trafic.rows[0].elements[0].duration_in_traffic.text}}\n              </ion-label>\n        </ion-card-content>\n      </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/distance-matrix.service.ts":
/*!*************************************************!*\
  !*** ./src/app/home/distance-matrix.service.ts ***!
  \*************************************************/
/*! exports provided: DistanceMatrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceMatrixService", function() { return DistanceMatrixService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DistanceMatrixService = class DistanceMatrixService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=19.2403305,73.1305395|19.2183307,72.9780897&departure_time=now&key=AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';
    }
    getDistance(homeLatLng, worklatLng) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('units', 'imperial')
            .set('origins', homeLatLng)
            .set('destinations', worklatLng)
            .set('departure_time', 'now')
            .set('key', 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8');
        console.log(params.toString());
        return this.HttpClient.get(this.url, { params });
    }
};
DistanceMatrixService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DistanceMatrixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DistanceMatrixService);



/***/ }),

/***/ "./src/app/home/trafic/trafic.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/trafic/trafic.module.ts ***!
  \**********************************************/
/*! exports provided: TraficPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraficPageModule", function() { return TraficPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trafic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trafic.page */ "./src/app/home/trafic/trafic.page.ts");







const routes = [
    {
        path: '',
        component: _trafic_page__WEBPACK_IMPORTED_MODULE_6__["TraficPage"]
    }
];
let TraficPageModule = class TraficPageModule {
};
TraficPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_trafic_page__WEBPACK_IMPORTED_MODULE_6__["TraficPage"]]
    })
], TraficPageModule);



/***/ }),

/***/ "./src/app/home/trafic/trafic.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/trafic/trafic.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdHJhZmljL3RyYWZpYy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/trafic/trafic.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/trafic/trafic.page.ts ***!
  \********************************************/
/*! exports provided: TraficPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraficPage", function() { return TraficPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _distance_matrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../distance-matrix.service */ "./src/app/home/distance-matrix.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../places.service */ "./src/app/home/places.service.ts");




let TraficPage = class TraficPage {
    constructor(distancematrixService, placesservice) {
        this.distancematrixService = distancematrixService;
        this.placesservice = placesservice;
        this.workLocation = '';
        this.homeLocation = '';
        this.traficMasterData = [];
        this.homeLocationText = this.placesservice.homeLocationData[0].location;
        this.workLocationText = this.placesservice.workLocationData[0].location;
        this.homeLat = this.placesservice.homeLocationData[0].homepre.lat;
        this.homeLng = this.placesservice.homeLocationData[0].homepre.lng;
        this.workLat = this.placesservice.workLocationData[0].workpre.lat;
        this.workLng = this.placesservice.workLocationData[0].workpre.lng;
        this.worklatLng = this.homeLat.toString().concat("," + this.homeLng.toString());
        this.homeLatLng = this.workLat.toString().concat("," + this.workLng.toString());
    }
    ngOnInit() {
        this.distancematrixService.getDistance(this.worklatLng, this.homeLatLng).subscribe(abc => {
            this.traficMasterData.push(abc);
        });
    }
};
TraficPage.ctorParameters = () => [
    { type: _distance_matrix_service__WEBPACK_IMPORTED_MODULE_1__["DistanceMatrixService"] },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] }
];
TraficPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-trafic',
        template: __webpack_require__(/*! raw-loader!./trafic.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/trafic/trafic.page.html"),
        styles: [__webpack_require__(/*! ./trafic.page.scss */ "./src/app/home/trafic/trafic.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_distance_matrix_service__WEBPACK_IMPORTED_MODULE_1__["DistanceMatrixService"], _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]])
], TraficPage);



/***/ })

}]);
//# sourceMappingURL=trafic-trafic-module-es2015.js.map