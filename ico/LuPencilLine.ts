import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PencilLine icon from Lucide icons
 * @module
 */
export function LuPencilLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"},child:[]},{tag:"path",attr:{d:"m15 5 3 3"},child:[]}]})(props);
}
export default LuPencilLine;
