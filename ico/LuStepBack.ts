import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StepBack icon from Lucide icons
 * @module
 */
export function LuStepBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"18","x2":"18","y1":"20","y2":"4"}},{tag:"polygon",attr:{"points":"14,20 4,12 14,4"},child:[]}]})(props);
}
export default LuStepBack;
