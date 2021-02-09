import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const files = new Map();

export const getDirname = (url) => path.dirname(fileURLToPath(url));

export const toSentenceCase = (value) =>
  value.toLowerCase().replace(/\b(\w)/, (v) => v.toUpperCase());

export const readJSON = async (filename) => {
  if (!files.has(filename)) {
    try {
      const stats = await fs.stat(filename);

      if (!stats.isFile()) {
        throw new Error(`Filename is not a file: ${filename}`);
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File doesn't exist: ${filename}`);
      }
    }

    files.set(filename, JSON.parse(await fs.readFile(filename, 'utf-8')));
  }

  return files.get(filename);
};

export const remToPx = (value) => {
  const parsed = parseFloat(value.replace('rem', ''), 10);

  if (Number.isNaN(parsed)) {
    throw new Error(`Could not parse ${value} as rem value`);
  }

  return parsed * 16;
};
