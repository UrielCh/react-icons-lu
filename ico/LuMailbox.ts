import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mailbox icon from Lucide icons
 * @module
 */
export function LuMailbox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}},{tag:"polyline",attr:{"points":"15,9 18,9 18,11"},child:[]},{tag:"path",attr:{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"},child:[]},{tag:"line",attr:{"x1":"6","x2":"7","y1":"10","y2":"10"},child:[]}]})(props);
}
export default LuMailbox;
