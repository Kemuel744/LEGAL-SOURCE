import re
import pathlib

pattern = re.compile(r"([A-Za-zÀ-ÖØ-öø-ÿ])'([A-Za-zÀ-ÖØ-öø-ÿ])")
changed = []
for path in pathlib.Path('src').rglob('*'):
    if path.suffix not in {'.ts', '.tsx', '.css'}:
        continue
    text = path.read_text(encoding='utf-8')
    new = pattern.sub(r"\1’\2", text)
    if new != text:
        path.write_text(new, encoding='utf-8')
        changed.append(str(path))
print('\n'.join(changed) or 'aucun changement')
