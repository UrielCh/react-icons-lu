import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Keyboard icon from Lucide icons
 * @module
 */
export function LuKeyboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 8h.01"}},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M14 8h.01"},child:[]},{tag:"path",attr:{d:"M16 12h.01"},child:[]},{tag:"path",attr:{d:"M18 8h.01"},child:[]},{tag:"path",attr:{d:"M6 8h.01"},child:[]},{tag:"path",attr:{d:"M7 16h10"},child:[]},{tag:"path",attr:{d:"M8 12h.01"},child:[]},{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"},child:[]}]})(props);
}
export default LuKeyboard;
