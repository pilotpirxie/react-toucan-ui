sed -i -E '/devDependencies/,/}/{/"react"|"react-dom"/d}' package.json \
&& yarn \
&& rollup -c \
&& sed -i -e '23a\' -e '    "react": "\^18.2.0"\,\n    "react-dom": "\^18.2.0"\,' package.json \
&& yarn