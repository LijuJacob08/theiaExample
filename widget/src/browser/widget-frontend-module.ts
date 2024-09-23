// import { ContainerModule } from '@theia/core/shared/inversify';
// import { WidgetWidget } from './widget-widget';
// import { WidgetContribution } from './widget-contribution';
// import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

// export default new ContainerModule(bind => {
//     bindViewContribution(bind, WidgetContribution);
//     bind(FrontendApplicationContribution).toService(WidgetContribution);
//     bind(WidgetWidget).toSelf();
//     bind(WidgetFactory).toDynamicValue(ctx => ({
//         id: WidgetWidget.ID,
//         createWidget: () => ctx.container.get<WidgetWidget>(WidgetWidget)
//     })).inSingletonScope();
// });
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';
import { WidgetContribution } from './widget-contribution';

import { ContainerModule } from '@theia/core/shared/inversify';
import { WidgetWidget } from './widget-widget';
import { BibleWidget } from './bible-widget';
import { OBSWidget } from './obs-widget';
// import { WidgetFactory } from '@theia/core/lib/browser/widget-manager';

export default new ContainerModule(bind => {
    // Register WidgetWidget
        bindViewContribution(bind, WidgetContribution);
    bind(FrontendApplicationContribution).toService(WidgetContribution);
    bind(WidgetWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: WidgetWidget.ID,
        createWidget: () => ctx.container.get(WidgetWidget)
    }));

    // Register BibleWidget
    bind(BibleWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: BibleWidget.ID,
        createWidget: () => ctx.container.get(BibleWidget)
    }));

    // Register OBSWidget
    bind(OBSWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: OBSWidget.ID,
        createWidget: () => ctx.container.get(OBSWidget)
    }));
});
