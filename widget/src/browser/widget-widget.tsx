import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { ApplicationShell } from '@theia/core/lib/browser/shell/application-shell';
import { WidgetManager } from '@theia/core/lib/browser/widget-manager';
import { BibleWidget } from './bible-widget';
import { OBSWidget } from './obs-widget';
import React = require('react');

@injectable()
export class WidgetWidget extends ReactWidget {

    static readonly ID = 'widget:widget';
    static readonly LABEL = 'Select Modal Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @inject(ApplicationShell)
    protected readonly applicationShell!: ApplicationShell;

    @inject(WidgetManager)
    protected readonly widgetManager!: WidgetManager;

    @postConstruct()
    protected init(): void {
        this.id = WidgetWidget.ID;
        this.title.label = WidgetWidget.LABEL;
        this.title.caption = WidgetWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // Example widget icon
        this.update();
    }

    render(): React.ReactElement {
        return <div id='widget-container'>
            <button className='theia-button primary' title='Open Bible' onClick={_ => this.selectBible()}>Bible</button>
            <button className='theia-button primary' title='Open OBS' onClick={_ => this.selectOBS()}>OBS</button>
        </div>;
    }

    protected async selectBible(): Promise<void> {
        this.messageService.info('Bible widget is being opened...');
        const bibleWidget = await this.widgetManager.getOrCreateWidget(BibleWidget.ID);
        this.applicationShell.addWidget(bibleWidget, { area: 'main' });
        this.applicationShell.activateWidget(bibleWidget.id);
    }

    protected async selectOBS(): Promise<void> {
        this.messageService.info('OBS widget is being opened...');
        const obsWidget = await this.widgetManager.getOrCreateWidget(OBSWidget.ID);
        this.applicationShell.addWidget(obsWidget, { area: 'main' });
        this.applicationShell.activateWidget(obsWidget.id);
    }
}
