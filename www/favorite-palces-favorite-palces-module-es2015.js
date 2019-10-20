(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-palces-favorite-palces-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/favorite-palces/favorite-palces.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/favorite-palces/favorite-palces.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Your FavoritePalces</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n  <ion-list *ngFor=\"let place of this.Fplaces | async\">\n    <div class=\"item-content\" detail>\n      <ion-item>\n      <ion-label >\n        <ion-text color=\"primary\">\n          <h3>{{place.name}}</h3>\n        </ion-text>\n        <ion-text color=\"secondary\" *ngIf=\"place.opening_hours\">\n          <p>Open Now: <span *ngIf=\"place.opening_hours.open_now; else no\"> Yes </span>\n            <ng-template #no>no</ng-template>\n          </p>\n        </ion-text>\n        <div *ngIf=\"place.rating\">\n          <div class=\"star-ratings-css\">\n            <div class=\"star-ratings-css-top\" [style.width.%]=\"place.rating/5*100\">\n              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\n            <div class=\"star-ratings-css-bottom\">\n              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\n          </div>\n        </div>\n\n      </ion-label>\n      <ion-avatar slot=\"start\" *ngIf=\"place.photos\">\n        <img\n          src=\"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={{place.photos[0].photo_reference}}&key=AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8\">\n      </ion-avatar>\n    </ion-item>\n    </div>\n    \n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/favorite-palces/favorite-palces.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/favorite-palces/favorite-palces.module.ts ***!
  \***********************************************************/
/*! exports provided: FavoritePalcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePalcesPageModule", function() { return FavoritePalcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorite_palces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite-palces.page */ "./src/app/favorite-palces/favorite-palces.page.ts");







const routes = [
    {
        path: '',
        component: _favorite_palces_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePalcesPage"]
    }
];
let FavoritePalcesPageModule = class FavoritePalcesPageModule {
};
FavoritePalcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_favorite_palces_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePalcesPage"]]
    })
], FavoritePalcesPageModule);



/***/ }),

/***/ "./src/app/favorite-palces/favorite-palces.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/favorite-palces/favorite-palces.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlLXBhbGNlcy9mYXZvcml0ZS1wYWxjZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/favorite-palces/favorite-palces.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/favorite-palces/favorite-palces.page.ts ***!
  \*********************************************************/
/*! exports provided: FavoritePalcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePalcesPage", function() { return FavoritePalcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite.service */ "./src/app/favorite-palces/favorite.service.ts");



let FavoritePalcesPage = class FavoritePalcesPage {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
    }
    ngOnInit() {
        this.Fplaces = this.favoriteService.favoritePlace;
    }
};
FavoritePalcesPage.ctorParameters = () => [
    { type: _favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"] }
];
FavoritePalcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-palces',
        template: __webpack_require__(/*! raw-loader!./favorite-palces.page.html */ "./node_modules/raw-loader/index.js!./src/app/favorite-palces/favorite-palces.page.html"),
        styles: [__webpack_require__(/*! ./favorite-palces.page.scss */ "./src/app/favorite-palces/favorite-palces.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]])
], FavoritePalcesPage);



/***/ }),

/***/ "./src/app/favorite-palces/favorite.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/favorite-palces/favorite.service.ts ***!
  \*****************************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



let FavoriteService = class FavoriteService {
    constructor(afdb) {
        this.afdb = afdb;
        this.favoritePlace = this.afdb.list('favoritePlace').valueChanges();
    }
};
FavoriteService.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], FavoriteService);



/***/ })

}]);
//# sourceMappingURL=favorite-palces-favorite-palces-module-es2015.js.map