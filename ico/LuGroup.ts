import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Group icon from Lucide icons
 * @module
 */
export function LuGroup(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5c0-1.1.9-2 2-2h2"}},{tag:"path",attr:{d:"M17 3h2c1.1 0 2 .9 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2c0 1.1-.9 2-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"},child:[]},{tag:"rect",attr:{"width":"7","height":"5",x:"7",y:"7","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"5",x:"10",y:"12","rx":"1"},child:[]}]})(props);
}
export default LuGroup;
