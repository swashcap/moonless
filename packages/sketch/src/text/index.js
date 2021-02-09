import path from 'path';

import { TextPage } from './TextPage.js';
import { getDirname, readJSON, remToPx } from '../util.js';

export default async function text(sketch) {
  const variables = await readJSON(
    path.join(
      getDirname(import.meta.url),
      '../../../tokens/dist/js/variables.json'
    )
  );

  const text = {};

  Object.keys(variables.component.text).forEach((key) => {
    const value = variables.component.text[key];

    if (value.fontSize) {
      text[key] = {
        fontSize: remToPx(value.fontSize),
        fontWeight: value.fontWeight === '700' ? 7 : 4,
        lineHeight: remToPx(value.lineHeight),
      };
    }
  });

  // Add text styles
  Object.keys(text).forEach((name) => {
    sketch.addTextStyle({
      name,
      textStyle: text[name],
    });
  });

  sketch.addPage(
    new TextPage({ text, textStyles: sketch.document.getTextStyles() })
  );
}
