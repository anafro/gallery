export default function removeExtension(fileName: string): string {
    if (!fileName.includes(".")) {
        return fileName;
    }

    return fileName.substring(0, fileName.lastIndexOf("."));
}