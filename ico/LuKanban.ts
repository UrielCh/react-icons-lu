import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Kanban icon from Lucide icons
 * @module
 */
export function LuKanban(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 5v11"}},{tag:"path",attr:{d:"M12 5v6"},child:[]},{tag:"path",attr:{d:"M18 5v14"},child:[]}]})(props);
}
export default LuKanban;
