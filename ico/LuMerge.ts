import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Merge icon from Lucide icons
 * @module
 */
export function LuMerge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m8 6 4-4 4 4"}},{tag:"path",attr:{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"},child:[]},{tag:"path",attr:{d:"m20 22-5-5"},child:[]}]})(props);
}
export default LuMerge;
