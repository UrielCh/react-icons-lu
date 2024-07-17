import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuFileScan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"path",attr:{d:"M16 22a2 2 0 0 1-2-2"},child:[]},{tag:"path",attr:{d:"M20 22a2 2 0 0 0 2-2"},child:[]},{tag:"path",attr:{d:"M20 14a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M16 14a2 2 0 0 0-2 2"},child:[]}]})(props);
}
export default LuFileScan;
