import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PinOff icon from Lucide icons
 * @module
 */
export function LuPinOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"17","y2":"22"},child:[]},{tag:"path",attr:{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"},child:[]},{tag:"path",attr:{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89"},child:[]}]})(props);
}
export default LuPinOff;
