import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaseLower icon from Lucide icons
 * @module
 */
export function LuCaseLower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"7","cy":"12","r":"3"}},{tag:"path",attr:{d:"M10 9v6"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"M14 7v8"},child:[]}]})(props);
}
export default LuCaseLower;
