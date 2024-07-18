import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Eye icon from Lucide icons
 * @module
 */
export function LuEye(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]}]})(props);
}
export default LuEye;
