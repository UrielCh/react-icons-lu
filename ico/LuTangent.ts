import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tangent icon from Lucide icons
 * @module
 */
export function LuTangent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"17","cy":"4","r":"2"}},{tag:"path",attr:{d:"M15.59 5.41 5.41 15.59"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"17","r":"2"},child:[]},{tag:"path",attr:{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"},child:[]}]})(props);
}
export default LuTangent;
