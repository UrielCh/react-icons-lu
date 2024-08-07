import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Projector icon from Lucide icons
 * @module
 */
export function LuProjector(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 7 3 5"}},{tag:"path",attr:{d:"M9 6V3"},child:[]},{tag:"path",attr:{d:"m13 7 2-2"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"13","r":"3"},child:[]},{tag:"path",attr:{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"},child:[]},{tag:"path",attr:{d:"M16 16h2"},child:[]}]})(props);
}
export default LuProjector;
