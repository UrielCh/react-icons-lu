import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Layers icon from Lucide icons
 * @module
 */
export function LuLayers(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"12 2 2 7 12 12 22 7 12 2"}},{tag:"polyline",attr:{"points":"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{"points":"2 12 12 17 22 12"},child:[]}]})(props);
}
export default LuLayers;
