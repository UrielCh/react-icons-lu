import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ToyBrick icon from Lucide icons
 * @module
 */
export function LuToyBrick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"8","rx":"1"}},{tag:"path",attr:{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"},child:[]},{tag:"path",attr:{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"},child:[]}]})(props);
}
export default LuToyBrick;
