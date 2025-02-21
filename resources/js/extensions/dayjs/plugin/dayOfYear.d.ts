import { PluginFunc } from 'dayjs';

declare const plugin: PluginFunc;
export = plugin;

declare module 'dayjs' {
	interface Dayjs {
		dayOfYear(): number;
		dayOfYear(value: number): Dayjs;
	}
}
