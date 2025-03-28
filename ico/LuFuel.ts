import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Fuel icon from Lucide icons
 * @module
 */
export function LuFuel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"15","y1":"22","y2":"22"}},{tag:"line",attr:{"x1":"4","x2":"14","y1":"9","y2":"9"},child:[]},{tag:"path",attr:{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"},child:[]},{tag:"path",attr:{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"},child:[]}]})(props);
}
export default LuFuel;
