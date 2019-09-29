// TypeScript Version: 2.2

export type UnaryFn<Arg, Return> = (arg: Arg) => Return

export default function weakMemoize<Arg extends object, Return>(
  func: UnaryFn<Arg, Return>
): UnaryFn<Arg, Return>
