import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitPullRequestArrow icon from Lucide icons
 * @module
 */
export function LuGitPullRequestArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"5","cy":"6","r":"3"}},{tag:"path",attr:{d:"M5 9v12"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"18","r":"3"},child:[]},{tag:"path",attr:{d:"m15 9-3-3 3-3"},child:[]},{tag:"path",attr:{d:"M12 6h5a2 2 0 0 1 2 2v7"},child:[]}]})(props);
}
export default LuGitPullRequestArrow;
