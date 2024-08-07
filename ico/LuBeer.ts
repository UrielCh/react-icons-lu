import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Beer icon from Lucide icons
 * @module
 */
export function LuBeer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 11h1a3 3 0 0 1 0 6h-1"}},{tag:"path",attr:{d:"M9 12v6"},child:[]},{tag:"path",attr:{d:"M13 12v6"},child:[]},{tag:"path",attr:{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"},child:[]},{tag:"path",attr:{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"},child:[]}]})(props);
}
export default LuBeer;
