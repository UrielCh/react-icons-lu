import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PowerOff icon from Lucide icons
 * @module
 */
export function LuPowerOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}},{tag:"path",attr:{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"},child:[]},{tag:"path",attr:{d:"M12 2v4"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(props);
}
export default LuPowerOff;
