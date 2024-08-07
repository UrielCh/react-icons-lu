import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Library icon from Lucide icons
 * @module
 */
export function LuLibrary(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 6 4 14"}},{tag:"path",attr:{d:"M12 6v14"},child:[]},{tag:"path",attr:{d:"M8 8v12"},child:[]},{tag:"path",attr:{d:"M4 4v16"},child:[]}]})(props);
}
export default LuLibrary;
