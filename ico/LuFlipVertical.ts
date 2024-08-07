import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlipVertical icon from Lucide icons
 * @module
 */
export function LuFlipVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"},child:[]},{tag:"path",attr:{d:"M4 12H2"},child:[]},{tag:"path",attr:{d:"M10 12H8"},child:[]},{tag:"path",attr:{d:"M16 12h-2"},child:[]},{tag:"path",attr:{d:"M22 12h-2"},child:[]}]})(props);
}
export default LuFlipVertical;
