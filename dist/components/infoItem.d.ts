import { LooseObject } from '../types';
interface InfoItemDetails extends LooseObject {
    heading?: string | false;
    icon?: string;
    unit?: string;
    decimals?: number;
    type?: string;
}
interface InfoItemOptions {
    hide?: boolean;
    state: any;
    hass: any;
    localize?: any;
    openEntityPopover?: any;
    details: InfoItemDetails;
}
export default function renderInfoItem({ hide, hass, state, details, localize, openEntityPopover, }: InfoItemOptions): any;
export {};
