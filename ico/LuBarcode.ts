import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Barcode icon from Lucide icons
 * @module
 */
export function LuBarcode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5v14"}},{tag:"path",attr:{d:"M8 5v14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]},{tag:"path",attr:{d:"M17 5v14"},child:[]},{tag:"path",attr:{d:"M21 5v14"},child:[]}]})(props);
}
export default LuBarcode;
