import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function LuLayoutTemplate(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 3H3v7h18V3z"}},{tag:"path",attr:{d:"M21 14h-5v7h5v-7z"}},{tag:"path",attr:{d:"M12 14H3v7h9v-7z"}}]})(props);
}
