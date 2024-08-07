import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mails icon from Lucide icons
 * @module
 */
export function LuMails(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"16","height":"13",x:"6",y:"4","rx":"2"}},{tag:"path",attr:{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"},child:[]},{tag:"path",attr:{d:"M2 8v11c0 1.1.9 2 2 2h14"},child:[]}]})(props);
}
export default LuMails;
