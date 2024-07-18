import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cpu icon from Lucide icons
 * @module
 */
export function LuCpu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4","width":"16","height":"16","rx":"2"}},{tag:"rect",attr:{x:"9",y:"9","width":"6","height":"6"},child:[]},{tag:"path",attr:{d:"M15 2v2"},child:[]},{tag:"path",attr:{d:"M15 20v2"},child:[]},{tag:"path",attr:{d:"M2 15h2"},child:[]},{tag:"path",attr:{d:"M2 9h2"},child:[]},{tag:"path",attr:{d:"M20 15h2"},child:[]},{tag:"path",attr:{d:"M20 9h2"},child:[]},{tag:"path",attr:{d:"M9 2v2"},child:[]},{tag:"path",attr:{d:"M9 20v2"},child:[]}]})(props);
}
export default LuCpu;
