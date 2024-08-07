import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Landmark icon from Lucide icons
 * @module
 */
export function LuLandmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"3","x2":"21","y1":"22","y2":"22"}},{tag:"line",attr:{"x1":"6","x2":"6","y1":"18","y2":"11"},child:[]},{tag:"line",attr:{"x1":"10","x2":"10","y1":"18","y2":"11"},child:[]},{tag:"line",attr:{"x1":"14","x2":"14","y1":"18","y2":"11"},child:[]},{tag:"line",attr:{"x1":"18","x2":"18","y1":"18","y2":"11"},child:[]},{tag:"polygon",attr:{"points":"12 2 20 7 4 7"},child:[]}]})(props);
}
export default LuLandmark;
