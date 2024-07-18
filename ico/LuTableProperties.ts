import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TableProperties icon from Lucide icons
 * @module
 */
export function LuTableProperties(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3v18"}},{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M21 9H3"},child:[]},{tag:"path",attr:{d:"M21 15H3"},child:[]}]})(props);
}
export default LuTableProperties;
