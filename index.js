const words = [
  'cool',
  'world',
  'map',
  'cold',
  'sergey'
];

const tree = {};

words.forEach(word => {
  insertWordIntoTreeNode(tree, word, 0);
});

console.log(tree); 


function insertWordIntoTreeNode(node, word, charIndex) {
  if(charIndex === word.length) {
    return;
  };

  const char = word[charIndex];

  if(node[char]) {
    return insertWordIntoTreeNode(node[char].next, word, charIndex + 1);
  }

  if(!node[char]) {
    node[char] = {
      char,
      next: {}
    };

    return insertWordIntoTreeNode(node[char].next, word, charIndex + 1)
  }
}
