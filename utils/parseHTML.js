import { JSDOM } from "jsdom";

export function htmlToMarkdown(html) {
    let markdownResult = html.replaceAll(/<pre(?:\s+([^>])+)?><code(?:\s+[^>]+)?>|<\/code><\/pre>/g, "```");
    markdownResult = markdownResult.replaceAll(/(\*|#|-|\||~|_)/g, "\\$1");
    const parsedHTML = new JSDOM(markdownResult);
    return parsedHTML.window.document.body.textContent;
}