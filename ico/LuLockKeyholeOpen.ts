import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockKeyholeOpen icon from Lucide icons
 * @module
 */
export function LuLockKeyholeOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"16","r":"1"}},{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"10","rx":"2"},child:[]},{tag:"path",attr:{d:"M7 10V7a5 5 0 0 1 9.33-2.5"},child:[]}]})(props);
}
export default LuLockKeyholeOpen;
