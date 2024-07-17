import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 2v14a2 2 0 0 0 2 2h14"}},{tag:"path",attr:{d:"M18 22V8a2 2 0 0 0-2-2H2"},child:[]}]})(props);
}
export default LuCrop;
