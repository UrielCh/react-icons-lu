import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Files icon from Lucide icons
 * @module
 */
export function LuFiles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"}},{tag:"path",attr:{d:"M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"},child:[]},{tag:"path",attr:{d:"M15 2v5h5"},child:[]}]})(props);
}
export default LuFiles;
