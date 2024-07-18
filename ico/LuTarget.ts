import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Target icon from Lucide icons
 * @module
 */
export function LuTarget(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"6"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]}]})(props);
}
export default LuTarget;
