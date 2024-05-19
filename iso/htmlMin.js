const REPLACE_MAP = {
  '  ': ' ',
  '> ': '>',
  ' >': '>',
  '< ': '<',
  ' <': '<',
};

/** @param {String} html */
export function htmlMin(html) {
  return html.split('<pre>').map((chunk, i) => {
    return chunk.split('</pre>').map((pre, idx) => {
      if (idx === 0 && i !== 0) {
        return pre;
      } else {
        pre = pre.replaceAll('\n', ' ');
        for (let subStr in REPLACE_MAP) {
          while (pre.includes(subStr)) {
            pre = pre.replaceAll(subStr, REPLACE_MAP[subStr]);
          }
        }
        return pre;
      }
    }).join('</pre>');
  }).join('<pre>');
}