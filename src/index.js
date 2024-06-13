import getDifferentObject from './utils.js';
import makeFormat from './formatters/index.js';
import getData from './parses.js';

function genDiff(filepath1, filepath2, format = 'stylish') {
  const dataFile1 = getData(filepath1);
  const dataFile2 = getData(filepath2);
  const dataDiff = getDifferentObject(dataFile1, dataFile2);
  format = makeFormat(dataDiff);
  return format;
}

export default genDiff;
