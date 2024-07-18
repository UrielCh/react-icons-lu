import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CreditCard icon from Lucide icons
 * @module
 */
export function LuCreditCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"20","height":"14",x:"2",y:"5","rx":"2"}},{tag:"line",attr:{"x1":"2","x2":"22","y1":"10","y2":"10"},child:[]}]})(props);
}
export default LuCreditCard;
