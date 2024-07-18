import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitCompare icon from Lucide icons
 * @module
 */
export function LuGitCompare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"path",attr:{d:"M11 18H8a2 2 0 0 1-2-2V9"},child:[]}]})(props);
}
export default LuGitCompare;
