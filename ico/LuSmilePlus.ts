import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SmilePlus icon from Lucide icons
 * @module
 */
export function LuSmilePlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11v1a10 10 0 1 1-9-10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"},child:[]},{tag:"line",attr:{"x1":"9","x2":"9.01","y1":"9","y2":"9"},child:[]},{tag:"line",attr:{"x1":"15","x2":"15.01","y1":"9","y2":"9"},child:[]},{tag:"path",attr:{d:"M16 5h6"},child:[]},{tag:"path",attr:{d:"M19 2v6"},child:[]}]})(props);
}
export default LuSmilePlus;
