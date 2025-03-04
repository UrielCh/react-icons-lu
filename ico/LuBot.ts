import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bot icon from Lucide icons
 * @module
 */
export function LuBot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8V4H8"}},{tag:"rect",attr:{"width":"16","height":"12",x:"4",y:"8","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 14h2"},child:[]},{tag:"path",attr:{d:"M20 14h2"},child:[]},{tag:"path",attr:{d:"M15 13v2"},child:[]},{tag:"path",attr:{d:"M9 13v2"},child:[]}]})(props);
}
export default LuBot;
