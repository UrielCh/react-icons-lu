import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Music3 icon from Lucide icons
 * @module
 */
export function LuMusic3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"18","r":"4"}},{tag:"path",attr:{d:"M16 18V2"},child:[]}]})(props);
}
export default LuMusic3;
