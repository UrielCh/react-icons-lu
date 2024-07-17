import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuMoonStar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}},{tag:"path",attr:{d:"M19 3v4"},child:[]},{tag:"path",attr:{d:"M21 5h-4"},child:[]}]})(props);
}
export default LuMoonStar;
