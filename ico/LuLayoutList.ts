import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutList icon from Lucide icons
 * @module
 */
export function LuLayoutList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"14","rx":"1"},child:[]},{tag:"path",attr:{d:"M14 4h7"},child:[]},{tag:"path",attr:{d:"M14 9h7"},child:[]},{tag:"path",attr:{d:"M14 15h7"},child:[]},{tag:"path",attr:{d:"M14 20h7"},child:[]}]})(props);
}
export default LuLayoutList;
