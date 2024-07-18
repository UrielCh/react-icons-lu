import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heading6 icon from Lucide icons
 * @module
 */
export function LuHeading6(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"circle",attr:{"cx":"19","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"M20 10c-2 2-3 3.5-3 6"},child:[]}]})(props);
}
export default LuHeading6;
