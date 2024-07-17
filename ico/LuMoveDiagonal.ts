import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuMoveDiagonal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"13 5 19 5 19 11"}},{tag:"polyline",attr:{"points":"11 19 5 19 5 13"},child:[]},{tag:"line",attr:{"x1":"19","x2":"5","y1":"5","y2":"19"},child:[]}]})(props);
}
export default LuMoveDiagonal;
