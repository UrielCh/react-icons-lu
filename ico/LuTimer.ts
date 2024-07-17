import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuTimer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"10","x2":"14","y1":"2","y2":"2"}},{tag:"line",attr:{"x1":"12","x2":"15","y1":"14","y2":"11"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"14","r":"8"},child:[]}]})(props);
}
export default LuTimer;
