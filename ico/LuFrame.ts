import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Frame icon from Lucide icons
 * @module
 */
export function LuFrame(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"22","x2":"2","y1":"6","y2":"6"}},{tag:"line",attr:{"x1":"22","x2":"2","y1":"18","y2":"18"},child:[]},{tag:"line",attr:{"x1":"6","x2":"6","y1":"2","y2":"22"},child:[]},{tag:"line",attr:{"x1":"18","x2":"18","y1":"2","y2":"22"},child:[]}]})(props);
}
export default LuFrame;
