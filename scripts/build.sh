cp package.json package.json.copy
sed -i -E '/devDependencies/,/}/{/"react"|"react-dom"/d}' package.json
yarn
rollup -c
cp package.json.copy package.json
rm package.json.copy
yarn