import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ambulance icon from Lucide icons
 * @module
 */
export function LuAmbulance(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10H6"}},{tag:"path",attr:{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"},child:[]},{tag:"path",attr:{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"},child:[]},{tag:"path",attr:{d:"M8 8v4"},child:[]},{tag:"path",attr:{d:"M9 18h6"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"18","r":"2"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"18","r":"2"},child:[]}]})(props);
}
export default LuAmbulance;
