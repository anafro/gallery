import {default as domToImage} from 'dom-to-image';

async function executeScripts(document: Document) {
    const scripts = document.querySelectorAll('script');
    for (const script of scripts) {
        try {
            eval(script.innerHTML);
        } catch (error) {
            console.error(error);
        }
    }
}

export default async function renderPage(route: string): Promise<string> {
    const html: string = await $fetch(route);
    const document = new DOMParser().parseFromString(html, "text/html");

    const aaa = document.createElement("span");
    aaa.innerText = "hello world!"

    console.log(html, document, await domToImage.toPng(aaa), await domToImage.toPng(document.body));

    return await domToImage.toPng(document.body);
}