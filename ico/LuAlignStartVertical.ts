import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuAlignStartVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"9","height":"6",x:"6",y:"14","rx":"2"}},{tag:"rect",attr:{"width":"16","height":"6",x:"6",y:"4","rx":"2"},child:[]},{tag:"path",attr:{d:"M2 2v20"},child:[]}]})(props);
}
export default LuAlignStartVertical;
