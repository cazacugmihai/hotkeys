(this["webpackJsonphotkeys-js"]=this["webpackJsonphotkeys-js"]||[]).push([[343],{378:function(s,n){!function(s){var n=[/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/.source,/<<-?\s*(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/.source,/<<-?\s*(["'])(\w+)\3\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\4/.source].join("|");s.languages["shell-session"]={info:{pattern:/^[^\r\n$#*!]+(?=[$#])/m,alias:"punctuation",inside:{path:{pattern:/(:)[\s\S]+/,lookbehind:!0},user:/^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?=:|$)/,punctuation:/:/}},command:{pattern:RegExp(/[$#](?:[^\\\r\n'"<]|\\.|<<str>>)+/.source.replace(/<<str>>/g,(function(){return n}))),greedy:!0,inside:{bash:{pattern:/(^[$#]\s*)[\s\S]+/,lookbehind:!0,alias:"language-bash",inside:s.languages.bash},"shell-symbol":{pattern:/^[$#]/,alias:"important"}}},output:/.(?:.*(?:\r\n?|\n|.$))*/}}(Prism)}}]);
//# sourceMappingURL=343.d52f4bf4.chunk.js.map