import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BoomBox icon from Lucide icons
 * @module
 */
export function LuBoomBox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}},{tag:"path",attr:{d:"M8 8v1"},child:[]},{tag:"path",attr:{d:"M12 8v1"},child:[]},{tag:"path",attr:{d:"M16 8v1"},child:[]},{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"9","rx":"2"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"15","r":"2"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"15","r":"2"},child:[]}]})(props);
}
export default LuBoomBox;
