import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitMerge icon from Lucide icons
 * @module
 */
export function LuGitMerge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(props);
}
export default LuGitMerge;
