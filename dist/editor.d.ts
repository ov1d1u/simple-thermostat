import { LitElement } from 'lit';
import { CardConfig } from './config/card';
import { HASS } from './types';
export default class SimpleThermostatEditor extends LitElement {
    config: CardConfig;
    hass: HASS;
    static get styles(): any;
    static get properties(): {
        hass: {};
        config: {};
    };
    static getStubConfig(): {
        header: {};
        layout: {
            mode: {};
        };
    };
    setConfig(config: any): void;
    _openLink(): void;
    render(): import("lit-html").TemplateResult<1>;
    valueChanged(ev: any): void;
    toggleHeader(ev: any): void;
}
