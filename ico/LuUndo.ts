import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Undo icon from Lucide icons
 * @module
 */
export function LuUndo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7v6h6"}},{tag:"path",attr:{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"},child:[]}]})(props);
}
export default LuUndo;
