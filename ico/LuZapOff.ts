import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ZapOff icon from Lucide icons
 * @module
 */
export function LuZapOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"12.41 6.75 13 2 10.57 4.92"}},{tag:"polyline",attr:{"points":"18.57 12.91 21 10 15.66 10"},child:[]},{tag:"polyline",attr:{"points":"8 8 3 14 12 14 11 22 16 16"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"},child:[]}]})(props);
}
export default LuZapOff;
