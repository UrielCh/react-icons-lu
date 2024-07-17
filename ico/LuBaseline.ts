import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuBaseline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16"}},{tag:"path",attr:{d:"m6 16 6-12 6 12"},child:[]},{tag:"path",attr:{d:"M8 12h8"},child:[]}]})(props);
}
export default LuBaseline;
