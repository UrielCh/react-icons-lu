import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Files icon from Lucide icons
 * @module
 */
export function LuFiles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 7h-3a2 2 0 0 1-2-2V2"}},{tag:"path",attr:{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"},child:[]},{tag:"path",attr:{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"},child:[]}]})(props);
}
export default LuFiles;
