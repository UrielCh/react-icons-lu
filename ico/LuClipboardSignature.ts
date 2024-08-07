import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClipboardSignature icon from Lucide icons
 * @module
 */
export function LuClipboardSignature(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 1.73 1"},child:[]},{tag:"path",attr:{d:"M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"},child:[]},{tag:"path",attr:{d:"M8 18h1"},child:[]}]})(props);
}
export default LuClipboardSignature;
