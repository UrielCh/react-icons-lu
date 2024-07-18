import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Code2 icon from Lucide icons
 * @module
 */
export function LuCode2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 16 4-4-4-4"}},{tag:"path",attr:{d:"m6 8-4 4 4 4"},child:[]},{tag:"path",attr:{d:"m14.5 4-5 16"},child:[]}]})(props);
}
export default LuCode2;
