import { GenIcon, type IconBaseProps } from "../deps.ts";

export function LuParkingCircle(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}}]})(props);
}
export default LuParkingCircle;
