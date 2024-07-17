import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuSpline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"19","cy":"5","r":"2"}},{tag:"circle",attr:{"cx":"5","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"M5 17A12 12 0 0 1 17 5"},child:[]}]})(props);
}
export default LuSpline;
