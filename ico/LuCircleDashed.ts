import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleDashed icon from Lucide icons
 * @module
 */
export function LuCircleDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}},{tag:"path",attr:{d:"M13.9 21.818a10 10 0 0 1-3.8 0"},child:[]},{tag:"path",attr:{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"},child:[]},{tag:"path",attr:{d:"M2.182 13.9a10 10 0 0 1 0-3.8"},child:[]},{tag:"path",attr:{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"},child:[]},{tag:"path",attr:{d:"M21.818 10.1a10 10 0 0 1 0 3.8"},child:[]},{tag:"path",attr:{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"},child:[]},{tag:"path",attr:{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"},child:[]}]})(props);
}
export default LuCircleDashed;
