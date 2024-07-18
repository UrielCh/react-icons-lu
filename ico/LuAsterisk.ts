import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Asterisk icon from Lucide icons
 * @module
 */
export function LuAsterisk(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v12"}},{tag:"path",attr:{d:"M17.196 9 6.804 15"},child:[]},{tag:"path",attr:{d:"m6.804 9 10.392 6"},child:[]}]})(props);
}
export default LuAsterisk;
