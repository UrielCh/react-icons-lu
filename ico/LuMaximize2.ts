import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuMaximize2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"15 3 21 3 21 9"}},{tag:"polyline",attr:{"points":"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{"x1":"21","x2":"14","y1":"3","y2":"10"},child:[]},{tag:"line",attr:{"x1":"3","x2":"10","y1":"21","y2":"14"},child:[]}]})(props);
}
export default LuMaximize2;
