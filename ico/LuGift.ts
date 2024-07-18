import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gift icon from Lucide icons
 * @module
 */
export function LuGift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"20 12 20 22 4 22 4 12"}},{tag:"rect",attr:{"width":"20","height":"5",x:"2",y:"7"},child:[]},{tag:"line",attr:{"x1":"12","x2":"12","y1":"22","y2":"7"},child:[]},{tag:"path",attr:{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"},child:[]},{tag:"path",attr:{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"},child:[]}]})(props);
}
export default LuGift;
