import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Glasses icon from Lucide icons
 * @module
 */
export function LuGlasses(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"15","r":"4"}},{tag:"circle",attr:{"cx":"18","cy":"15","r":"4"},child:[]},{tag:"path",attr:{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"},child:[]},{tag:"path",attr:{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"},child:[]}]})(props);
}
export default LuGlasses;
