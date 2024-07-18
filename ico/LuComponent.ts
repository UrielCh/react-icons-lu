import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Component icon from Lucide icons
 * @module
 */
export function LuComponent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}},{tag:"path",attr:{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"},child:[]},{tag:"path",attr:{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"},child:[]},{tag:"path",attr:{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"},child:[]}]})(props);
}
export default LuComponent;
