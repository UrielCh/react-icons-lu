import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PanelLeftDashed icon from Lucide icons
 * @module
 */
export function LuPanelLeftDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"18",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M9 14v1"},child:[]},{tag:"path",attr:{d:"M9 19v2"},child:[]},{tag:"path",attr:{d:"M9 3v2"},child:[]},{tag:"path",attr:{d:"M9 9v1"},child:[]}]})(props);
}
export default LuPanelLeftDashed;
