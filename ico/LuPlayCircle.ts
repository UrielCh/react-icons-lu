import { GenIcon, type IconBaseProps } from "../deps.ts";

export function LuPlayCircle(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polygon",attr:{"points":"10 8 16 12 10 16 10 8"},child:[]}]})(props);
}
export default LuPlayCircle;
