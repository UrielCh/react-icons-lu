import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuWorkflow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"8","height":"8",x:"3",y:"3","rx":"2"}},{tag:"path",attr:{d:"M7 11v4a2 2 0 0 0 2 2h4"},child:[]},{tag:"rect",attr:{"width":"8","height":"8",x:"13",y:"13","rx":"2"},child:[]}]})(props);
}
export default LuWorkflow;
