import { ControlMode } from '../types';
interface ModeTypeOptions {
    state: string;
    mode: ControlMode;
    modeOptions: any;
    localize: any;
    setMode: any;
}
export default function renderModeType({ state, mode: options, modeOptions, localize, setMode, }: ModeTypeOptions): import("lit-html").TemplateResult<1>;
export {};
