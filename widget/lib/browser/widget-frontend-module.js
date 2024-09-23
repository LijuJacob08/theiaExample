"use strict";
// import { ContainerModule } from '@theia/core/shared/inversify';
// import { WidgetWidget } from './widget-widget';
// import { WidgetContribution } from './widget-contribution';
// import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';
Object.defineProperty(exports, "__esModule", { value: true });
require("../../src/browser/style/index.css");
// export default new ContainerModule(bind => {
//     bindViewContribution(bind, WidgetContribution);
//     bind(FrontendApplicationContribution).toService(WidgetContribution);
//     bind(WidgetWidget).toSelf();
//     bind(WidgetFactory).toDynamicValue(ctx => ({
//         id: WidgetWidget.ID,
//         createWidget: () => ctx.container.get<WidgetWidget>(WidgetWidget)
//     })).inSingletonScope();
// });
const browser_1 = require("@theia/core/lib/browser");
const widget_contribution_1 = require("./widget-contribution");
const inversify_1 = require("@theia/core/shared/inversify");
const widget_widget_1 = require("./widget-widget");
const bible_widget_1 = require("./bible-widget");
const obs_widget_1 = require("./obs-widget");
// import { WidgetFactory } from '@theia/core/lib/browser/widget-manager';
exports.default = new inversify_1.ContainerModule(bind => {
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
//# sourceMappingURL=widget-frontend-module.js.map