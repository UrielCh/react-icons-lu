import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuScale3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"19","cy":"19","r":"2"}},{tag:"circle",attr:{"cx":"5","cy":"5","r":"2"},child:[]},{tag:"path",attr:{d:"M5 7v12h12"},child:[]},{tag:"path",attr:{d:"m5 19 6-6"},child:[]}]})(props);
}
export default LuScale3D;
