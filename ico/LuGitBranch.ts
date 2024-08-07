import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitBranch icon from Lucide icons
 * @module
 */
export function LuGitBranch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"6","x2":"6","y1":"3","y2":"15"}},{tag:"circle",attr:{"cx":"18","cy":"6","r":"3"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(props);
}
export default LuGitBranch;
