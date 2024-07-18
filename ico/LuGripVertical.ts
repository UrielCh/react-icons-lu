import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GripVertical icon from Lucide icons
 * @module
 */
export function LuGripVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"9","cy":"12","r":"1"}},{tag:"circle",attr:{"cx":"9","cy":"5","r":"1"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"19","r":"1"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"5","r":"1"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"19","r":"1"},child:[]}]})(props);
}
export default LuGripVertical;
