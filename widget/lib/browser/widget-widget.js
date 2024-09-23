"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetWidget = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const core_1 = require("@theia/core");
const application_shell_1 = require("@theia/core/lib/browser/shell/application-shell");
const widget_manager_1 = require("@theia/core/lib/browser/widget-manager");
const bible_widget_1 = require("./bible-widget");
const obs_widget_1 = require("./obs-widget");
const React = require("react");
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
//# sourceMappingURL=widget-widget.js.map