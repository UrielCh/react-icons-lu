import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Anchor icon from Lucide icons
 * @module
 */
export function LuAnchor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22V8"}},{tag:"path",attr:{d:"M5 12H2a10 10 0 0 0 20 0h-3"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"5","r":"3"},child:[]}]})(props);
}
export default LuAnchor;
