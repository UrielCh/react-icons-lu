import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Presentation icon from Lucide icons
 * @module
 */
export function LuPresentation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h20"}},{tag:"path",attr:{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"},child:[]},{tag:"path",attr:{d:"m7 21 5-5 5 5"},child:[]}]})(props);
}
export default LuPresentation;
