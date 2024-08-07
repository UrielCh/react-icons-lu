import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lasso icon from Lucide icons
 * @module
 */
export function LuLasso(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 22a5 5 0 0 1-2-4"}},{tag:"path",attr:{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"},child:[]},{tag:"path",attr:{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},child:[]}]})(props);
}
export default LuLasso;
