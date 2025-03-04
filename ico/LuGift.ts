import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gift icon from Lucide icons
 * @module
 */
export function LuGift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"8","width":"18","height":"4","rx":"1"}},{tag:"path",attr:{d:"M12 8v13"},child:[]},{tag:"path",attr:{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"},child:[]},{tag:"path",attr:{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"},child:[]}]})(props);
}
export default LuGift;
