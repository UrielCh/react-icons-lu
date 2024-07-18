import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextCursor icon from Lucide icons
 * @module
 */
export function LuTextCursor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}},{tag:"path",attr:{d:"M7 22h1a4 4 0 0 0 4-4v-1"},child:[]},{tag:"path",attr:{d:"M7 2h1a4 4 0 0 1 4 4v1"},child:[]}]})(props);
}
export default LuTextCursor;
