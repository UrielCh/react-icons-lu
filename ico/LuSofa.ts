import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sofa icon from Lucide icons
 * @module
 */
export function LuSofa(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"},child:[]},{tag:"path",attr:{d:"M4 18v2"},child:[]},{tag:"path",attr:{d:"M20 18v2"},child:[]},{tag:"path",attr:{d:"M12 4v9"},child:[]}]})(props);
}
export default LuSofa;
