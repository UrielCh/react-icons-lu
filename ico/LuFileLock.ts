import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileLock icon from Lucide icons
 * @module
 */
export function LuFileLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}},{tag:"rect",attr:{"width":"8","height":"6",x:"8",y:"12","rx":"1"},child:[]},{tag:"path",attr:{d:"M15 12v-2a3 3 0 1 0-6 0v2"},child:[]}]})(props);
}
export default LuFileLock;
