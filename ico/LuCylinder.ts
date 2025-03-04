import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cylinder icon from Lucide icons
 * @module
 */
export function LuCylinder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"5","rx":"9","ry":"3"}},{tag:"path",attr:{d:"M3 5v14a9 3 0 0 0 18 0V5"},child:[]}]})(props);
}
export default LuCylinder;
