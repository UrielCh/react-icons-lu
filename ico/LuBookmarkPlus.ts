import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BookmarkPlus icon from Lucide icons
 * @module
 */
export function LuBookmarkPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"7","y2":"13"},child:[]},{tag:"line",attr:{"x1":"15","x2":"9","y1":"10","y2":"10"},child:[]}]})(props);
}
export default LuBookmarkPlus;
