import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bandage icon from Lucide icons
 * @module
 */
export function LuBandage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10.01h.01"}},{tag:"path",attr:{d:"M10 14.01h.01"},child:[]},{tag:"path",attr:{d:"M14 10.01h.01"},child:[]},{tag:"path",attr:{d:"M14 14.01h.01"},child:[]},{tag:"path",attr:{d:"M18 6v11.5"},child:[]},{tag:"path",attr:{d:"M6 6v12"},child:[]},{tag:"rect",attr:{x:"2",y:"6","width":"20","height":"12","rx":"2"},child:[]}]})(props);
}
export default LuBandage;
