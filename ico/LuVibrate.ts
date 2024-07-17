import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuVibrate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m2 8 2 2-2 2 2 2-2 2"}},{tag:"path",attr:{d:"m22 8-2 2 2 2-2 2 2 2"},child:[]},{tag:"rect",attr:{"width":"8","height":"14",x:"8",y:"5","rx":"1"},child:[]}]})(props);
}
export default LuVibrate;
