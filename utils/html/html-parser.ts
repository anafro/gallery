import { JSDOM } from "jsdom";

export default function parseHTML(html: string) {
    return new JSDOM(html).window.document;
}