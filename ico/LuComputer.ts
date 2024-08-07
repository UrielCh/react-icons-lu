import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Computer icon from Lucide icons
 * @module
 */
export function LuComputer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"14","height":"8",x:"5",y:"2","rx":"2"}},{tag:"rect",attr:{"width":"20","height":"8",x:"2",y:"14","rx":"2"},child:[]},{tag:"path",attr:{d:"M6 18h2"},child:[]},{tag:"path",attr:{d:"M12 18h6"},child:[]}]})(props);
}
export default LuComputer;
