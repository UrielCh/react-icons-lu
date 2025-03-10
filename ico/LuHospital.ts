import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hospital icon from Lucide icons
 * @module
 */
export function LuHospital(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 6v4"}},{tag:"path",attr:{d:"M14 14h-4"},child:[]},{tag:"path",attr:{d:"M14 18h-4"},child:[]},{tag:"path",attr:{d:"M14 8h-4"},child:[]},{tag:"path",attr:{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"},child:[]}]})(props);
}
export default LuHospital;
