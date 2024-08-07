import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClipboardCopy icon from Lucide icons
 * @module
 */
export function LuClipboardCopy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"4",x:"8",y:"2","rx":"1","ry":"1"}},{tag:"path",attr:{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v4"},child:[]},{tag:"path",attr:{d:"M21 14H11"},child:[]},{tag:"path",attr:{d:"m15 10-4 4 4 4"},child:[]}]})(props);
}
export default LuClipboardCopy;
