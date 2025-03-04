import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UsersRound icon from Lucide icons
 * @module
 */
export function LuUsersRound(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 21a8 8 0 0 0-16 0"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"5"},child:[]},{tag:"path",attr:{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"},child:[]}]})(props);
}
export default LuUsersRound;
