import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Database icon from Lucide icons
 * @module
 */
export function LuDatabase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"5","rx":"9","ry":"3"}},{tag:"path",attr:{d:"M3 5V19A9 3 0 0 0 21 19V5"},child:[]},{tag:"path",attr:{d:"M3 12A9 3 0 0 0 21 12"},child:[]}]})(props);
}
export default LuDatabase;
