import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tv2 icon from Lucide icons
 * @module
 */
export function LuTv2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 21h10"}},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]}]})(props);
}
export default LuTv2;
