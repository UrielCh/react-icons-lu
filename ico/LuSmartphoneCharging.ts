import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SmartphoneCharging icon from Lucide icons
 * @module
 */
export function LuSmartphoneCharging(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"20",x:"5",y:"2","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M12.667 8 10 12h4l-2.667 4"},child:[]}]})(props);
}
export default LuSmartphoneCharging;
