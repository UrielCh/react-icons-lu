import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PillBottle icon from Lucide icons
 * @module
 */
export function LuPillBottle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}},{tag:"path",attr:{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"},child:[]},{tag:"rect",attr:{"width":"16","height":"5",x:"4",y:"2","rx":"1"},child:[]}]})(props);
}
export default LuPillBottle;
