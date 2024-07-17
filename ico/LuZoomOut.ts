import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuZoomOut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"11","cy":"11","r":"8"}},{tag:"line",attr:{"x1":"21","x2":"16.65","y1":"21","y2":"16.65"},child:[]},{tag:"line",attr:{"x1":"8","x2":"14","y1":"11","y2":"11"},child:[]}]})(props);
}
export default LuZoomOut;
