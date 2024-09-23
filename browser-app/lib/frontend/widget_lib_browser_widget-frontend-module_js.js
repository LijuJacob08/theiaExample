"use strict";
(self["webpackChunkbrowser_app"] = self["webpackChunkbrowser_app"] || []).push([["widget_lib_browser_widget-frontend-module_js"],{

/***/ "../node_modules/css-loader/dist/cjs.js!../widget/src/browser/style/index.css":
/*!************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../widget/src/browser/style/index.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#widget-container h2 {
    color: var(--theia-ui-font-color1);
    font-size: 12px;
    font-weight: 400;
    padding: 10px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap
}
`, "",{"version":3,"sources":["webpack://./../widget/src/browser/style/index.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB;AACJ","sourcesContent":["#widget-container h2 {\n    color: var(--theia-ui-font-color1);\n    font-size: 12px;\n    font-weight: 400;\n    padding: 10px;\n    text-transform: uppercase;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../widget/lib/browser/bible-widget.js":
/*!*********************************************!*\
  !*** ../widget/lib/browser/bible-widget.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BibleWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BibleWidget = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
let BibleWidget = BibleWidget_1 = class BibleWidget extends react_widget_1.ReactWidget {
    init() {
        this.id = BibleWidget_1.ID;
        this.title.label = BibleWidget_1.LABEL;
        this.title.caption = BibleWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-book'; // Icon for the widget
        this.update();
    }
    render() {
        return React.createElement("div", null,
            React.createElement("h1", null, "Bible"),
            React.createElement("p", null, "This is the Bible widget content."));
    }
};
exports.BibleWidget = BibleWidget;
BibleWidget.ID = 'bible-widget';
BibleWidget.LABEL = 'Bible Widget';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BibleWidget.prototype, "init", null);
exports.BibleWidget = BibleWidget = BibleWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], BibleWidget);


/***/ }),

/***/ "../widget/lib/browser/obs-widget.js":
/*!*******************************************!*\
  !*** ../widget/lib/browser/obs-widget.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OBSWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OBSWidget = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
let OBSWidget = OBSWidget_1 = class OBSWidget extends react_widget_1.ReactWidget {
    init() {
        this.id = OBSWidget_1.ID;
        this.title.label = OBSWidget_1.LABEL;
        this.title.caption = OBSWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-file'; // Icon for the widget
        this.update();
    }
    render() {
        return React.createElement("div", null,
            React.createElement("h1", null, "OBS"),
            React.createElement("p", null, "This is the OBS widget content."));
    }
};
exports.OBSWidget = OBSWidget;
OBSWidget.ID = 'obs-widget';
OBSWidget.LABEL = 'OBS Widget';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OBSWidget.prototype, "init", null);
exports.OBSWidget = OBSWidget = OBSWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], OBSWidget);


/***/ }),

/***/ "../widget/lib/browser/widget-contribution.js":
/*!****************************************************!*\
  !*** ../widget/lib/browser/widget-contribution.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WidgetContribution = exports.WidgetCommand = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const widget_widget_1 = __webpack_require__(/*! ./widget-widget */ "../widget/lib/browser/widget-widget.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.WidgetCommand = { id: 'widget:command' };
let WidgetContribution = class WidgetContribution extends browser_1.AbstractViewContribution {
    /**
     * `AbstractViewContribution` handles the creation and registering
     *  of the widget including commands, menus, and keybindings.
     *
     * We can pass `defaultWidgetOptions` which define widget properties such as
     * its location `area` (`main`, `left`, `right`, `bottom`), `mode`, and `ref`.
     *
     */
    constructor() {
        super({
            widgetId: widget_widget_1.WidgetWidget.ID,
            widgetName: widget_widget_1.WidgetWidget.LABEL,
            defaultWidgetOptions: { area: 'left' },
            toggleCommandId: exports.WidgetCommand.id
        });
    }
    /**
     * Example command registration to open the widget from the menu, and quick-open.
     * For a simpler use case, it is possible to simply call:
     ```ts
        super.registerCommands(commands)
     ```
     *
     * For more flexibility, we can pass `OpenViewArguments` which define
     * options on how to handle opening the widget:
     *
     ```ts
        toggle?: boolean
        activate?: boolean;
        reveal?: boolean;
     ```
     *
     * @param commands
     */
    registerCommands(commands) {
        commands.registerCommand(exports.WidgetCommand, {
            execute: () => super.openView({ activate: false, reveal: true })
        });
    }
    /**
     * Example menu registration to contribute a menu item used to open the widget.
     * Default location when extending the `AbstractViewContribution` is the `View` main-menu item.
     *
     * We can however define new menu path locations in the following way:
     ```ts
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: 'id',
            label: 'label'
        });
     ```
     *
     * @param menus
     */
    registerMenus(menus) {
        super.registerMenus(menus);
    }
};
exports.WidgetContribution = WidgetContribution;
exports.WidgetContribution = WidgetContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], WidgetContribution);


/***/ }),

/***/ "../widget/lib/browser/widget-frontend-module.js":
/*!*******************************************************!*\
  !*** ../widget/lib/browser/widget-frontend-module.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// import { ContainerModule } from '@theia/core/shared/inversify';
// import { WidgetWidget } from './widget-widget';
// import { WidgetContribution } from './widget-contribution';
// import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../../src/browser/style/index.css */ "../widget/src/browser/style/index.css");
// export default new ContainerModule(bind => {
//     bindViewContribution(bind, WidgetContribution);
//     bind(FrontendApplicationContribution).toService(WidgetContribution);
//     bind(WidgetWidget).toSelf();
//     bind(WidgetFactory).toDynamicValue(ctx => ({
//         id: WidgetWidget.ID,
//         createWidget: () => ctx.container.get<WidgetWidget>(WidgetWidget)
//     })).inSingletonScope();
// });
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const widget_contribution_1 = __webpack_require__(/*! ./widget-contribution */ "../widget/lib/browser/widget-contribution.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const widget_widget_1 = __webpack_require__(/*! ./widget-widget */ "../widget/lib/browser/widget-widget.js");
const bible_widget_1 = __webpack_require__(/*! ./bible-widget */ "../widget/lib/browser/bible-widget.js");
const obs_widget_1 = __webpack_require__(/*! ./obs-widget */ "../widget/lib/browser/obs-widget.js");
// import { WidgetFactory } from '@theia/core/lib/browser/widget-manager';
exports["default"] = new inversify_1.ContainerModule(bind => {
    // Register WidgetWidget
    (0, browser_1.bindViewContribution)(bind, widget_contribution_1.WidgetContribution);
    bind(browser_1.FrontendApplicationContribution).toService(widget_contribution_1.WidgetContribution);
    bind(widget_widget_1.WidgetWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: widget_widget_1.WidgetWidget.ID,
        createWidget: () => ctx.container.get(widget_widget_1.WidgetWidget)
    }));
    // Register BibleWidget
    bind(bible_widget_1.BibleWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: bible_widget_1.BibleWidget.ID,
        createWidget: () => ctx.container.get(bible_widget_1.BibleWidget)
    }));
    // Register OBSWidget
    bind(obs_widget_1.OBSWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: obs_widget_1.OBSWidget.ID,
        createWidget: () => ctx.container.get(obs_widget_1.OBSWidget)
    }));
});


/***/ }),

/***/ "../widget/lib/browser/widget-widget.js":
/*!**********************************************!*\
  !*** ../widget/lib/browser/widget-widget.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WidgetWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WidgetWidget = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
const application_shell_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/application-shell */ "../node_modules/@theia/core/lib/browser/shell/application-shell.js");
const widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "../node_modules/@theia/core/lib/browser/widget-manager.js");
const bible_widget_1 = __webpack_require__(/*! ./bible-widget */ "../widget/lib/browser/bible-widget.js");
const obs_widget_1 = __webpack_require__(/*! ./obs-widget */ "../widget/lib/browser/obs-widget.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
let WidgetWidget = WidgetWidget_1 = class WidgetWidget extends react_widget_1.ReactWidget {
    init() {
        this.id = WidgetWidget_1.ID;
        this.title.label = WidgetWidget_1.LABEL;
        this.title.caption = WidgetWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // Example widget icon
        this.update();
    }
    render() {
        return React.createElement("div", { id: 'widget-container' },
            React.createElement("button", { className: 'theia-button primary', title: 'Open Bible', onClick: _ => this.selectBible() }, "Bible"),
            React.createElement("button", { className: 'theia-button primary', title: 'Open OBS', onClick: _ => this.selectOBS() }, "OBS"));
    }
    async selectBible() {
        this.messageService.info('Bible widget is being opened...');
        const bibleWidget = await this.widgetManager.getOrCreateWidget(bible_widget_1.BibleWidget.ID);
        this.applicationShell.addWidget(bibleWidget, { area: 'main' });
        this.applicationShell.activateWidget(bibleWidget.id);
    }
    async selectOBS() {
        this.messageService.info('OBS widget is being opened...');
        const obsWidget = await this.widgetManager.getOrCreateWidget(obs_widget_1.OBSWidget.ID);
        this.applicationShell.addWidget(obsWidget, { area: 'main' });
        this.applicationShell.activateWidget(obsWidget.id);
    }
};
exports.WidgetWidget = WidgetWidget;
WidgetWidget.ID = 'widget:widget';
WidgetWidget.LABEL = 'Select Modal Widget';
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], WidgetWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.inject)(application_shell_1.ApplicationShell),
    __metadata("design:type", application_shell_1.ApplicationShell)
], WidgetWidget.prototype, "applicationShell", void 0);
__decorate([
    (0, inversify_1.inject)(widget_manager_1.WidgetManager),
    __metadata("design:type", widget_manager_1.WidgetManager)
], WidgetWidget.prototype, "widgetManager", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WidgetWidget.prototype, "init", null);
exports.WidgetWidget = WidgetWidget = WidgetWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], WidgetWidget);


/***/ }),

/***/ "../widget/src/browser/style/index.css":
/*!*********************************************!*\
  !*** ../widget/src/browser/style/index.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "../node_modules/css-loader/dist/cjs.js!../widget/src/browser/style/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=widget_lib_browser_widget-frontend-module_js.js.map