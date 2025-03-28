import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileKey icon from Lucide icons
 * @module
 */
export function LuFileKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}},{tag:"circle",attr:{"cx":"10","cy":"16","r":"2"},child:[]},{tag:"path",attr:{d:"m16 10-4.5 4.5"},child:[]},{tag:"path",attr:{d:"m15 11 1 1"},child:[]}]})(props);
}
export default LuFileKey;
