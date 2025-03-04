import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HardHat icon from Lucide icons
 * @module
 */
export function LuHardHat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}},{tag:"path",attr:{d:"M14 6a6 6 0 0 1 6 6v3"},child:[]},{tag:"path",attr:{d:"M4 15v-3a6 6 0 0 1 6-6"},child:[]},{tag:"rect",attr:{x:"2",y:"15","width":"20","height":"4","rx":"1"},child:[]}]})(props);
}
export default LuHardHat;
