import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Milestone icon from Lucide icons
 * @module
 */
export function LuMilestone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"}},{tag:"path",attr:{d:"M12 13v8"},child:[]},{tag:"path",attr:{d:"M12 3v3"},child:[]}]})(props);
}
export default LuMilestone;
