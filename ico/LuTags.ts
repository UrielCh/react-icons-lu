import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tags icon from Lucide icons
 * @module
 */
export function LuTags(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"}},{tag:"path",attr:{d:"M6 9.01V9"},child:[]},{tag:"path",attr:{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"},child:[]}]})(props);
}
export default LuTags;
