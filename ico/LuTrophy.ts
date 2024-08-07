import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trophy icon from Lucide icons
 * @module
 */
export function LuTrophy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}},{tag:"path",attr:{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"},child:[]},{tag:"path",attr:{d:"M4 22h16"},child:[]},{tag:"path",attr:{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"},child:[]},{tag:"path",attr:{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"},child:[]},{tag:"path",attr:{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"},child:[]}]})(props);
}
export default LuTrophy;
