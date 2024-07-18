import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Touchpad icon from Lucide icons
 * @module
 */
export function LuTouchpad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"16",x:"2",y:"4","rx":"2"}},{tag:"path",attr:{d:"M2 14h20"},child:[]},{tag:"path",attr:{d:"M12 20v-6"},child:[]}]})(props);
}
export default LuTouchpad;
