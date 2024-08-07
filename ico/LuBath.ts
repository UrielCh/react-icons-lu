import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bath icon from Lucide icons
 * @module
 */
export function LuBath(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}},{tag:"line",attr:{"x1":"10","x2":"8","y1":"5","y2":"7"},child:[]},{tag:"line",attr:{"x1":"2","x2":"22","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"7","x2":"7","y1":"19","y2":"21"},child:[]},{tag:"line",attr:{"x1":"17","x2":"17","y1":"19","y2":"21"},child:[]}]})(props);
}
export default LuBath;
