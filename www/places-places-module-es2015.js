(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-places-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/places/places.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/places/places.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"light\">\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"presentActionSheet()\">\n\t\t\t\t<ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title>places</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t\t<ion-grid class=\"ion-no-margin ion-no-padding\">\n\t<ion-row>\n\t\t<ion-col size-sm=6 offset-sm=3>\n\t\t\t<!-- $ google-chrome --disable-web-security --user-data-dir=\"/tmp/chrome_tmp\" -->\n\t\t\t<ion-segment (ionChange)=\"segmentChanged($event)\" color=\"light\">\n\t\t\t\t<ion-segment-button value=\"home\" checked>\n\t\t\t\t\t<ion-label>Home </ion-label>\n\t\t\t\t\t<ion-icon name=\"home\"></ion-icon>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"work\">\n\t\t\t\t\t<ion-label>Work</ion-label>\n\t\t\t\t\t<ion-icon name=\"business\"></ion-icon>\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col size-sm=6 offset-sm=3>\n\t\t\t<div *ngIf=\"currentView == 'home'\">\n\t\t\t\t<ion-list *ngFor=\"let place of homeplacesMasterData[0]; let i = index\">\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"item-content\" detail>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label [routerLink]=[i] [queryParams]=\"{place_id: place.place_id}\">\n\t\t\t\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t\t\t\t<h3>{{place.name}}</h3>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<ion-text color=\"secondary\" *ngIf=\"place.opening_hours\">\n\t\t\t\t\t\t\t\t<p>Open Now: <span *ngIf=\"place.opening_hours.open_now; else no\"> Yes </span>\n\t\t\t\t\t\t\t\t\t<ng-template #no>no</ng-template>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<div *ngIf=\"place.rating\">\n\t\t\t\t\t\t\t\t<div class=\"star-ratings-css\">\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-top\" [style.width.%]=\"place.rating/5*100\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-bottom\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-avatar slot=\"start\" *ngIf=\"place.photos\">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc=\"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={{place.photos[0].photo_reference}}&key={{apiKey}}\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"currentView == 'work'\">\n\t\t\t\t<ion-list *ngFor=\"let place of workplacesMasterData[0]; let i = index\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"item-content\" detail>\n\t\t\t\t\t\t<ion-item>\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ion-label [routerLink]=[i] [queryParams]=\"{place_id: place.place_id}\">\n\t\t\t\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t\t\t\t<h3>{{place.name}}</h3>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<ion-text color=\"secondary\" *ngIf=\"place.opening_hours\">\n\t\t\t\t\t\t\t\t<p>Open Now: <span *ngIf=\"place.opening_hours.open_now; else no\"> Yes </span>\n\t\t\t\t\t\t\t\t\t<ng-template #no>no</ng-template>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<div *ngIf=\"place.rating\">\n\t\t\t\t\t\t\t\t<div class=\"star-ratings-css\">\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-top\" [style.width.%]=\"place.rating/5*100\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-bottom\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-avatar slot=\"start\" *ngIf=\"place.photos\">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc=\"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={{place.photos[0].photo_reference}}&key={{apiKey}}\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/places/places.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/places/places.module.ts ***!
  \**********************************************/
/*! exports provided: PlacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function() { return PlacesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./places.page */ "./src/app/home/places/places.page.ts");







const routes = [
    {
        path: '',
        component: _places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]
    }
];
let PlacesPageModule = class PlacesPageModule {
};
PlacesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]]
    })
], PlacesPageModule);



/***/ }),

/***/ "./src/app/home/places/places.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/places/places.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right;\n}\n\n.star-ratings-css {\n  unicode-bidi: bidi-override;\n  color: #c5c5c5;\n  font-size: 25px;\n  height: 25px;\n  width: 100px;\n  position: relative;\n  padding: 0;\n}\n\n.star-ratings-css-top {\n  color: #0172bd;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: block;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.star-ratings-css-bottom {\n  padding: 0;\n  display: block;\n  z-index: 0;\n}\n\nh3 {\n  color: #fff;\n}\n\np {\n  color: #bdbdbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvaW9uV2VhdGhlci9zcmMvYXBwL2hvbWUvcGxhY2VzL3BsYWNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvcGxhY2VzL3BsYWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0k7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FDQ047O0FEQ0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDTjs7QURHRTtFQUNFLFdBQUE7QUNBSjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGxhY2VzL3BsYWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnN0YXItcmF0aW5ncy1jc3Mge1xuICAgIHVuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTtcbiAgICBjb2xvcjogI2M1YzVjNTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbiAgICAmLXRvcCB7XG4gICAgICBjb2xvcjogIzAxNzJiZDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgJi1ib3R0b20ge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gIH1cblxuICBoMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbnAge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuIiwiLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnN0YXItcmF0aW5ncy1jc3Mge1xuICB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gIGNvbG9yOiAjYzVjNWM1O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3Rhci1yYXRpbmdzLWNzcy10b3Age1xuICBjb2xvcjogIzAxNzJiZDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN0YXItcmF0aW5ncy1jc3MtYm90dG9tIHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDA7XG59XG5cbmgzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnAge1xuICBjb2xvcjogI2JkYmRiZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/places/places.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/places/places.page.ts ***!
  \********************************************/
/*! exports provided: PlacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPage", function() { return PlacesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/home/places.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let PlacesPage = class PlacesPage {
    constructor(placesservice, actionSheetController, loadingCtrl) {
        this.placesservice = placesservice;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.workplacesMasterData = [];
        this.homeplacesMasterData = [];
        this.placePhotos = [];
        this.showData = false;
        this.homeLat = '';
        this.homeLng = '';
        this.workLocation = '';
        this.homeLocation = '';
        this.homeLocationLatLng = this.placesservice.homeLocationNameLatLng;
        this.workLocationLatLng = this.placesservice.workLocationNameLatLng;
        this.currentView = 'home';
        this.apiKey = 'AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8';
        this.lookingFor = 'restaurant';
    }
    ngOnInit() {
        this.workLocation = this.placesservice.workLocation;
        this.homeLocation = this.placesservice.homeLocation;
    }
    getDataByType() {
        this.workplacesMasterData = [];
        this.homeplacesMasterData = [];
        this.getWorkPlacesData(this.workLocation, this.workLocationLatLng, this.workplacesMasterData, this.lookingFor);
        this.getWorkPlacesData(this.homeLocation, this.homeLocationLatLng, this.homeplacesMasterData, this.lookingFor);
    }
    getWorkPlacesData(worklocation, latlan, storeData, lookingfor) {
        this.loadingCtrl.create({
            message: 'please wait',
            keyboardClose: true,
        }).then(lodingEl => {
            lodingEl.present();
            this.placesservice.getLatLongs(worklocation)
                .subscribe(abc => {
                latlan = abc['results'][0].geometry.location;
                this.workLocation = this.placesservice.workLocation;
                this.homeLocation = this.placesservice.homeLocation;
                this.workLocation = this.placesservice.workLocation;
                this.homeLocation = this.placesservice.homeLocation;
                let data = this.placesservice.getPlaces1(latlan.lat, latlan.lng, lookingfor);
                data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(x => {
                    return x['results'].filter(val => { return val.photos !== undefined; });
                })).subscribe(abc => {
                    storeData.push(abc);
                });
            });
            lodingEl.dismiss();
        });
    }
    segmentChanged($event) {
        this.currentView = $event.detail.value;
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What Are you Looking For',
                buttons: [{
                        text: 'Restaurants',
                        icon: 'restaurant',
                        handler: () => {
                            this.lookingFor = 'restaurant';
                            this.getDataByType();
                        }
                    },
                    {
                        text: 'Bars',
                        icon: 'wine',
                        handler: () => {
                            this.lookingFor = 'bars';
                            this.getDataByType();
                        }
                    },
                    {
                        text: 'Coffee',
                        icon: 'cafe',
                        handler: () => {
                            this.lookingFor = 'cafe';
                            this.getDataByType();
                        }
                    },
                    {
                        text: 'Banks',
                        icon: 'business',
                        handler: () => {
                            this.lookingFor = 'bank';
                            this.getDataByType();
                        }
                    },
                    {
                        text: 'Gas Stations',
                        icon: 'logo-model-s',
                        handler: () => {
                            this.lookingFor = 'gas_station';
                            this.getDataByType();
                        }
                    },
                    {
                        text: 'Hospitals',
                        icon: 'medkit',
                        handler: () => {
                            this.lookingFor = 'hospital';
                            this.getDataByType();
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
PlacesPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
PlacesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-places',
        template: __webpack_require__(/*! raw-loader!./places.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/places/places.page.html"),
        styles: [__webpack_require__(/*! ./places.page.scss */ "./src/app/home/places/places.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], PlacesPage);



/***/ })

}]);
//# sourceMappingURL=places-places-module-es2015.js.map