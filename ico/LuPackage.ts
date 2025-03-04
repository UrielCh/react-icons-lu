import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Package icon from Lucide icons
 * @module
 */
export function LuPackage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}},{tag:"path",attr:{d:"M12 22V12"},child:[]},{tag:"path",attr:{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"},child:[]},{tag:"path",attr:{d:"m7.5 4.27 9 5.15"},child:[]}]})(props);
}
export default LuPackage;
