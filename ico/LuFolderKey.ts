import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FolderKey icon from Lucide icons
 * @module
 */
export function LuFolderKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"16","cy":"20","r":"2"}},{tag:"path",attr:{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"m22 14-4.5 4.5"},child:[]},{tag:"path",attr:{d:"m21 15 1 1"},child:[]}]})(props);
}
export default LuFolderKey;
