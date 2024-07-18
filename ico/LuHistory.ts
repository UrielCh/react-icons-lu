import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * History icon from Lucide icons
 * @module
 */
export function LuHistory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attr:{d:"M3 3v5h5"},child:[]},{tag:"path",attr:{d:"M12 7v5l4 2"},child:[]}]})(props);
}
export default LuHistory;
