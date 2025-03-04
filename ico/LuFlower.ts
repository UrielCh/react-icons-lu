import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flower icon from Lucide icons
 * @module
 */
export function LuFlower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"path",attr:{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"},child:[]},{tag:"path",attr:{d:"M12 7.5V9"},child:[]},{tag:"path",attr:{d:"M7.5 12H9"},child:[]},{tag:"path",attr:{d:"M16.5 12H15"},child:[]},{tag:"path",attr:{d:"M12 16.5V15"},child:[]},{tag:"path",attr:{d:"m8 8 1.88 1.88"},child:[]},{tag:"path",attr:{d:"M14.12 9.88 16 8"},child:[]},{tag:"path",attr:{d:"m8 16 1.88-1.88"},child:[]},{tag:"path",attr:{d:"M14.12 14.12 16 16"},child:[]}]})(props);
}
export default LuFlower;
