import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Contact icon from Lucide icons
 * @module
 */
export function LuContact(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 2v2"}},{tag:"path",attr:{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M8 2v2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"11","r":"3"},child:[]},{tag:"rect",attr:{x:"3",y:"4","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
export default LuContact;
