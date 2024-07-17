import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuPcCase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"20",x:"5",y:"2","rx":"2"}},{tag:"path",attr:{d:"M15 14h.01"},child:[]},{tag:"path",attr:{d:"M9 6h6"},child:[]},{tag:"path",attr:{d:"M9 10h6"},child:[]}]})(props);
}
export default LuPcCase;
