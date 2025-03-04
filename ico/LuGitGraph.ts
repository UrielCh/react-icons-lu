import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitGraph icon from Lucide icons
 * @module
 */
export function LuGitGraph(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"5","cy":"6","r":"3"}},{tag:"path",attr:{d:"M5 9v6"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M16 15.7A9 9 0 0 0 19 9"},child:[]}]})(props);
}
export default LuGitGraph;
