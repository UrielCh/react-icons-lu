import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SwitchCamera icon from Lucide icons
 * @module
 */
export function LuSwitchCamera(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}},{tag:"path",attr:{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"m18 22-3-3 3-3"},child:[]},{tag:"path",attr:{d:"m6 2 3 3-3 3"},child:[]}]})(props);
}
export default LuSwitchCamera;
