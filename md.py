# https://daringfireball.net/projects/markdown/syntax

import markdown
import argparse
import os

html_top = """<!DOCTYPE html>
<html lang=en>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

"""

html_mid = """
</head>
<body>

"""

html_bot = """

</body>
</html>
"""

nav = """

<nav>
    <a href="index.html">Works</a>
    <a href="about.html">About</a>
</nav>

"""

p = argparse.ArgumentParser()
p.add_argument("i")
a = p.parse_args()
if not a.i.endswith(".md"):
    print("Not a md file")
    quit()
t = a.i[:-3].replace("_", " ")
o = f"{a.i[:-3]}.html"
# c = f"{a.i[:-3]}.css"
with open(o, 'w', encoding="utf-8") as fo:
    with open(a.i, "r", encoding="utf-8") as fi:
        f = fi.read()
        m = markdown.markdown(f, output_format="html5")
        fo.write(html_top)
        fo.write(f"<title>{t}</title>\n")
        fo.write("<link rel=\"stylesheet\" href=\"style.css\">\n")
        # if os.path.isfile(c):
        #     fo.write(f"<link rel=\"stylesheet\" href=\"{c}\">\n")
        fo.write(html_mid)
        fo.write(nav)
        fo.write(m)
        fo.write(html_bot)

print(o)

"""
    open $(py md.py ex.md)
"""
