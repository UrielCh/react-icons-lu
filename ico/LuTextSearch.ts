import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextSearch icon from Lucide icons
 * @module
 */
export function LuTextSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 6H3"}},{tag:"path",attr:{d:"M10 12H3"},child:[]},{tag:"path",attr:{d:"M10 18H3"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"15","r":"3"},child:[]},{tag:"path",attr:{d:"m21 19-1.9-1.9"},child:[]}]})(props);
}
export default LuTextSearch;
