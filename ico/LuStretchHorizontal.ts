import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StretchHorizontal icon from Lucide icons
 * @module
 */
export function LuStretchHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"6",x:"2",y:"4","rx":"2"}},{tag:"rect",attr:{"width":"20","height":"6",x:"2",y:"14","rx":"2"},child:[]}]})(props);
}
export default LuStretchHorizontal;
