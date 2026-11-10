from PIL import Image, ImageDraw, ImageFont, ImageFilter

# ---------- FAVICON ----------
symbol = Image.open('src/assets/logos/legal-source-symbol.png').convert('RGBA')
size = 512
canvas = Image.new('RGBA', (size, size), (255, 255, 255, 255))
target = 440
ratio = min(target / symbol.width, target / symbol.height)
sym = symbol.resize((int(symbol.width * ratio), int(symbol.height * ratio)), Image.LANCZOS)
canvas.alpha_composite(sym, ((size - sym.width) // 2, (size - sym.height) // 2))
canvas.convert('RGB').save('public/favicon.png', quality=95)

# ---------- OPEN GRAPH ----------
W, H = 1200, 630
og = Image.new('RGB', (W, H), (1, 50, 91))

hero = Image.open('src/assets/images/heroes/hero-home.jpg').convert('RGB')
# recadrage pour couvrir la moitié droite
target_w, target_h = 640, H
scale = max(target_w / hero.width, target_h / hero.height)
hero = hero.resize((int(hero.width * scale) + 1, int(hero.height * scale) + 1), Image.LANCZOS)
left = (hero.width - target_w) // 2
top = (hero.height - target_h) // 2
hero = hero.crop((left, top, left + target_w, top + target_h))
og.paste(hero, (W - target_w, 0))

# voile dégradé navy vers la photo
overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)
for x in range(W):
    if x < 620:
        alpha = 255
    else:
        alpha = max(0, int(255 * (1 - (x - 620) / 420)))
    draw.line([(x, 0), (x, H)], fill=(1, 50, 91, alpha))
og = Image.alpha_composite(og.convert('RGBA'), overlay)

logo = Image.open('src/assets/logos/legal-source-logo-white.png').convert('RGBA')
logo_w = 330
logo_h = int(logo.height * (logo_w / logo.width))
logo = logo.resize((logo_w, logo_h), Image.LANCZOS)
og.alpha_composite(logo, (70, 55))

font_bold = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 62)
font_kicker = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 19)
font_sub = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 25)

draw = ImageDraw.Draw(og)
draw.text((72, 245), 'CONSULTING · MANAGEMENT · CERTIFICATION QHSE', font=font_kicker, fill=(168, 220, 151))
draw.text((72, 285), 'Ensemble pour', font=font_bold, fill=(255, 255, 255))
draw.text((72, 355), 'une performance durable', font=font_bold, fill=(255, 255, 255))
draw.text((72, 465), 'Conseil · Formation · Audit · Certification · EPI', font=font_sub, fill=(220, 235, 245))
draw.text((72, 555), 'LEGAL SOURCE  —  Brazzaville, Congo', font=font_sub, fill=(168, 220, 151))

# fine ligne verte
draw.rectangle((72, 430, 330, 434), fill=(46, 141, 41))

og.convert('RGB').save('public/og-image.jpg', quality=88)

# logo public pour JSON-LD
Image.open('src/assets/logos/legal-source-logo.png').save('public/logo.png')

print('branding OK')
