import * as React from "react";
import "./../assets/scss/App.scss";

import { Button, Intent } from "@blueprintjs/core";

import { PanelStack } from "@blueprintjs/core";

import MyPanel from './mypanel';

import { Tab, Tabs, TabId } from "@blueprintjs/core";
 


const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

const AngularPanel = () => <div>Angular Panel</div>;
const EmberPanel = () => <div>Ember Panel</div>;
const ReactPanel = () => <div>Reactsss Panel</div>;
const BackbonePanel = () => <div>Backbone Panel</div>;



export default class App extends React.Component<AppProps, undefined> {
    handleTabChange() {}

    render() {
        return (
            <div className="app">
                <Button intent={Intent.PRIMARY} text="Psrimary" />
                <h1>Hello Worl!</h1>
                <p>Foos to the barz</p>
                <img src={reactLogo} height="480"/>

                <PanelStack initialPanel={{ component: MyPanel, title: "Home" }} />

                <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId="rx">
                    <Tab id="ng" title="Angular" panel={<AngularPanel />} />
                    <Tab id="mb" title="Ember" panel={<EmberPanel />} />
                    <Tab id="rx" title="React" panel={<ReactPanel />} />
                    <Tab id="bb" disabled title="Backbone" panel={<BackbonePanel />} />
                </Tabs>
            </div>
        );
    }
}
