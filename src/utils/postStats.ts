// Returns the prose of a post body, without MDX imports, tags or Markdown syntax.
// Post stats count this text so that code in an .mdx file is not counted as words.
export function proseText(body: string): string {
	return body
		.replace(/^import .*$/gm, "")
		.replace(/<audio[\s\S]*?<\/audio>/g, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
		.replace(/[*#_`]/g, "");
}
