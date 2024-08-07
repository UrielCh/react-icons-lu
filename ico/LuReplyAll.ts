import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ReplyAll icon from Lucide icons
 * @module
 */
export function LuReplyAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"7 17 2 12 7 7"}},{tag:"polyline",attr:{"points":"12 17 7 12 12 7"},child:[]},{tag:"path",attr:{d:"M22 18v-2a4 4 0 0 0-4-4H7"},child:[]}]})(props);
}
export default LuReplyAll;
