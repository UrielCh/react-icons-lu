import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StepForward icon from Lucide icons
 * @module
 */
export function LuStepForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"6","x2":"6","y1":"4","y2":"20"}},{tag:"polygon",attr:{"points":"10,4 20,12 10,20"},child:[]}]})(props);
}
export default LuStepForward;
