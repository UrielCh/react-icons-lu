import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sofa icon from Lucide icons
 * @module
 */
export function LuSofa(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}},{tag:"path",attr:{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"},child:[]},{tag:"path",attr:{d:"M4 18v2"},child:[]},{tag:"path",attr:{d:"M20 18v2"},child:[]},{tag:"path",attr:{d:"M12 4v9"},child:[]}]})(props);
}
export default LuSofa;
