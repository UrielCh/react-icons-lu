import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockKeyhole icon from Lucide icons
 * @module
 */
export function LuLockKeyhole(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"16","r":"1"}},{tag:"rect",attr:{x:"3",y:"10","width":"18","height":"12","rx":"2"},child:[]},{tag:"path",attr:{d:"M7 10V7a5 5 0 0 1 10 0v3"},child:[]}]})(props);
}
export default LuLockKeyhole;
