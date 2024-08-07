import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heading3 icon from Lucide icons
 * @module
 */
export function LuHeading3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12h8"}},{tag:"path",attr:{d:"M4 18V6"},child:[]},{tag:"path",attr:{d:"M12 18V6"},child:[]},{tag:"path",attr:{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"},child:[]},{tag:"path",attr:{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"},child:[]}]})(props);
}
export default LuHeading3;
