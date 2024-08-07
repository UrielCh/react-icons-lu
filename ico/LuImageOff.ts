import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ImageOff icon from Lucide icons
 * @module
 */
export function LuImageOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"2","x2":"22","y1":"2","y2":"22"}},{tag:"path",attr:{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"},child:[]},{tag:"line",attr:{"x1":"13.5","x2":"6","y1":"13.5","y2":"21"},child:[]},{tag:"line",attr:{"x1":"18","x2":"21","y1":"12","y2":"15"},child:[]},{tag:"path",attr:{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"},child:[]},{tag:"path",attr:{d:"M21 15V5a2 2 0 0 0-2-2H9"},child:[]}]})(props);
}
export default LuImageOff;
