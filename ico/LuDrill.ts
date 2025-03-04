import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Drill icon from Lucide icons
 * @module
 */
export function LuDrill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}},{tag:"path",attr:{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"},child:[]},{tag:"path",attr:{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"},child:[]},{tag:"path",attr:{d:"M18 6h4"},child:[]},{tag:"path",attr:{d:"m5 10-2 8"},child:[]},{tag:"path",attr:{d:"m7 18 2-8"},child:[]}]})(props);
}
export default LuDrill;
