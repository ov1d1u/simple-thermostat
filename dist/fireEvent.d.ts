import { LitElement } from 'lit';
import { LooseObject } from './types';
export interface HAEvent extends Event {
    detail?: string | LooseObject;
}
export default function fireEvent(node: LitElement, type: string, detail: string | LooseObject, options?: LooseObject): HAEvent;
