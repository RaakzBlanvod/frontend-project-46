import path from 'path';

const gendiff = (filepath1, filepath2) => {
    const resolvedFilepath1 = path.resolve(process.cwd(), filepath1);
    const resolvedFilepath2 = path.resolve(process.cwd(), filepath2);
    return [resolvedFilepath1, resolvedFilepath2];
  }

  export default gendiff;  