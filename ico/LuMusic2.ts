import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Music2 icon from Lucide icons
 * @module
 */
export function LuMusic2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"18","r":"4"}},{tag:"path",attr:{d:"M12 18V2l7 4"},child:[]}]})(props);
}
export default LuMusic2;
