import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Replace icon from Lucide icons
 * @module
 */
export function LuReplace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 4a2 2 0 0 1 2-2"}},{tag:"path",attr:{d:"M16 10a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M20 2a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M22 8a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"m3 7 3 3 3-3"},child:[]},{tag:"path",attr:{d:"M6 10V5a3 3 0 0 1 3-3h1"},child:[]},{tag:"rect",attr:{x:"2",y:"14","width":"8","height":"8","rx":"2"},child:[]}]})(props);
}
export default LuReplace;
