import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Goal icon from Lucide icons
 * @module
 */
export function LuGoal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13V2l8 4-8 4"}},{tag:"path",attr:{d:"M20.55 10.23A9 9 0 1 1 8 4.94"},child:[]},{tag:"path",attr:{d:"M8 10a5 5 0 1 0 8.9 2.02"},child:[]}]})(props);
}
export default LuGoal;
