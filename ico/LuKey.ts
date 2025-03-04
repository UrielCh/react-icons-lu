import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Key icon from Lucide icons
 * @module
 */
export function LuKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}},{tag:"path",attr:{d:"m21 2-9.6 9.6"},child:[]},{tag:"circle",attr:{"cx":"7.5","cy":"15.5","r":"5.5"},child:[]}]})(props);
}
export default LuKey;
