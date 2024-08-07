import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lamp icon from Lucide icons
 * @module
 */
export function LuLamp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2h8l4 10H4L8 2Z"}},{tag:"path",attr:{d:"M12 12v6"},child:[]},{tag:"path",attr:{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"},child:[]}]})(props);
}
export default LuLamp;
