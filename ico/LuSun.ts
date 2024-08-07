import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sun icon from Lucide icons
 * @module
 */
export function LuSun(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"}},{tag:"path",attr:{d:"M12 2v2"},child:[]},{tag:"path",attr:{d:"M12 20v2"},child:[]},{tag:"path",attr:{d:"m4.93 4.93 1.41 1.41"},child:[]},{tag:"path",attr:{d:"m17.66 17.66 1.41 1.41"},child:[]},{tag:"path",attr:{d:"M2 12h2"},child:[]},{tag:"path",attr:{d:"M20 12h2"},child:[]},{tag:"path",attr:{d:"m6.34 17.66-1.41 1.41"},child:[]},{tag:"path",attr:{d:"m19.07 4.93-1.41 1.41"},child:[]}]})(props);
}
export default LuSun;
