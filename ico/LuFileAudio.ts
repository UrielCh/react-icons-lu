import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileAudio icon from Lucide icons
 * @module
 */
export function LuFileAudio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"path",attr:{d:"M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"},child:[]},{tag:"path",attr:{d:"M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"},child:[]},{tag:"path",attr:{d:"M2 19v-3a6 6 0 0 1 12 0v3"},child:[]}]})(props);
}
export default LuFileAudio;
