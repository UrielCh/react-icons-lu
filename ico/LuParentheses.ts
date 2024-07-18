import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Parentheses icon from Lucide icons
 * @module
 */
export function LuParentheses(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 21s-4-3-4-9 4-9 4-9"}},{tag:"path",attr:{d:"M16 3s4 3 4 9-4 9-4 9"},child:[]}]})(props);
}
export default LuParentheses;
