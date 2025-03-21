import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Castle icon from Lucide icons
 * @module
 */
export function LuCastle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}},{tag:"path",attr:{d:"M18 11V4H6v7"},child:[]},{tag:"path",attr:{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"},child:[]},{tag:"path",attr:{d:"M22 11V9"},child:[]},{tag:"path",attr:{d:"M2 11V9"},child:[]},{tag:"path",attr:{d:"M6 4V2"},child:[]},{tag:"path",attr:{d:"M18 4V2"},child:[]},{tag:"path",attr:{d:"M10 4V2"},child:[]},{tag:"path",attr:{d:"M14 4V2"},child:[]}]})(props);
}
export default LuCastle;
