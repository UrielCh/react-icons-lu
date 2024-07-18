import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileOutput icon from Lucide icons
 * @module
 */
export function LuFileOutput(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"path",attr:{d:"M2 15h10"},child:[]},{tag:"path",attr:{d:"m5 12-3 3 3 3"},child:[]}]})(props);
}
export default LuFileOutput;
