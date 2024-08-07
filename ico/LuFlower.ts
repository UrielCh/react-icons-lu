import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flower icon from Lucide icons
 * @module
 */
export function LuFlower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"m8 16 1.5-1.5"},child:[]},{tag:"path",attr:{d:"M14.5 9.5 16 8"},child:[]},{tag:"path",attr:{d:"m8 8 1.5 1.5"},child:[]},{tag:"path",attr:{d:"M14.5 14.5 16 16"},child:[]}]})(props);
}
export default LuFlower;
