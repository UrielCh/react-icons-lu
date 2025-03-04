import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UserSearch icon from Lucide icons
 * @module
 */
export function LuUserSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"10","cy":"7","r":"4"}},{tag:"path",attr:{d:"M10.3 15H7a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"17","r":"3"},child:[]},{tag:"path",attr:{d:"m21 21-1.9-1.9"},child:[]}]})(props);
}
export default LuUserSearch;
