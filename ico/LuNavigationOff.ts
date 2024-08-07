import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NavigationOff icon from Lucide icons
 * @module
 */
export function LuNavigationOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}},{tag:"path",attr:{d:"M17.39 11.73 22 2l-9.73 4.61"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
export default LuNavigationOff;
