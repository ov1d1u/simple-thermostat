import { HASS, LooseObject } from '../types';
export interface HAState {
    state: string | number;
    entity_id: string;
    attributes: LooseObject;
    last_changed?: string;
    last_updated?: string;
}
export interface Fault {
    entity: string;
    icon?: string;
    hide_inactive?: boolean;
}
export declare const STATE_ICONS: {
    auto: string;
    cooling: string;
    fan: string;
    heating: string;
    idle: string;
    off: string;
};
export declare const MODE_ICONS: {
    auto: string;
    cool: string;
    dry: string;
    fan_only: string;
    heat_cool: string;
    heat: string;
    off: string;
};
type Icon = string | false | LooseObject;
type Name = string | false;
export interface HeaderConfig {
    name?: Name;
    icon?: Icon;
    faults?: Array<Fault>;
    toggle?: ToggleConfig;
}
export interface HeaderData {
    name?: Name;
    icon: Icon;
    faults?: Array<Fault>;
    toggle?: Toggle;
}
export interface Toggle {
    entity: HAState;
    label: string;
}
export type ToggleConfig = {
    entity: string;
    name?: string | boolean;
};
export default function parseHeaderConfig(config: false | HeaderConfig, entity: any, hass: HASS): false | HeaderData;
export {};
