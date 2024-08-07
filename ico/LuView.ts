import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * View icon from Lucide icons
 * @module
 */
export function LuView(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"}},{tag:"path",attr:{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"path",attr:{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"},child:[]}]})(props);
}
export default LuView;
