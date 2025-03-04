import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileBadge icon from Lucide icons
 * @module
 */
export function LuFileBadge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M14 2v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"},child:[]},{tag:"path",attr:{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"},child:[]}]})(props);
}
export default LuFileBadge;
