import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RollerCoaster icon from Lucide icons
 * @module
 */
export function LuRollerCoaster(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 19V5"}},{tag:"path",attr:{d:"M10 19V6.8"},child:[]},{tag:"path",attr:{d:"M14 19v-7.8"},child:[]},{tag:"path",attr:{d:"M18 5v4"},child:[]},{tag:"path",attr:{d:"M18 19v-6"},child:[]},{tag:"path",attr:{d:"M22 19V9"},child:[]},{tag:"path",attr:{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"},child:[]}]})(props);
}
export default LuRollerCoaster;
