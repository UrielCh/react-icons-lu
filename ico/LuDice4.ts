import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dice4 icon from Lucide icons
 * @module
 */
export function LuDice4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M16 8h.01"},child:[]},{tag:"path",attr:{d:"M8 8h.01"},child:[]},{tag:"path",attr:{d:"M8 16h.01"},child:[]},{tag:"path",attr:{d:"M16 16h.01"},child:[]}]})(props);
}
export default LuDice4;
