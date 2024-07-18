import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Settings2 icon from Lucide icons
 * @module
 */
export function LuSettings2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 7h-9"}},{tag:"path",attr:{d:"M14 17H5"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"17","r":"3"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"7","r":"3"},child:[]}]})(props);
}
export default LuSettings2;
