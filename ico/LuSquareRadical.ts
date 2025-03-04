import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareRadical icon from Lucide icons
 * @module
 */
export function LuSquareRadical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12h2l2 5 2-10h4"}},{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2"},child:[]}]})(props);
}
export default LuSquareRadical;
