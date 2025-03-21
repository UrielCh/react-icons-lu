import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sticker icon from Lucide icons
 * @module
 */
export function LuSticker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}},{tag:"path",attr:{d:"M14 3v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"path",attr:{d:"M8 13h.01"},child:[]},{tag:"path",attr:{d:"M16 13h.01"},child:[]},{tag:"path",attr:{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"},child:[]}]})(props);
}
export default LuSticker;
