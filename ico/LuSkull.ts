import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Skull icon from Lucide icons
 * @module
 */
export function LuSkull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12.5 17-.5-1-.5 1h1z"}},{tag:"path",attr:{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"12","r":"1"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"12","r":"1"},child:[]}]})(props);
}
export default LuSkull;
