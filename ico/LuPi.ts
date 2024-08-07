import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pi icon from Lucide icons
 * @module
 */
export function LuPi(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"9","x2":"9","y1":"4","y2":"20"}},{tag:"path",attr:{d:"M4 7c0-1.7 1.3-3 3-3h13"},child:[]},{tag:"path",attr:{d:"M18 20c-1.7 0-3-1.3-3-3V4"},child:[]}]})(props);
}
export default LuPi;
