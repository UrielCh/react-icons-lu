import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuArrowRightLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 3 4 4-4 4"}},{tag:"path",attr:{d:"M20 7H4"},child:[]},{tag:"path",attr:{d:"m8 21-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M4 17h16"},child:[]}]})(props);
}
export default LuArrowRightLeft;
