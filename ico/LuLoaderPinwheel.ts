import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LoaderPinwheel icon from Lucide icons
 * @module
 */
export function LuLoaderPinwheel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}},{tag:"path",attr:{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"},child:[]},{tag:"path",attr:{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"},child:[]}]})(props);
}
export default LuLoaderPinwheel;
