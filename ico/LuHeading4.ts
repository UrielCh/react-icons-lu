import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heading4 icon from Lucide icons
 * @module
 */
export function LuHeading4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 18V6"}},{tag:"path",attr:{d:"M17 10v3a1 1 0 0 0 1 1h3"},child:[]},{tag:"path",attr:{d:"M21 10v8"},child:[]},{tag:"path",attr:{d:"M4 12h8"},child:[]},{tag:"path",attr:{d:"M4 18V6"},child:[]}]})(props);
}
export default LuHeading4;
