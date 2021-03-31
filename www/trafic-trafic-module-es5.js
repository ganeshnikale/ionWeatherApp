(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trafic-trafic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/trafic/trafic.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/trafic/trafic.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Traffic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card *ngFor=\"let trafic of traficMasterData\">\n        <ion-card-header>\n          \n          <ion-card-subtitle>{{trafic.destination_addresses}}</ion-card-subtitle>\n          <ion-card-subtitle>{{trafic.origin_addresses}}</ion-card-subtitle>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <ion-label>\n            Distance : {{trafic.rows[0].elements[0].distance.text}}\n          </ion-label>\n          <ion-label>\n              Duration : {{trafic.rows[0].elements[0].duration.text}}\n            </ion-label>\n            <ion-label>\n                Duration in Traffic : {{trafic.rows[0].elements[0].duration_in_traffic.text}}\n              </ion-label>\n        </ion-card-content>\n      </ion-card>\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DistanceMatrixService = /** @class */ (function () {
    function DistanceMatrixService(HttpClient) {
        this.HttpClient = HttpClient;
        this.url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?';
    }
    DistanceMatrixService.prototype.getDistance = function (home, work) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('units', 'imperial')
            .set('origins', home)
            .set('destinations', work)
            .set('key', 'one%20Bkc')
            .set('departure_time', 'now')
            .set('key', 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8');
        return this.HttpClient.get(this.url, { params: params });
    };
    DistanceMatrixService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DistanceMatrixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DistanceMatrixService);
    return DistanceMatrixService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trafic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trafic.page */ "./src/app/home/trafic/trafic.page.ts");







var routes = [
    {
        path: '',
        component: _trafic_page__WEBPACK_IMPORTED_MODULE_6__["TraficPage"]
    }
];
var TraficPageModule = /** @class */ (function () {
    function TraficPageModule() {
    }
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
    return TraficPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../places.service */ "./src/app/home/places.service.ts");




var TraficPage = /** @class */ (function () {
    function TraficPage(distancematrixService, placesservice) {
        this.distancematrixService = distancematrixService;
        this.placesservice = placesservice;
        this.workLocation = '';
        this.homeLocation = '';
        this.traficMasterData = [];
    }
    TraficPage.prototype.ngOnInit = function () {
        var _this = this;
        this.workLocation = this.placesservice.workLocation;
        this.homeLocation = this.placesservice.homeLocation;
        console.log(this.distancematrixService.getDistance(this.homeLocation, this.workLocation).subscribe(function (abc) {
            _this.traficMasterData.push(abc);
            console.log(_this.traficMasterData);
            for (var _i = 0, _a = _this.traficMasterData; _i < _a.length; _i++) {
                var ab = _a[_i];
                console.log(ab.rows[0].elements[0].distance.text);
                for (var _b = 0, _c = _this.traficMasterData; _b < _c.length; _b++) {
                    var x = _c[_b];
                    console.log(x);
                }
            }
        }));
    };
    TraficPage.ctorParameters = function () { return [
        { type: _distance_matrix_service__WEBPACK_IMPORTED_MODULE_1__["DistanceMatrixService"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] }
    ]; };
    TraficPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-trafic',
            template: __webpack_require__(/*! raw-loader!./trafic.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/trafic/trafic.page.html"),
            styles: [__webpack_require__(/*! ./trafic.page.scss */ "./src/app/home/trafic/trafic.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_distance_matrix_service__WEBPACK_IMPORTED_MODULE_1__["DistanceMatrixService"], _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]])
    ], TraficPage);
    return TraficPage;
}());



/***/ })

}]);
//# sourceMappingURL=trafic-trafic-module-es5.js.map