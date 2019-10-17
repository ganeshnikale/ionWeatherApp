(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-places-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/places/places.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/places/places.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"light\">\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"presentActionSheet()\">\n\t\t\t\t<ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title>places</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\t\t<ion-grid class=\"ion-no-margin ion-no-padding\">\n\t<ion-row>\n\t\t<ion-col size-sm=6 offset-sm=3>\n\t\t\t<!-- $ google-chrome --disable-web-security --user-data-dir=\"/tmp/chrome_tmp\" -->\n\t\t\t<ion-segment (ionChange)=\"segmentChanged($event)\" color=\"light\">\n\t\t\t\t<ion-segment-button value=\"home\" checked>\n\t\t\t\t\t<ion-label>Home </ion-label>\n\t\t\t\t\t<ion-icon name=\"home\"></ion-icon>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"work\">\n\t\t\t\t\t<ion-label>Work</ion-label>\n\t\t\t\t\t<ion-icon name=\"business\"></ion-icon>\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t</ion-col>\n\t</ion-row>\n\t\n\t<ion-row>\n\t\t<ion-col size-sm=6 offset-sm=3>\n\t\t\t<div *ngIf=\"currentView == 'home'\">\n\t\t\t\t<ion-list *ngFor=\"let place of homeplacesMasterData[0]; let i = index\">\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"item-content\" detail>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label [routerLink]=[i] [queryParams]=\"{place_id: place.place_id}\">\n\t\t\t\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t\t\t\t<h3>{{place.name}}</h3>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<ion-text color=\"secondary\" *ngIf=\"place.opening_hours\">\n\t\t\t\t\t\t\t\t<p>Open Now: <span *ngIf=\"place.opening_hours.open_now; else no\"> Yes </span>\n\t\t\t\t\t\t\t\t\t<ng-template #no>no</ng-template>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<div *ngIf=\"place.rating\">\n\t\t\t\t\t\t\t\t<div class=\"star-ratings-css\">\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-top\" [style.width.%]=\"place.rating/5*100\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-bottom\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-avatar slot=\"start\" *ngIf=\"place.photos\">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc=\"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={{place.photos[0].photo_reference}}&key=AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"currentView == 'work'\">\n\t\t\t\t<ion-list *ngFor=\"let place of workplacesMasterData[0]; let i = index\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"item-content\" detail>\n\t\t\t\t\t\t<ion-item>\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ion-label [routerLink]=[i] [queryParams]=\"{place_id: place.place_id}\">\n\t\t\t\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t\t\t\t<h3>{{place.name}}</h3>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<ion-text color=\"secondary\" *ngIf=\"place.opening_hours\">\n\t\t\t\t\t\t\t\t<p>Open Now: <span *ngIf=\"place.opening_hours.open_now; else no\"> Yes </span>\n\t\t\t\t\t\t\t\t\t<ng-template #no>no</ng-template>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t\t<div *ngIf=\"place.rating\">\n\t\t\t\t\t\t\t\t<div class=\"star-ratings-css\">\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-top\" [style.width.%]=\"place.rating/5*100\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-css-bottom\">\n\t\t\t\t\t\t\t\t\t\t<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-avatar slot=\"start\" *ngIf=\"place.photos\">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc=\"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={{place.photos[0].photo_reference}}&key=AIzaSyADtYqSYIWJ5ZBU160TZH6rkLkhK_vboh8\">\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t</ion-grid>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./places.page */ "./src/app/home/places/places.page.ts");







var routes = [
    {
        path: '',
        component: _places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]
    }
];
var PlacesPageModule = /** @class */ (function () {
    function PlacesPageModule() {
    }
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
    return PlacesPageModule;
}());



/***/ }),

/***/ "./src/app/home/places/places.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/places/places.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right;\n}\n\n.star-ratings-css {\n  unicode-bidi: bidi-override;\n  color: #c5c5c5;\n  font-size: 25px;\n  height: 25px;\n  width: 100px;\n  position: relative;\n  padding: 0;\n}\n\n.star-ratings-css-top {\n  color: #0172bd;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: block;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.star-ratings-css-bottom {\n  padding: 0;\n  display: block;\n  z-index: 0;\n}\n\nh3 {\n  color: #fff;\n}\n\np {\n  color: #bdbdbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvaW9uV2VhdGhlcjIuMC9pb25XZWF0aGVyQXBwLTEvc3JjL2FwcC9ob21lL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0NOOztBRENJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ047O0FER0U7RUFDRSxXQUFBO0FDQUo7O0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zdGFyLXJhdGluZ3MtY3NzIHtcbiAgICB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gICAgY29sb3I6ICNjNWM1YzU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgXG4gICAgJi10b3Age1xuICAgICAgY29sb3I6ICMwMTcyYmQ7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICYtYm90dG9tIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5wIHtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbiIsIi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zdGFyLXJhdGluZ3MtY3NzIHtcbiAgdW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlO1xuICBjb2xvcjogI2M1YzVjNTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xufVxuLnN0YXItcmF0aW5ncy1jc3MtdG9wIHtcbiAgY29sb3I6ICMwMTcyYmQ7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zdGFyLXJhdGluZ3MtY3NzLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAwO1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5wIHtcbiAgY29sb3I6ICNiZGJkYmQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/home/places.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PlacesPage = /** @class */ (function () {
    function PlacesPage(placesservice, actionSheetController, loadingCtrl) {
        this.placesservice = placesservice;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.workplacesMasterData = [];
        this.homeplacesMasterData = [];
        this.homeLat = this.placesservice.homeLocationData[0].homepre.lat;
        this.homeLng = this.placesservice.homeLocationData[0].homepre.lng;
        this.workLat = this.placesservice.workLocationData[0].workpre.lat;
        this.workLng = this.placesservice.workLocationData[0].workpre.lng;
        this.currentView = 'home';
        this.lookingFor = 'restaurant';
    }
    PlacesPage.prototype.ngOnInit = function () {
        this.getDataByType();
    };
    PlacesPage.prototype.getDataByType = function () {
        this.workplacesMasterData = [];
        this.homeplacesMasterData = [];
        this.getplaces(this.homeplacesMasterData, this.homeLat, this.homeLng);
        this.getplaces(this.workplacesMasterData, this.workLat, this.workLng);
    };
    PlacesPage.prototype.getplaces = function (setTo, lat, lng) {
        this.placesservice.getPlaces1(lat, lng, this.lookingFor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x['results']; })).subscribe(function (abc) {
            setTo.push(abc);
        });
    };
    PlacesPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            duration: 5000,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlacesPage.prototype.segmentChanged = function ($event) {
        this.currentView = $event.detail.value;
    };
    PlacesPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'What Are you Looking For',
                            buttons: [{
                                    text: 'Restaurants',
                                    icon: 'restaurant',
                                    handler: function () {
                                        _this.lookingFor = 'restaurant';
                                        _this.getDataByType();
                                    }
                                },
                                {
                                    text: 'Bars',
                                    icon: 'wine',
                                    handler: function () {
                                        _this.lookingFor = 'bars';
                                        _this.getDataByType();
                                    }
                                },
                                {
                                    text: 'Coffee',
                                    icon: 'cafe',
                                    handler: function () {
                                        _this.lookingFor = 'cafe';
                                        _this.getDataByType();
                                    }
                                },
                                {
                                    text: 'Banks',
                                    icon: 'business',
                                    handler: function () {
                                        _this.lookingFor = 'bank';
                                        _this.getDataByType();
                                    }
                                },
                                {
                                    text: 'Gas Stations',
                                    icon: 'logo-model-s',
                                    handler: function () {
                                        _this.lookingFor = 'gas_station';
                                        _this.getDataByType();
                                    }
                                },
                                {
                                    text: 'Hospitals',
                                    icon: 'medkit',
                                    handler: function () {
                                        _this.lookingFor = 'hospital';
                                        _this.getDataByType();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlacesPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
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
    return PlacesPage;
}());



/***/ })

}]);
//# sourceMappingURL=places-places-module-es5.js.map