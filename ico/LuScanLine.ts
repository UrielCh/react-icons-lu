import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuScanLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"line",attr:{"x1":"7","x2":"17","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuScanLine;
