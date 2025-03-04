import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitCommitVertical icon from Lucide icons
 * @module
 */
export function LuGitCommitVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v6"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]},{tag:"path",attr:{d:"M12 15v6"},child:[]}]})(props);
}
export default LuGitCommitVertical;
