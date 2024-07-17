import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuPersonStanding(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"5","r":"1"}},{tag:"path",attr:{d:"m9 20 3-6 3 6"},child:[]},{tag:"path",attr:{d:"m6 8 6 2 6-2"},child:[]},{tag:"path",attr:{d:"M12 10v4"},child:[]}]})(props);
}
export default LuPersonStanding;
