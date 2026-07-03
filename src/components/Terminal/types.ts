export type TerminalLineType =
  | "command"
  | "output"
  | "error"
  | "success";

export interface TerminalLine {
  id: number;

  type: TerminalLineType;

  text: string;
}