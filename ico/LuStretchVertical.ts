import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StretchVertical icon from Lucide icons
 * @module
 */
export function LuStretchVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"6","height":"20",x:"4",y:"2","rx":"2"}},{tag:"rect",attr:{"width":"6","height":"20",x:"14",y:"2","rx":"2"},child:[]}]})(props);
}
export default LuStretchVertical;
