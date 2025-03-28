import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Luggage icon from Lucide icons
 * @module
 */
export function LuLuggage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}},{tag:"path",attr:{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"},child:[]},{tag:"path",attr:{d:"M10 20h4"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"20","r":"2"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"20","r":"2"},child:[]}]})(props);
}
export default LuLuggage;
