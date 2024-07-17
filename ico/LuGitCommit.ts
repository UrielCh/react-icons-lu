import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function LuGitCommit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"}},{tag:"line",attr:{"x1":"3","x2":"9","y1":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"15","x2":"21","y1":"12","y2":"12"},child:[]}]})(props);
}
export default LuGitCommit;
