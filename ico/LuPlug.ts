import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Plug icon from Lucide icons
 * @module
 */
export function LuPlug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22v-5"}},{tag:"path",attr:{d:"M9 8V2"},child:[]},{tag:"path",attr:{d:"M15 8V2"},child:[]},{tag:"path",attr:{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"},child:[]}]})(props);
}
export default LuPlug;
