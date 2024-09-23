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
var OBSWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBSWidget = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const React = require("react");
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
//# sourceMappingURL=obs-widget.js.map