import { nothing } from 'lit';
import { LooseObject } from '../types';
import { HeaderData } from '../config/header';
type HeaderOptions = {
    header: false | HeaderData;
    entity: LooseObject;
    openEntityPopover: any;
    toggleEntityChanged: any;
};
export default function renderHeader({ header, toggleEntityChanged, entity, openEntityPopover, }: HeaderOptions): import("lit-html").TemplateResult<1> | typeof nothing;
export {};
