import { injectable, postConstruct } from '@theia/core/shared/inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import React = require('react');

@injectable()
export class OBSWidget extends ReactWidget {
    static readonly ID = 'obs-widget';
    static readonly LABEL = 'OBS Widget';

    @postConstruct()
    protected init(): void {
        this.id = OBSWidget.ID;
        this.title.label = OBSWidget.LABEL;
        this.title.caption = OBSWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-file'; // Icon for the widget
        this.update();
    }

    render(): React.ReactElement {
        return <div>
            <h1>OBS</h1>
            <p>This is the OBS widget content.</p>
        </div>;
    }
}
