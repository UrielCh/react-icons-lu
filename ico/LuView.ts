import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * View icon from Lucide icons
 * @module
 */
export function LuView(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}},{tag:"path",attr:{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1"},child:[]},{tag:"path",attr:{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"},child:[]}]})(props);
}
export default LuView;
