import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scaling icon from Lucide icons
 * @module
 */
export function LuScaling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 3 9 15"}},{tag:"path",attr:{d:"M12 3H3v18h18v-9"},child:[]},{tag:"path",attr:{d:"M16 3h5v5"},child:[]},{tag:"path",attr:{d:"M14 15H9v-5"},child:[]}]})(props);
}
export default LuScaling;
