import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grab icon from Lucide icons
 * @module
 */
export function LuGrab(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}},{tag:"path",attr:{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"},child:[]},{tag:"path",attr:{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"},child:[]},{tag:"path",attr:{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"},child:[]},{tag:"path",attr:{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"},child:[]}]})(props);
}
export default LuGrab;
