import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cone icon from Lucide icons
 * @module
 */
export function LuCone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}},{tag:"ellipse",attr:{"cx":"12","cy":"19","rx":"9","ry":"3"},child:[]}]})(props);
}
export default LuCone;
