import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * School icon from Lucide icons
 * @module
 */
export function LuSchool(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 22v-4a2 2 0 1 0-4 0v4"}},{tag:"path",attr:{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"},child:[]},{tag:"path",attr:{d:"M18 5v17"},child:[]},{tag:"path",attr:{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"},child:[]},{tag:"path",attr:{d:"M6 5v17"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"9","r":"2"},child:[]}]})(props);
}
export default LuSchool;
