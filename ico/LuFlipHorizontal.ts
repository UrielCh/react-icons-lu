import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlipHorizontal icon from Lucide icons
 * @module
 */
export function LuFlipHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}},{tag:"path",attr:{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"M12 14v2"},child:[]},{tag:"path",attr:{d:"M12 8v2"},child:[]},{tag:"path",attr:{d:"M12 2v2"},child:[]}]})(props);
}
export default LuFlipHorizontal;
