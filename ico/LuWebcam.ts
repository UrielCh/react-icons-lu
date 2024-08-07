import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Webcam icon from Lucide icons
 * @module
 */
export function LuWebcam(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"10","r":"8"}},{tag:"circle",attr:{"cx":"12","cy":"10","r":"3"},child:[]},{tag:"path",attr:{d:"M7 22h10"},child:[]},{tag:"path",attr:{d:"M12 22v-4"},child:[]}]})(props);
}
export default LuWebcam;
