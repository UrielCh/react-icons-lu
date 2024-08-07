import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Wind icon from Lucide icons
 * @module
 */
export function LuWind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"}},{tag:"path",attr:{d:"M9.6 4.6A2 2 0 1 1 11 8H2"},child:[]},{tag:"path",attr:{d:"M12.6 19.4A2 2 0 1 0 14 16H2"},child:[]}]})(props);
}
export default LuWind;
