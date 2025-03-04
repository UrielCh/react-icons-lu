import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ScanQrCode icon from Lucide icons
 * @module
 */
export function LuScanQrCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 12v4a1 1 0 0 1-1 1h-4"}},{tag:"path",attr:{d:"M17 3h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M17 8V7"},child:[]},{tag:"path",attr:{d:"M21 17v2a2 2 0 0 1-2 2h-2"},child:[]},{tag:"path",attr:{d:"M3 7V5a2 2 0 0 1 2-2h2"},child:[]},{tag:"path",attr:{d:"M7 17h.01"},child:[]},{tag:"path",attr:{d:"M7 21H5a2 2 0 0 1-2-2v-2"},child:[]},{tag:"rect",attr:{x:"7",y:"7","width":"5","height":"5","rx":"1"},child:[]}]})(props);
}
export default LuScanQrCode;
