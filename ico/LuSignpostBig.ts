import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignpostBig icon from Lucide icons
 * @module
 */
export function LuSignpostBig(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9H4L2 7l2-2h6"}},{tag:"path",attr:{d:"M14 5h6l2 2-2 2h-6"},child:[]},{tag:"path",attr:{d:"M10 22V4a2 2 0 1 1 4 0v18"},child:[]},{tag:"path",attr:{d:"M8 22h8"},child:[]}]})(props);
}
export default LuSignpostBig;
