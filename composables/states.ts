export const useInput = () => useState<string>("counter", () => "");
export const useText = () => useState<string>("color", () => "");
export const useResult = () => useState<string>("result", () => "");
