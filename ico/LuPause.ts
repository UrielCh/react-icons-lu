import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pause icon from Lucide icons
 * @module
 */
export function LuPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"4","height":"16",x:"6",y:"4"}},{tag:"rect",attr:{"width":"4","height":"16",x:"14",y:"4"},child:[]}]})(props);
}
export default LuPause;
