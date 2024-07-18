import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Wallpaper icon from Lucide icons
 * @module
 */
export function LuWallpaper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"8","cy":"9","r":"2"}},{tag:"path",attr:{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"},child:[]},{tag:"path",attr:{d:"M8 21h8"},child:[]},{tag:"path",attr:{d:"M12 17v4"},child:[]}]})(props);
}
export default LuWallpaper;
