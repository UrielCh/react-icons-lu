import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MonitorX icon from Lucide icons
 * @module
 */
export function LuMonitorX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m14.5 12.5-5-5"}},{tag:"path",attr:{d:"m9.5 12.5 5-5"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
export default LuMonitorX;
