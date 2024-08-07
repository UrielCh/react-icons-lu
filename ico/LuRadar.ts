import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Radar icon from Lucide icons
 * @module
 */
export function LuRadar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}},{tag:"path",attr:{d:"M4 6h.01"},child:[]},{tag:"path",attr:{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"},child:[]},{tag:"path",attr:{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"},child:[]},{tag:"path",attr:{d:"M12 18h.01"},child:[]},{tag:"path",attr:{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"m13.41 10.59 5.66-5.66"},child:[]}]})(props);
}
export default LuRadar;
