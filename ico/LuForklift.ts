import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Forklift icon from Lucide icons
 * @module
 */
export function LuForklift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12H5a2 2 0 0 0-2 2v5"}},{tag:"circle",attr:{"cx":"13","cy":"19","r":"2"},child:[]},{tag:"circle",attr:{"cx":"5","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"},child:[]}]})(props);
}
export default LuForklift;
