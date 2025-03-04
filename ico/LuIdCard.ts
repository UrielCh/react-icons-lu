import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * IdCard icon from Lucide icons
 * @module
 */
export function LuIdCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 10h2"}},{tag:"path",attr:{d:"M16 14h2"},child:[]},{tag:"path",attr:{d:"M6.17 15a3 3 0 0 1 5.66 0"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"11","r":"2"},child:[]},{tag:"rect",attr:{x:"2",y:"5","width":"20","height":"14","rx":"2"},child:[]}]})(props);
}
export default LuIdCard;
