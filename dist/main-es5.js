(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/bobur/Documents/angular-projects/pizzaProduct/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "HQXw":
    /*!****************************************!*\
      !*** ./src/app/services/ApiService.ts ***!
      \****************************************/

    /*! exports provided: ApiService */

    /***/
    function HQXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.API_URL = "https://raw.githubusercontent.com/boburanvarov/pizza/main/backend/reactPizza.json";
        }

        _createClass(ApiService, [{
          key: "get",
          value: function get() {
            return this.http.get(this.API_URL, {
              observe: 'response'
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac
      });
      /***/
    },

    /***/
    "KemO":
    /*!****************************************************!*\
      !*** ./src/app/component/pizza/pizza.component.ts ***!
      \****************************************************/

    /*! exports provided: PizzaComponent */

    /***/
    function KemO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PizzaComponent", function () {
        return PizzaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/ApiService */
      "HQXw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PizzaComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PizzaComponent_div_36_Template_button_click_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.plusLess($event, "less", i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PizzaComponent_div_36_Template_button_click_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.plusLess($event, "plus", i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pizza_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pizza_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pizza_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pizza_r1.types.type1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pizza_r1.types.type2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pizza_r1.sizes.small, "sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pizza_r1.sizes.norm, "sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pizza_r1.sizes.big, "sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pizza_r1.price, "\u20BD ");
        }
      }

      var PizzaComponent = /*#__PURE__*/function () {
        function PizzaComponent(service) {
          _classCallCheck(this, PizzaComponent);

          this.service = service;
          this.pizzaData = [];
        }

        _createClass(PizzaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("Pizza page");
            this.getPizzaData();
          }
        }, {
          key: "getPizzaData",
          value: function getPizzaData() {
            var _this = this;

            console.log("getPizzaData(): is run");
            this.service.get().subscribe(function (resp) {
              _this.pizzaData = resp.body.pizzaData;
              console.log(_this.pizzaData);
            });
          }
        }, {
          key: "plusLess",
          value: function plusLess(event, action, index) {
            plusLessFunction(event, action, index);
          }
        }]);

        return PizzaComponent;
      }();

      PizzaComponent.ɵfac = function PizzaComponent_Factory(t) {
        return new (t || PizzaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ApiService__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      PizzaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PizzaComponent,
        selectors: [["pizza-page"]],
        decls: 38,
        vars: 1,
        consts: [[1, "body"], [1, "menu"], [1, "nav"], [1, "container"], [1, "row"], [1, "col-md-11"], ["href", "index.html", 1, "logo"], ["src", "../../../assets/images/logo.png", "alt", "logo"], [1, "logo-text"], [1, "col-md-1"], [1, "shopping-title"], [1, "fa", "fa-shopping-cart"], [1, "col-md-12"], [1, "line"], [1, "col-12", "product-detail"], ["id", "myBtnContainer"], ["onclick", "filterSelection('all')", 1, "btn", "active"], ["onclick", "filterSelection('chees')", 1, "btn"], ["onclick", "filterSelection('meat')", 1, "btn"], ["onclick", "filterSelection('fruits')", 1, "btn"], ["id", "myTabContent", 1, "tab-content"], ["id", "all", "role", "tab-panel", 1, "tab-pane", "fade", "show", "active"], [1, "tab-single"], [1, "col-12"], [1, "section-title"], ["id", "products-type"], ["class", "col-xl-3 col-lg-4 col-md-4 col-12 my-2 chees pizza", 4, "ngFor", "ngForOf"], [1, "select"], [1, "col-xl-3", "col-lg-4", "col-md-4", "col-12", "my-2", "chees", "pizza"], ["id", "pizza-product"], [1, "single-product"], [1, "product-img"], ["href", "#"], ["alt", "#", 1, "img-fluid", 3, "src"], [1, "product-title"], [1, "text-center"], ["id", "productInfo", 1, "myBtnContainer", "row"], [1, "btn", "col-md-5", "mt-2", "pizzaType", "active"], [1, "btn", "col-md-7", "mt-2", "pizzaType"], [1, "btn", "col-md-4", "mt-2", "pizzaSize", "active"], [1, "btn", "col-md-4", "mt-2", "pizzaSize"], [1, "con-price", "text-center", "col-md-12"], [1, "con-btn", "col-md-12"], ["id", "addCart", "onclick", "handleAdd(event)", 1, "add"], [1, "con-input-btns"], ["id", "minus", 1, "less", 3, "click"], [1, "fa", "fa-minus"], ["type", "text", "value", "1", "disabled", "", 1, "result"], ["id", "plus", 1, "less", 3, "click"], [1, "fa", "fa-plus"]],
        template: function PizzaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " REACT PIZZA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Chees");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Meat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fruits-Pizza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "All-pizza");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PizzaComponent_div_36_Template, 31, 8, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pizzaData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".body[_ngcontent-%COMP%] {\n    font-family:  'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    background-color: rgb(255, 153, 116);\n    width: 100%;\n    display: inline-block;\n}\n.menu[_ngcontent-%COMP%] {\n    margin: 50px;\n    background-color: white;\n    border-radius: 10px;\n    padding: 30px 0px;\n}\n#pizza-product[_ngcontent-%COMP%]{\n    margin:20px auto;\n    padding: 10px;\n}\n.logo[_ngcontent-%COMP%] {\n\tcursor: pointer;\n\tz-index: 50;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 10px;\n    border-radius: 30px;\n}\n.logo-text[_ngcontent-%COMP%] {\n    color: black;\n    font-size: 20px;\n    font-weight: bold;\n}\n.logo[_ngcontent-%COMP%]:hover{\n    text-decoration: none;\n}\n.shopping-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #2e0257;;\n}\n.line[_ngcontent-%COMP%] {\n    background-color: lightgrey;\n    height: 1px;\n}\n.product-detail[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n.section-title[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n.product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 20px;\n    margin-left: 12px;\n}\n.product-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-size: 16px;\n    font-weight: bold;\n}\n.pizza[_ngcontent-%COMP%]   .myBtnContainer[_ngcontent-%COMP%] {\n    background-color: rgb(221, 221, 221);\n    padding: 10px;\n    border-radius: 20px;\n}\n.pizzaType[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-wrap: break-word;\n}\n.pizza[_ngcontent-%COMP%] {\n    display: none;\n  }\n.show[_ngcontent-%COMP%] {\n    display: block;\n}\n.container[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    overflow: hidden;\n}\n.con-price[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n    font-weight: bold;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n.btn[_ngcontent-%COMP%] {\n    border: none;\n    outline: none;\n    border-radius: 40px;\n    padding: 12px 16px;\n    background-color: #f1f1f1;\n    cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:hover {\n    background-color: black;\n    color: white;\n}\n.btn.active[_ngcontent-%COMP%] {\n    background-color: black;\n    color: white;\n}\n.add-active[_ngcontent-%COMP%] {\n    box-shadow: 0px 10px 30px 0px rgba(254, 160, 26, .2);\n    \n}\n.add-active[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n    display: none;\n}\n.add-active[_ngcontent-%COMP%]   .con-input-btns[_ngcontent-%COMP%] {\n    display: flex;\n}\n.add[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px;\n    background: linear-gradient(130deg, #fdc527 0%, #fea01a 100% );\n    border: 0px;\n    border-radius: 20px;\n    color: #fff;\n    font-weight: bold;\n    font-size: 1rem;\n}\n.con-input-btns[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 10px;\n    flex: 1;\n    width: calc(100% - 100px);\n    height: 49px;\n    border: 0px;\n    border-bottom: 2px solid #f5f5f5;\n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: bold;\n    color: black;\n}\n.con-input-btns[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    display: none;\n}\n.con-input-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px;\n    min-width: 49px;\n    height: 49px;\n    border: 0;\n    border-radius: 20px;\n    background: linear-gradient(130deg, #fdc527 0%, #fea01a 100% );\n    color: #fff;\n    font-size: 1.4rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all .25s ease;\n}\n#addCart[_ngcontent-%COMP%] {\n    outline: none;\n}\n#minus[_ngcontent-%COMP%] {\n    outline: none;\n\tposition: absolute;\n\ttop: 0;\n\tleft: -1px;\n\tbottom: 0;\n\tborder: 0;\n\tbackground: #2e0257;\n\tfont-size: 16px;\n\tpadding: 0 20px;\n\tcolor: #fff;\n\ttransition: 0.3s;\n\tborder-radius: 50px;\n\tbox-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\n}\n#plus[_ngcontent-%COMP%] {\n    outline: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: -1px;\n\tbottom: 0;\n\tborder: 0;\n\tbackground: #2e0257;\n\tfont-size: 16px;\n\tpadding: 0 20px;\n\tcolor: #fff;\n\ttransition: 0.3s;\n\tborder-radius: 50px;\n\tbox-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpenphLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzR0FBc0c7SUFDdEcsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksYUFBYTtFQUNmO0FBRUY7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBR0E7SUFDSSxvREFBb0Q7O0FBRXhEO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhEQUE4RDtJQUM5RCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4REFBOEQ7SUFDOUQsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7Q0FDaEIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixVQUFVO0NBQ1YsU0FBUztDQUNULFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQiwyQ0FBMkM7QUFDNUM7QUFFQTtJQUNJLGFBQWE7Q0FDaEIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixXQUFXO0NBQ1gsU0FBUztDQUNULFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQiwyQ0FBMkM7QUFDNUMiLCJmaWxlIjoicGl6emEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICBmb250LWZhbWlseTogICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTUzLCAxMTYpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tZW51IHtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbn1cblxuI3BpenphLXByb2R1Y3R7XG4gICAgbWFyZ2luOjIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubG9nbyB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ei1pbmRleDogNTA7XG59XG5cbi5sb2dvIGltZyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dvOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNob3BwaW5nLXRpdGxlIGkge1xuICAgIGNvbG9yOiAjMmUwMjU3Oztcbn1cbi5saW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgaGVpZ2h0OiAxcHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wcm9kdWN0LWltZyBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLnByb2R1Y3QtdGl0bGUgaDN7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGl6emEgLm15QnRuQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucGl6emFUeXBlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnBpenphIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuICBcbi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbi1wcmljZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG59XG4uYnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4gIFxuLmJ0bi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uYWRkLWFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCAwcHggcmdiYSgyNTQsIDE2MCwgMjYsIC4yKTtcbiAgICBcbn1cblxuLmFkZC1hY3RpdmUgLmFkZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFkZC1hY3RpdmUgLmNvbi1pbnB1dC1idG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICNmZGM1MjcgMCUsICNmZWEwMWEgMTAwJSApO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29uLWlucHV0LWJ0bnMgaW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIGhlaWdodDogNDlweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29uLWlucHV0LWJ0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmNvbi1pbnB1dC1idG5zIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtaW4td2lkdGg6IDQ5cHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICNmZGM1MjcgMCUsICNmZWEwMWEgMTAwJSApO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xufVxuXG4jYWRkQ2FydCB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuI21pbnVzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogLTFweDtcblx0Ym90dG9tOiAwO1xuXHRib3JkZXI6IDA7XG5cdGJhY2tncm91bmQ6ICMyZTAyNTc7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dHJhbnNpdGlvbjogMC4zcztcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Ym94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuI3BsdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRyaWdodDogLTFweDtcblx0Ym90dG9tOiAwO1xuXHRib3JkZXI6IDA7XG5cdGJhY2tncm91bmQ6ICMyZTAyNTc7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dHJhbnNpdGlvbjogMC4zcztcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Ym94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _component_pizza_pizza_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component/pizza/pizza.component */
      "KemO");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'pizza';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "pizza-page");
          }
        },
        directives: [_component_pizza_pizza_component__WEBPACK_IMPORTED_MODULE_1__["PizzaComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _component_pizza_pizza_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./component/pizza/pizza.component */
      "KemO");
      /* harmony import */


      var _services_ApiService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/ApiService */
      "HQXw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_ApiService__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _component_pizza_pizza_component__WEBPACK_IMPORTED_MODULE_5__["PizzaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map