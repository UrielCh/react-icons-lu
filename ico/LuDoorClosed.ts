import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuDoorClosed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}},{tag:"path",attr:{d:"M2 20h20"},child:[]},{tag:"path",attr:{d:"M14 12v.01"},child:[]}]})(props);
}
export default LuDoorClosed;
