import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Fence icon from Lucide icons
 * @module
 */
export function LuFence(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}},{tag:"path",attr:{d:"M6 8h4"},child:[]},{tag:"path",attr:{d:"M6 18h4"},child:[]},{tag:"path",attr:{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"},child:[]},{tag:"path",attr:{d:"M14 8h4"},child:[]},{tag:"path",attr:{d:"M14 18h4"},child:[]},{tag:"path",attr:{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"},child:[]}]})(props);
}
export default LuFence;
