import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FolderLock icon from Lucide icons
 * @module
 */
export function LuFolderLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5"}},{tag:"rect",attr:{"width":"8","height":"5",x:"14",y:"17","rx":"1"},child:[]},{tag:"path",attr:{d:"M20 17v-2a2 2 0 1 0-4 0v2"},child:[]}]})(props);
}
export default LuFolderLock;
