import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Thermometer icon from Lucide icons
 * @module
 */
export function LuThermometer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}}]})(props);
}
export default LuThermometer;
