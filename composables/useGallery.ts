export default async function useGallery(): Promise<{ files: string[] }> {
    return $fetch("/api/pages");
}