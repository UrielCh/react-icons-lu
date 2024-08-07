import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FolderPlus icon from Lucide icons
 * @module
 */
export function LuFolderPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}},{tag:"line",attr:{"x1":"12","x2":"12","y1":"10","y2":"16"},child:[]},{tag:"line",attr:{"x1":"9","x2":"15","y1":"13","y2":"13"},child:[]}]})(props);
}
export default LuFolderPlus;
