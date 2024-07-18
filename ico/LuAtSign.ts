import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AtSign icon from Lucide icons
 * @module
 */
export function LuAtSign(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"}},{tag:"path",attr:{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"},child:[]}]})(props);
}
export default LuAtSign;
