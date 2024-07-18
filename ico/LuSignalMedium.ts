import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignalMedium icon from Lucide icons
 * @module
 */
export function LuSignalMedium(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h.01"}},{tag:"path",attr:{d:"M7 20v-4"},child:[]},{tag:"path",attr:{d:"M12 20v-8"},child:[]}]})(props);
}
export default LuSignalMedium;
