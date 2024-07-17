import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuAlignHorizontalSpaceAround(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"10",x:"9",y:"7","rx":"2"}},{tag:"path",attr:{d:"M4 22V2"},child:[]},{tag:"path",attr:{d:"M20 22V2"},child:[]}]})(props);
}
export default LuAlignHorizontalSpaceAround;
