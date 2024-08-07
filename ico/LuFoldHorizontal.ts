import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FoldHorizontal icon from Lucide icons
 * @module
 */
export function LuFoldHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12h6"}},{tag:"path",attr:{d:"M22 12h-6"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 8v2"},child:[]},{tag:"path",attr:{d:"M12 14v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m19 9-3 3 3 3"},child:[]},{tag:"path",attr:{d:"m5 15 3-3-3-3"},child:[]}]})(props);
}
export default LuFoldHorizontal;
