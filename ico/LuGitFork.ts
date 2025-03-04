import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitFork icon from Lucide icons
 * @module
 */
export function LuGitFork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"18","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"6","r":"3"},child:[]},{tag:"path",attr:{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"},child:[]},{tag:"path",attr:{d:"M12 12v3"},child:[]}]})(props);
}
export default LuGitFork;
