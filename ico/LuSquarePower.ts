import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquarePower icon from Lucide icons
 * @module
 */
export function LuSquarePower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v4"}},{tag:"path",attr:{d:"M7.998 9.003a5 5 0 1 0 8-.005"},child:[]},{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
export default LuSquarePower;
