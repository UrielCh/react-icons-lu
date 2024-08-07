import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bot icon from Lucide icons
 * @module
 */
export function LuBot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"10",x:"3",y:"11","rx":"2"}},{tag:"circle",attr:{"cx":"12","cy":"5","r":"2"},child:[]},{tag:"path",attr:{d:"M12 7v4"},child:[]},{tag:"line",attr:{"x1":"8","x2":"8","y1":"16","y2":"16"},child:[]},{tag:"line",attr:{"x1":"16","x2":"16","y1":"16","y2":"16"},child:[]}]})(props);
}
export default LuBot;
