import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Signal icon from Lucide icons
 * @module
 */
export function LuSignal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 20h.01"}},{tag:"path",attr:{d:"M7 20v-4"},child:[]},{tag:"path",attr:{d:"M12 20v-8"},child:[]},{tag:"path",attr:{d:"M17 20V8"},child:[]},{tag:"path",attr:{d:"M22 4v16"},child:[]}]})(props);
}
export default LuSignal;
