export interface Setpoint {
    hide?: boolean;
}
export type Setpoints = Record<string, Setpoint>;
export default function parseSetpoints(setpoints: Setpoints | false, attributes: any): {
    target_temp_low?: undefined;
    target_temp_high?: undefined;
    temperature?: undefined;
} | {
    target_temp_low: any;
    target_temp_high: any;
    temperature?: undefined;
} | {
    temperature: any;
    target_temp_low?: undefined;
    target_temp_high?: undefined;
};
