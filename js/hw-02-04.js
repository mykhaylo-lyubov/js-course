function formatString(string, maxLength = 40) {
  let newString = '';
  if (string.length <= maxLength) {
    return string;
  }
  if (string.length > maxLength) {
    newString = string.slice(0, maxLength) + '...';
    return newString;
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
