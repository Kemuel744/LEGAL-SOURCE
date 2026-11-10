import re
import pathlib

path = pathlib.Path('src/pages/Legal/LegalPage.tsx')
text = path.read_text(encoding='utf-8')

# Les guillemets simples typographiques utilisés comme délimiteurs sont invalides.
text = text.replace('\u2018', "'")


def normalize(match: re.Match) -> str:
    index = match.start()
    prev = text[index - 1] if index > 0 else ''
    nxt = text[index + 1] if index + 1 < len(text) else ''
    if prev.isalpha() and nxt.isalpha():
        return '\u2019'
    return "'"


text = re.sub('\u2019', normalize, text)
path.write_text(text, encoding='utf-8')
print('LegalPage normalisé')
