import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shapes icon from Lucide icons
 * @module
 */
export function LuShapes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}},{tag:"rect",attr:{x:"3",y:"14","width":"7","height":"7","rx":"1"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"17.5","r":"3.5"},child:[]}]})(props);
}
export default LuShapes;
