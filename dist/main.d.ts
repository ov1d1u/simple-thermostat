import { LitElement } from 'lit';
import { HeaderData } from './config/header';
import { Service } from './config/service';
import { CardConfig } from './config/card';
import { ControlMode, LooseObject, Sensor, PreparedSensor, HASS } from './types';
interface Values {
    [key: string]: number | string;
}
export default class SimpleThermostat extends LitElement {
    static get styles(): any;
    config: CardConfig;
    header: false | HeaderData;
    service: Service;
    modes: Array<ControlMode>;
    _hass: HASS;
    entity: LooseObject;
    sensors: Array<Sensor | PreparedSensor>;
    showSensors: boolean;
    name: string | false;
    stepSize: number;
    _values: Values;
    _updatingValues: boolean;
    _hide: {
        temperature: boolean;
        state: boolean;
    };
    _debouncedSetTemperature: import("debounce-fn").DebouncedFunction<[values: object], void>;
    static getConfigElement(): HTMLElement;
    setConfig(config: CardConfig): void;
    updated(): void;
    set hass(hass: any);
    localize: (label: string, prefix?: string) => any;
    render({ _hide, _values, _updatingValues, config, entity }?: this): import("lit-html").TemplateResult<1>;
    toggleEntityChanged: (ev: Event) => void;
    setTemperature(change: number, field: string): void;
    setMode: (type: string, mode: string) => void;
    openEntityPopover: (entityId?: any) => void;
    getCardSize(): number;
    getUnit(): string | boolean;
}
export {};
