import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * University icon from Lucide icons
 * @module
 */
export function LuUniversity(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"10","r":"1"}},{tag:"path",attr:{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"},child:[]},{tag:"path",attr:{d:"M6 17v.01"},child:[]},{tag:"path",attr:{d:"M6 13v.01"},child:[]},{tag:"path",attr:{d:"M18 17v.01"},child:[]},{tag:"path",attr:{d:"M18 13v.01"},child:[]},{tag:"path",attr:{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"},child:[]}]})(props);
}
export default LuUniversity;
