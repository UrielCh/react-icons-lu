import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PaintRoller icon from Lucide icons
 * @module
 */
export function LuPaintRoller(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"6",x:"2",y:"2","rx":"2"}},{tag:"path",attr:{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"},child:[]},{tag:"rect",attr:{"width":"4","height":"6",x:"8",y:"16","rx":"1"},child:[]}]})(props);
}
export default LuPaintRoller;
