import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Radio icon from Lucide icons
 * @module
 */
export function LuRadio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}},{tag:"path",attr:{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"2"},child:[]},{tag:"path",attr:{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"},child:[]},{tag:"path",attr:{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"},child:[]}]})(props);
}
export default LuRadio;
