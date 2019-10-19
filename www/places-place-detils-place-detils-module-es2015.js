(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-place-detils-place-detils-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/places/place-detils/place-detils.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/places/place-detils/place-detils.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"light\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>placeDetils</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t<ion-grid class=\"ion-no-margin ion-no-padding\">\n\t\t<ion-row>\n\t\t\t<ion-col size-sm=\"6\" offset-sm=\"3\" *ngFor=\"let place of placesDetails\">\n\t\t\t\t<ion-card>\n\t\t\t\t\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t\t\t\t\t\t<ion-slide *ngFor=\"let photo of place.photos\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://maps.googleapis.com/maps/api/place/photo?maxheight=400&photoreference={{photo.photo_reference}}&key={{apiKey}}\"/>\n\t\t\t\t\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\n\n\t\t\t\t\t\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>{{place.name}}</ion-card-title>\t\n\t\t\t\t\t\t<ion-card-subtitle>{{place.formatted_address}}</ion-card-subtitle>\t  \n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a href=\"{{place.website}}\" target=\"_blank\">website</a>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div *ngIf=\"place.rating\">\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-top\" [style.width.%]=\"place.rating/5*100\">\n\t\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\n\n\t\t\t\t</ion-card>\n\t\t\t\t{{place.reference}}\n\t\t\t\t<ion-button (click)=\"addToFavorite(place.reference)\">Add to Favorite</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/places/place-detils/place-detils.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/places/place-detils/place-detils.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlaceDetilsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetilsPageModule", function() { return PlaceDetilsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_detils_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-detils.page */ "./src/app/home/places/place-detils/place-detils.page.ts");







const routes = [
    {
        path: '',
        component: _place_detils_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetilsPage"]
    }
];
let PlaceDetilsPageModule = class PlaceDetilsPageModule {
};
PlaceDetilsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_place_detils_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetilsPage"]]
    })
], PlaceDetilsPageModule);



/***/ }),

/***/ "./src/app/home/places/place-detils/place-detils.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/places/place-detils/place-detils.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right;\n}\n\nion-grid.ion-no-margin.ion-no-padding.md.hydrated {\n  height: 100%;\n}\n\nion-card {\n  padding: 40px 0;\n  box-shadow: none;\n  margin: 0;\n}\n\nion-card-subtitle, ion-card-title {\n  color: #ffffff;\n  font-size: 20px;\n}\n\nion-card-title {\n  font-size: 50px;\n}\n\nion-card-header.whiteColor {\n  color: #ffffff;\n}\n\n.swiper-slide img {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvaW9uV2VhdGhlcjIuMC9pb25XZWF0aGVyQXBwLTEvc3JjL2FwcC9ob21lL3BsYWNlcy9wbGFjZS1kZXRpbHMvcGxhY2UtZGV0aWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9wbGFjZXMvcGxhY2UtZGV0aWxzL3BsYWNlLWRldGlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURGRTtFQUNFLGFBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGxhY2VzL3BsYWNlLWRldGlscy9wbGFjZS1kZXRpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1ncmlkLmlvbi1uby1tYXJnaW4uaW9uLW5vLXBhZGRpbmcubWQuaHlkcmF0ZWR7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jYXJke1xuICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTEpO1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jYXJkLXN1YnRpdGxlLGlvbi1jYXJkLXRpdGxle1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbmlvbi1jYXJkLWhlYWRlci53aGl0ZUNvbG9ye1xuICBjb2xvcjogI2ZmZmZmZjsgXG59XG4gIC5zd2lwZXItc2xpZGUgaW1ne1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH0iLCIudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tZ3JpZC5pb24tbm8tbWFyZ2luLmlvbi1uby1wYWRkaW5nLm1kLmh5ZHJhdGVkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSwgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyLndoaXRlQ29sb3Ige1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/places/place-detils/place-detils.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/places/place-detils/place-detils.page.ts ***!
  \***************************************************************/
/*! exports provided: PlaceDetilsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetilsPage", function() { return PlaceDetilsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../places.service */ "./src/app/home/places.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PlaceDetilsPage = class PlaceDetilsPage {
    constructor(activerouter, http, placesservice) {
        this.activerouter = activerouter;
        this.http = http;
        this.placesservice = placesservice;
        this.placesDetails = [];
        this.apiKey = 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
        this.activerouter.queryParamMap.subscribe(abc => {
            console.log(abc.get('place_id'));
            this.placesservice.getPlaceDetails(abc.get('place_id')).subscribe(data => {
                this.placesDetails.push(data['result']);
                console.log(this.placesDetails);
            });
        });
    }
    addToFavorite(favoritePlaceId) {
        this.placesservice.setfavoritePlace(favoritePlaceId);
    }
};
PlaceDetilsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"] }
];
PlaceDetilsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-place-detils',
        template: __webpack_require__(/*! raw-loader!./place-detils.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/places/place-detils/place-detils.page.html"),
        styles: [__webpack_require__(/*! ./place-detils.page.scss */ "./src/app/home/places/place-detils/place-detils.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"]])
], PlaceDetilsPage);



/***/ })

}]);
//# sourceMappingURL=places-place-detils-place-detils-module-es2015.js.map