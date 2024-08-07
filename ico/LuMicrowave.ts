import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Microwave icon from Lucide icons
 * @module
 */
export function LuMicrowave(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"15",x:"2",y:"4","rx":"2"}},{tag:"rect",attr:{"width":"8","height":"7",x:"6",y:"8","rx":"1"},child:[]},{tag:"path",attr:{d:"M18 8v7"},child:[]},{tag:"path",attr:{d:"M6 19v2"},child:[]},{tag:"path",attr:{d:"M18 19v2"},child:[]}]})(props);
}
export default LuMicrowave;
