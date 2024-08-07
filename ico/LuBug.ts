import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bug icon from Lucide icons
 * @module
 */
export function LuBug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"14",x:"8",y:"6","rx":"4"}},{tag:"path",attr:{d:"m19 7-3 2"},child:[]},{tag:"path",attr:{d:"m5 7 3 2"},child:[]},{tag:"path",attr:{d:"m19 19-3-2"},child:[]},{tag:"path",attr:{d:"m5 19 3-2"},child:[]},{tag:"path",attr:{d:"M20 13h-4"},child:[]},{tag:"path",attr:{d:"M4 13h4"},child:[]},{tag:"path",attr:{d:"m10 4 1 2"},child:[]},{tag:"path",attr:{d:"m14 4-1 2"},child:[]}]})(props);
}
export default LuBug;
