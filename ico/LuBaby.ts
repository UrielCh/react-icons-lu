import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Baby icon from Lucide icons
 * @module
 */
export function LuBaby(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 12h.01"}},{tag:"path",attr:{d:"M15 12h.01"},child:[]},{tag:"path",attr:{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"},child:[]},{tag:"path",attr:{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"},child:[]}]})(props);
}
export default LuBaby;
