import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Antenna icon from Lucide icons
 * @module
 */
export function LuAntenna(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12 7 2"}},{tag:"path",attr:{d:"m7 12 5-10"},child:[]},{tag:"path",attr:{d:"m12 12 5-10"},child:[]},{tag:"path",attr:{d:"m17 12 5-10"},child:[]},{tag:"path",attr:{d:"M4.5 7h15"},child:[]},{tag:"path",attr:{d:"M12 16v6"},child:[]}]})(props);
}
export default LuAntenna;
