import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Drum icon from Lucide icons
 * @module
 */
export function LuDrum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 2 8 8"}},{tag:"path",attr:{d:"m22 2-8 8"},child:[]},{tag:"ellipse",attr:{"cx":"12","cy":"9","rx":"10","ry":"5"},child:[]},{tag:"path",attr:{d:"M7 13.4v7.9"},child:[]},{tag:"path",attr:{d:"M12 14v8"},child:[]},{tag:"path",attr:{d:"M17 13.4v7.9"},child:[]},{tag:"path",attr:{d:"M2 9v8a10 5 0 0 0 20 0V9"},child:[]}]})(props);
}
export default LuDrum;
