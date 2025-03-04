import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareKanban icon from Lucide icons
 * @module
 */
export function LuSquareKanban(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M8 7v7"},child:[]},{tag:"path",attr:{d:"M12 7v4"},child:[]},{tag:"path",attr:{d:"M16 7v9"},child:[]}]})(props);
}
export default LuSquareKanban;
