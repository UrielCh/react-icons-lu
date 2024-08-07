import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bike icon from Lucide icons
 * @module
 */
export function LuBike(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"18.5","cy":"17.5","r":"3.5"}},{tag:"circle",attr:{"cx":"5.5","cy":"17.5","r":"3.5"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"5","r":"1"},child:[]},{tag:"path",attr:{d:"M12 17.5V14l-3-3 4-3 2 3h2"},child:[]}]})(props);
}
export default LuBike;
