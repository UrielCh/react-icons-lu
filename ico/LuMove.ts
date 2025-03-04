import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Move icon from Lucide icons
 * @module
 */
export function LuMove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2v20"}},{tag:"path",attr:{d:"m15 19-3 3-3-3"},child:[]},{tag:"path",attr:{d:"m19 9 3 3-3 3"},child:[]},{tag:"path",attr:{d:"M2 12h20"},child:[]},{tag:"path",attr:{d:"m5 9-3 3 3 3"},child:[]},{tag:"path",attr:{d:"m9 5 3-3 3 3"},child:[]}]})(props);
}
export default LuMove;
