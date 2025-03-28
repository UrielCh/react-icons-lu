import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MonitorStop icon from Lucide icons
 * @module
 */
export function LuMonitorStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17v4"}},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"rect",attr:{x:"2",y:"3","width":"20","height":"14","rx":"2"},child:[]},{tag:"rect",attr:{x:"9",y:"7","width":"6","height":"6","rx":"1"},child:[]}]})(props);
}
export default LuMonitorStop;
