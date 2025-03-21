import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquarePilcrow icon from Lucide icons
 * @module
 */
export function LuSquarePilcrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"},child:[]},{tag:"path",attr:{d:"M12 7v10"},child:[]},{tag:"path",attr:{d:"M16 7v10"},child:[]}]})(props);
}
export default LuSquarePilcrow;
