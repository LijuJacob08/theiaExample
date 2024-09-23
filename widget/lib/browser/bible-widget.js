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
var BibleWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibleWidget = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const React = require("react");
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
//# sourceMappingURL=bible-widget.js.map