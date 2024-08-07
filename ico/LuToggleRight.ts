import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ToggleRight icon from Lucide icons
 * @module
 */
export function LuToggleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"12",x:"2",y:"6","rx":"6","ry":"6"}},{tag:"circle",attr:{"cx":"16","cy":"12","r":"2"},child:[]}]})(props);
}
export default LuToggleRight;
