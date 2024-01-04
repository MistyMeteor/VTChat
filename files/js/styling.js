const regexps = {
  bold: /[\*_]{2}([^\*]+)[\*_]{2}/g,
  italic: /[\*_]([^\*]+)[\*_]/g,
  hyperlink: /\[([\w\W]+)\]\(([\w\W]*)\)/g,
  strikethrough: /~~([^~]+)~~/g,
  code: /`{3}(.+)`{3}/sg,
  mention: /@([\w\d]+)/g,
  image: /!\[(?<alt>[^\]]*)\]\((?<src>[^\)]+)\)/g,
  color: /\?\[(?<text>[^\]]+)\]\((?<color>[^\)]+)\)/g,
  anchor: /\[(?<inner>[^\]]+)\]\((?<href>[^\)]+)\)/g,
}

function style(text) {
  const segments = text.split("```");
  let finalText = "";
  for (let i = 0; i < segments.length; i++) {
    // add styling to even indexes and highlight odd indexes
    if (i % 2 === 0) {
      finalText += segments[i].replaceAll("<", "&lt;")
        .replaceAll("\n", "<br>")
        .replace(regexps.bold, "<b>$1</b>")
        .replace(regexps.italic, "<i>$1</i>")
        .replace(regexps.strikethrough, '<span class="strikethrough">$1</span>')
        .replace(regexps.mention, '<a href="https://replit.com/@$1" target="_blank">@$1</a>')
        .replace(regexps.image, '<img src="$<src>" alt="$<alt>">')
        .replace(regexps.color, "<span style='color: $<color>;'>$<text></span>")
        .replace(regexps.anchor, '<a href="$<href>" target="_blank">$<inner></a>')
    } else {
      finalText += `<pre><code>${
        Prism.highlight(segments[i], Prism.languages.javascript, "javascript")
      }</code></pre>`;
    }
  }
  finalText = filter(finalText);
  return finalText;
}