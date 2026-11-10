from PIL import Image
import os

home = Image.open("page d'accueil.jpeg").convert('RGB')
shop = Image.open('page boutique.jpeg').convert('RGB')
act = Image.open('page actualités.jpeg').convert('RGB')

os.makedirs('src/assets/images/activities', exist_ok=True)
os.makedirs('src/assets/images/products', exist_ok=True)
os.makedirs('src/assets/images/projects', exist_ok=True)
os.makedirs('src/assets/images/heroes', exist_ok=True)
os.makedirs('src/assets/logos', exist_ok=True)

# ---------- LOGO COULEUR (recadrage manuel vérifié) ----------
logo = home.crop((42, 40, 412, 132))
logo.save('src/assets/logos/legal-source-logo.png')
print('logo', logo.size)

sym = logo.crop((0, 0, 97, 92))
sym.save('src/assets/logos/legal-source-symbol.png')

# ---------- LOGO BLANC : depuis le footer ----------
region = home.crop((42, 1348, 335, 1442)).convert('L')
px = region.load()
w, h = region.size
minx, miny, maxx, maxy = w, h, 0, 0
for y in range(h):
    for x in range(w):
        if px[x, y] > 150:
            minx = min(minx, x); maxx = max(maxx, x)
            miny = min(miny, y); maxy = max(maxy, y)
fbox = (42 + minx, 1348 + miny, 42 + maxx + 1, 1348 + maxy + 1)
print('logo white bbox', fbox)
fimg = home.crop(fbox).convert('L')
W, H = fimg.size
white = Image.new('RGBA', (W, H), (0, 0, 0, 0))
src = fimg.load(); dst = white.load()
for y in range(H):
    for x in range(W):
        lum = src[x, y]
        a = max(0, min(255, int((lum - 70) * 255 / (255 - 70))))
        dst[x, y] = (255, 255, 255, a)
white = white.crop((2, 5, white.width, white.height))
white.save('src/assets/logos/legal-source-logo-white.png')
print('logo white', white.size)

# ---------- HEROES ----------
home.crop((560, 128, 875, 412)).save('src/assets/images/heroes/hero-home.jpg', quality=88)
shop.crop((600, 100, 853, 320)).save('src/assets/images/heroes/hero-shop.jpg', quality=88)
act.crop((290, 95, 650, 320)).save('src/assets/images/heroes/hero-services.jpg', quality=88)
act.crop((249, 725, 418, 815)).save('src/assets/images/heroes/hero-trainings.jpg', quality=88)
home.crop((30, 1120, 330, 1300)).save('src/assets/images/about.jpg', quality=88)

# ---------- ACTIVITES ----------
cols = [(30, 207), (218, 405), (416, 605), (617, 804), (814, 1000)]
y1 = (535, 606); y2 = (785, 856)
names = ['formations', 'audits', 'rh-securite', 'hygiene', 'energies', 'conseil', 'rse', 'haccp', 'epi', 'agricole']
i = 0
for (ya, yb) in [y1, y2]:
    for (xa, xb) in cols:
        home.crop((xa, ya, xb, yb)).save('src/assets/images/activities/%s.jpg' % names[i], quality=88)
        i += 1

# ---------- PRODUITS ----------
pcols = [(203, 338), (365, 500), (527, 662), (689, 824)]
pnames = ['casque-securite', 'gilet-visibilite', 'chaussures-securite', 'gants-protection',
          'masque-respiratoire', 'casque-antibruit', 'lunettes-securite', 'kit-agricole']
i = 0
for (xa, xb) in pcols:
    shop.crop((xa, 483, xb, 576)).save('src/assets/images/products/%s.jpg' % pnames[i], quality=90); i += 1
for (xa, xb) in pcols:
    shop.crop((xa, 733, xb, 826)).save('src/assets/images/products/%s.jpg' % pnames[i], quality=90); i += 1

# retirer le badge "Nouveau" incrusté (le site affiche son propre badge)
p1 = Image.open('src/assets/images/products/casque-securite.jpg').convert('RGB')
from PIL import ImageDraw
d = ImageDraw.Draw(p1)
d.rectangle((0, 0, 64, 20), fill=(250, 250, 250))
p1.save('src/assets/images/products/casque-securite.jpg', quality=90)

kit_boxes = {
    'kit-hygiene': (430, 998, 520, 1055),
    'kit-premiers-secours': (523, 998, 613, 1055),
    'kit-nettoyage': (622, 998, 712, 1055),
    'kit-agricole-strip': (748, 998, 838, 1055),
}
for k, b in kit_boxes.items():
    shop.crop(b).save('src/assets/images/products/%s.jpg' % k, quality=90)

# ---------- REALISATIONS ----------
real_boxes = [(63, 725, 232, 805), (249, 725, 418, 805), (436, 725, 608, 805), (624, 725, 795, 805)]
real_names = ['audit-iso', 'formation-terrain', 'agriculture-durable', 'etude-impact']
for n, b in zip(real_names, real_boxes):
    act.crop(b).save('src/assets/images/projects/%s.jpg' % n, quality=88)

print('OK')
