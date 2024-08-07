import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flashlight icon from Lucide icons
 * @module
 */
export function LuFlashlight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}},{tag:"line",attr:{"x1":"6","x2":"18","y1":"6","y2":"6"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuFlashlight;
