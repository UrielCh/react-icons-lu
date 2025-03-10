import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Turtle icon from Lucide icons
 * @module
 */
export function LuTurtle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}},{tag:"path",attr:{d:"M4.82 7.9 8 10"},child:[]},{tag:"path",attr:{d:"M15.18 7.9 12 10"},child:[]},{tag:"path",attr:{d:"M16.93 10H20a2 2 0 0 1 0 4H2"},child:[]}]})(props);
}
export default LuTurtle;
