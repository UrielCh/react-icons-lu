import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Move3D icon from Lucide icons
 * @module
 */
export function LuMove3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 3v16h16"}},{tag:"path",attr:{d:"m5 19 6-6"},child:[]},{tag:"path",attr:{d:"m2 6 3-3 3 3"},child:[]},{tag:"path",attr:{d:"m18 16 3 3-3 3"},child:[]}]})(props);
}
export default LuMove3D;
