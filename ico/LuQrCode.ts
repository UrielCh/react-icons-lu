import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * QrCode icon from Lucide icons
 * @module
 */
export function LuQrCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"5","height":"5",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"5","height":"5",x:"16",y:"3","rx":"1"},child:[]},{tag:"rect",attr:{"width":"5","height":"5",x:"3",y:"16","rx":"1"},child:[]},{tag:"path",attr:{d:"M21 16h-3a2 2 0 0 0-2 2v3"},child:[]},{tag:"path",attr:{d:"M21 21v.01"},child:[]},{tag:"path",attr:{d:"M12 7v3a2 2 0 0 1-2 2H7"},child:[]},{tag:"path",attr:{d:"M3 12h.01"},child:[]},{tag:"path",attr:{d:"M12 3h.01"},child:[]},{tag:"path",attr:{d:"M12 16v.01"},child:[]},{tag:"path",attr:{d:"M16 12h1"},child:[]},{tag:"path",attr:{d:"M21 12v.01"},child:[]},{tag:"path",attr:{d:"M12 21v-1"},child:[]}]})(props);
}
export default LuQrCode;
