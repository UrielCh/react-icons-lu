import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MonitorDown icon from Lucide icons
 * @module
 */
export function LuMonitorDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13V7"}},{tag:"path",attr:{d:"m15 10-3 3-3-3"},child:[]},{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"3","rx":"2"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]}]})(props);
}
export default LuMonitorDown;
