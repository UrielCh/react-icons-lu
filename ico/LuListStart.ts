import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListStart icon from Lucide icons
 * @module
 */
export function LuListStart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12H3"}},{tag:"path",attr:{d:"M16 18H3"},child:[]},{tag:"path",attr:{d:"M10 6H3"},child:[]},{tag:"path",attr:{d:"M21 18V8a2 2 0 0 0-2-2h-5"},child:[]},{tag:"path",attr:{d:"m16 8-2-2 2-2"},child:[]}]})(props);
}
export default LuListStart;
