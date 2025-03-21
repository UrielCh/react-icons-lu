import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LaptopMinimal icon from Lucide icons
 * @module
 */
export function LuLaptopMinimal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"18","height":"12",x:"3",y:"4","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"2","x2":"22","y1":"20","y2":"20"},child:[]}]})(props);
}
export default LuLaptopMinimal;
