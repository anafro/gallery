import type {GetPages} from "~/server/api/pages.get";

export default async function useGallery(): Promise<GetPages> {
    return $fetch("/api/pages");
}