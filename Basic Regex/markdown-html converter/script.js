const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let markdown = markdownInput.value;

  // Headings
  markdown = markdown.replace(
    /^\s*(#{1,3})\s+(.+)$/gm,
    (match, hashes, text) => {
      const level = hashes.length;
      return `<h${level}>${text}</h${level}>`;
    },
  );

  // Blockquotes
  markdown = markdown.replace(/^\s*>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

  // Images
  markdown = markdown.replace(
    /!\[(.*?)\]\((.*?)\)/g,
    '<img alt="$1" src="$2">',
  );

  // Links
  markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Bold
  markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  // Italic
  markdown = markdown.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  return markdown;
}

// Live conversion
markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
