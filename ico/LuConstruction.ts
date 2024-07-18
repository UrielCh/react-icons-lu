import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Construction icon from Lucide icons
 * @module
 */
export function LuConstruction(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"6","width":"20","height":"8","rx":"1"}},{tag:"path",attr:{d:"M17 14v7"},child:[]},{tag:"path",attr:{d:"M7 14v7"},child:[]},{tag:"path",attr:{d:"M17 3v3"},child:[]},{tag:"path",attr:{d:"M7 3v3"},child:[]},{tag:"path",attr:{d:"M10 14 2.3 6.3"},child:[]},{tag:"path",attr:{d:"m14 6 7.7 7.7"},child:[]},{tag:"path",attr:{d:"m8 6 8 8"},child:[]}]})(props);
}
export default LuConstruction;
