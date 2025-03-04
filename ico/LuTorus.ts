import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Torus icon from Lucide icons
 * @module
 */
export function LuTorus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{"cx":"12","cy":"11","rx":"3","ry":"2"}},{tag:"ellipse",attr:{"cx":"12","cy":"12.5","rx":"10","ry":"8.5"},child:[]}]})(props);
}
export default LuTorus;
