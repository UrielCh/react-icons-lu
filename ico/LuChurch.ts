import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Church icon from Lucide icons
 * @module
 */
export function LuChurch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"}},{tag:"path",attr:{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"},child:[]},{tag:"path",attr:{d:"M18 22V5l-6-3-6 3v17"},child:[]},{tag:"path",attr:{d:"M12 7v5"},child:[]},{tag:"path",attr:{d:"M10 9h4"},child:[]}]})(props);
}
export default LuChurch;
