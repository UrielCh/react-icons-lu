import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Unlock icon from Lucide icons
 * @module
 */
export function LuUnlock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"11",x:"3",y:"11","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 9.9-1"},child:[]}]})(props);
}
export default LuUnlock;
