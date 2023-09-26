type Maybe<T> = T | undefined;
type Nullable<T> = T | null;
type VoidFunction = () => void;

type PropsWithoutChildren<P = unknown> = P & { children?: never };
