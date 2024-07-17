import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuSkipForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"5 4 15 12 5 20 5 4"}},{tag:"line",attr:{"x1":"19","x2":"19","y1":"5","y2":"19"},child:[]}]})(props);
}
export default LuSkipForward;
