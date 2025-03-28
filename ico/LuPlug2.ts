import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Plug2 icon from Lucide icons
 * @module
 */
export function LuPlug2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 2v6"}},{tag:"path",attr:{d:"M15 2v6"},child:[]},{tag:"path",attr:{d:"M12 17v5"},child:[]},{tag:"path",attr:{d:"M5 8h14"},child:[]},{tag:"path",attr:{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"},child:[]}]})(props);
}
export default LuPlug2;
