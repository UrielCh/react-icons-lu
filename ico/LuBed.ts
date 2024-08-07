import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bed icon from Lucide icons
 * @module
 */
export function LuBed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 4v16"}},{tag:"path",attr:{d:"M2 8h18a2 2 0 0 1 2 2v10"},child:[]},{tag:"path",attr:{d:"M2 17h20"},child:[]},{tag:"path",attr:{d:"M6 8v9"},child:[]}]})(props);
}
export default LuBed;
