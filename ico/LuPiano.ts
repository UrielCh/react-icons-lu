import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Piano icon from Lucide icons
 * @module
 */
export function LuPiano(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}},{tag:"path",attr:{d:"M2 14h20"},child:[]},{tag:"path",attr:{d:"M6 14v4"},child:[]},{tag:"path",attr:{d:"M10 14v4"},child:[]},{tag:"path",attr:{d:"M14 14v4"},child:[]},{tag:"path",attr:{d:"M18 14v4"},child:[]}]})(props);
}
export default LuPiano;
