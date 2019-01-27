import * as React from "react";
import { Button, IPanelProps } from "@blueprintjs/core";
 
class MyPanel extends React.Component<IPanelProps> {
    public render() {
        return <Button onClick={this.openSettingsPanel} text="Settings" />
    }
 
    private openSettingsPanel() {
        // openPanel (and closePanel) are injected by PanelStack
        this.props.openPanel({
            component: ()=> <div>From Panel</div>, // <- class or stateless function type
            props: { enabled: true }, // <- SettingsPanel props without IPanelProps
            title: "Settings",        // <- appears in header and back button
        });
    }
}

export default MyPanel;
