import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heading1 icon from Lucide icons
 * @module
 */
export function LuHeading1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"path",attr:{d:"m17 12 3-2v8"},child:[]}]})(props);
}
export default LuHeading1;
