#!/usr/bin/env python3
"""Baut die Chrome-Erweiterung aus index.html (der App).

Chrome erlaubt in Erweiterungen kein Inline-JavaScript, darum wird das Skript
in extension/app.js ausgelagert. Aufruf:  python3 build-extension.py
"""
import pathlib, re, shutil
ROOT = pathlib.Path(__file__).resolve().parent
src = (ROOT / 'index.html').read_text(encoding='utf-8')
i = src.index('<div class="app">')
j = src.index('<script>', i)
k = src.index('</script>', j)
head = re.sub(r'<meta name="claude:[^>]*>\n?', '', src[:i])
body = src[i:j]
script = src[j + len('<script>'):k]
ext = ROOT / 'extension'
(ext / 'app.js').write_text(script.strip() + '\n', encoding='utf-8')
html = f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
{head.strip()}
<style>html,body{{margin:0}} [hidden]{{display:none!important}}</style>
</head>
<body>
{body.strip()}
<script src="app.js"></script>
<script src="bridge.js"></script>
</body>
</html>
'''
(ext / 'sidepanel.html').write_text(html, encoding='utf-8')
shutil.make_archive(str(ROOT / 'griassdi-extension'), 'zip', ext)
print('extension/ gebaut und griassdi-extension.zip erstellt')
