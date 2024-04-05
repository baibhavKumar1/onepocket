import fs from 'fs';

const countWordsInFile = (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    const words = data.split(/\s+/).filter(word => word.trim() !== '');
    console.log(`Total word count: ${words.length}`);
  });
};

countWordsInFile('data.txt');
