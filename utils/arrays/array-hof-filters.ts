export type Filter<T> = (element: T) => boolean;

export default function excludes<T>(excludingElement: T): Filter<T> {
    return element => element != excludingElement;
}