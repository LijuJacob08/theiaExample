import { injectable, postConstruct } from '@theia/core/shared/inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import React = require('react');

@injectable()
export class BibleWidget extends ReactWidget {
    static readonly ID = 'bible-widget';
    static readonly LABEL = 'Bible Widget';

    @postConstruct()
    protected init(): void {
        this.id = BibleWidget.ID;
        this.title.label = BibleWidget.LABEL;
        this.title.caption = BibleWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-book'; // Icon for the widget
        this.update();
    }

    render(): React.ReactElement {
        return <div>
            <h1>Bible</h1>
            <p>This is the Bible widget content.</p>
        </div>;
    }
}
