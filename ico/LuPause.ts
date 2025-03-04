import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pause icon from Lucide icons
 * @module
 */
export function LuPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4","width":"4","height":"16","rx":"1"}},{tag:"rect",attr:{x:"6",y:"4","width":"4","height":"16","rx":"1"},child:[]}]})(props);
}
export default LuPause;
