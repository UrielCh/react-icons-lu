import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShipWheel icon from Lucide icons
 * @module
 */
export function LuShipWheel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"8"}},{tag:"path",attr:{d:"M12 2v7.5"},child:[]},{tag:"path",attr:{d:"m19 5-5.23 5.23"},child:[]},{tag:"path",attr:{d:"M22 12h-7.5"},child:[]},{tag:"path",attr:{d:"m19 19-5.23-5.23"},child:[]},{tag:"path",attr:{d:"M12 14.5V22"},child:[]},{tag:"path",attr:{d:"M10.23 13.77 5 19"},child:[]},{tag:"path",attr:{d:"M9.5 12H2"},child:[]},{tag:"path",attr:{d:"M10.23 10.23 5 5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2.5"},child:[]}]})(props);
}
export default LuShipWheel;
