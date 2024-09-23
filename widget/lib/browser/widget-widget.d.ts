import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { ApplicationShell } from '@theia/core/lib/browser/shell/application-shell';
import { WidgetManager } from '@theia/core/lib/browser/widget-manager';
import React = require('react');
export declare class WidgetWidget extends ReactWidget {
    static readonly ID = "widget:widget";
    static readonly LABEL = "Select Modal Widget";
    protected readonly messageService: MessageService;
    protected readonly applicationShell: ApplicationShell;
    protected readonly widgetManager: WidgetManager;
    protected init(): void;
    render(): React.ReactElement;
    protected selectBible(): Promise<void>;
    protected selectOBS(): Promise<void>;
}
//# sourceMappingURL=widget-widget.d.ts.map