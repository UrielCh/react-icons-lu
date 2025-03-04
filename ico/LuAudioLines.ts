import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AudioLines icon from Lucide icons
 * @module
 */
export function LuAudioLines(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 10v3"}},{tag:"path",attr:{d:"M6 6v11"},child:[]},{tag:"path",attr:{d:"M10 3v18"},child:[]},{tag:"path",attr:{d:"M14 8v7"},child:[]},{tag:"path",attr:{d:"M18 5v13"},child:[]},{tag:"path",attr:{d:"M22 10v3"},child:[]}]})(props);
}
export default LuAudioLines;
