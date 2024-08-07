import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Split icon from Lucide icons
 * @module
 */
export function LuSplit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3h5v5"}},{tag:"path",attr:{d:"M8 3H3v5"},child:[]},{tag:"path",attr:{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"},child:[]},{tag:"path",attr:{d:"m15 9 6-6"},child:[]}]})(props);
}
export default LuSplit;
