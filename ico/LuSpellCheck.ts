import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SpellCheck icon from Lucide icons
 * @module
 */
export function LuSpellCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 16 6-12 6 12"}},{tag:"path",attr:{d:"M8 12h8"},child:[]},{tag:"path",attr:{d:"m16 20 2 2 4-4"},child:[]}]})(props);
}
export default LuSpellCheck;
