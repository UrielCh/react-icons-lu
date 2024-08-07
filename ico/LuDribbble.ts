import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dribbble icon from Lucide icons
 * @module
 */
export function LuDribbble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"},child:[]},{tag:"path",attr:{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"},child:[]},{tag:"path",attr:{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"},child:[]}]})(props);
}
export default LuDribbble;
