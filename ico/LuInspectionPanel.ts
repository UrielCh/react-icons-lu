import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * InspectionPanel icon from Lucide icons
 * @module
 */
export function LuInspectionPanel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 7h.01"},child:[]},{tag:"path",attr:{d:"M17 7h.01"},child:[]},{tag:"path",attr:{d:"M7 17h.01"},child:[]},{tag:"path",attr:{d:"M17 17h.01"},child:[]}]})(props);
}
export default LuInspectionPanel;
