import {PropsWithChildren} from "react";
type TitleProps={
    title: string,
}
export function Title({title}:PropsWithChildren<TitleProps>) {
    return<div className="text-center min-h0screen h-full flex flex0col justify-center gap-y-20 w-full bg-green-400 text-white">
        <h1 className="text-4xl font bold">{title}</h1>
    </div>
}