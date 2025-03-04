import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ImagePlus icon from Lucide icons
 * @module
 */
export function LuImagePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 5h6"}},{tag:"path",attr:{d:"M19 2v6"},child:[]},{tag:"path",attr:{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"},child:[]},{tag:"path",attr:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"9","r":"2"},child:[]}]})(props);
}
export default LuImagePlus;
