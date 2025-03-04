import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grid3X3 icon from Lucide icons
 * @module
 */
export function LuGrid3X3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M3 9h18"},child:[]},{tag:"path",attr:{d:"M3 15h18"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]},{tag:"path",attr:{d:"M15 3v18"},child:[]}]})(props);
}
export default LuGrid3X3;
