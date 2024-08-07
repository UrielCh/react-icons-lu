import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Battery icon from Lucide icons
 * @module
 */
export function LuBattery(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"10",x:"2",y:"7","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"22","x2":"22","y1":"11","y2":"13"},child:[]}]})(props);
}
export default LuBattery;
