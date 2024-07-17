import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuLayoutGrid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"3","rx":"1"}},{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"3","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"7",x:"14",y:"14","rx":"1"},child:[]},{tag:"rect",attr:{"width":"7","height":"7",x:"3",y:"14","rx":"1"},child:[]}]})(props);
}
export default LuLayoutGrid;
