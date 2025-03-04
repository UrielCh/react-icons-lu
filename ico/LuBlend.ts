import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Blend icon from Lucide icons
 * @module
 */
export function LuBlend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"9","cy":"9","r":"7"}},{tag:"circle",attr:{"cx":"15","cy":"15","r":"7"},child:[]}]})(props);
}
export default LuBlend;
