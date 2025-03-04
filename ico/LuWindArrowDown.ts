import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WindArrowDown icon from Lucide icons
 * @module
 */
export function LuWindArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 2v8"}},{tag:"path",attr:{d:"M12.8 21.6A2 2 0 1 0 14 18H2"},child:[]},{tag:"path",attr:{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"},child:[]},{tag:"path",attr:{d:"m6 6 4 4 4-4"},child:[]}]})(props);
}
export default LuWindArrowDown;
