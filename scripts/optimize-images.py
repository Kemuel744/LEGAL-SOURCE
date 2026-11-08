#!/usr/bin/env python3
"""Optimise les images du site LEGAL SOURCE.

Le dépôt ne contient que des JPEG issus des templates, dont des héros 4K
upscalés. Ce script génère des versions WebP dimensionnées selon leur usage
réel, puis les originaux peuvent être supprimés (`--prune`).

Prérequis : Pillow (`pip install Pillow`).

Usage :
    python scripts/optimize-images.py          # génère les .webp
    python scripts/optimize-images.py --prune  # génère puis supprime les .jpg
"""

from __future__ import annotations

import argparse
import pathlib
import sys

try:
    from PIL import Image
except ImportError:  # pragma: no cover - message destiné au développeur
    sys.exit("Pillow est requis : pip install Pillow")

ASSETS = pathlib.Path("src/assets/images")

# Largeur maximale selon l'usage réel dans l'interface.
RULES = {
    "heroes": 1920,
    "products": 900,
}

DEFAULT_WIDTH = 1280
QUALITY = 80


def target_width(relative: pathlib.PurePath) -> int:
    for folder, width in RULES.items():
        if folder in relative.parts:
            return width
    return DEFAULT_WIDTH


def optimize(path: pathlib.Path) -> tuple[int, int]:
    relative = path.relative_to(ASSETS)
    with Image.open(path) as image:
        image = image.convert("RGB")
        width = target_width(relative)
        if image.width > width:
            height = round(image.height * width / image.width)
            image = image.resize((width, height), Image.LANCZOS)

        destination = path.with_suffix(".webp")
        image.save(destination, "WEBP", quality=QUALITY, method=6)

    before = path.stat().st_size
    after = destination.stat().st_size
    return before, after


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--prune", action="store_true", help="supprime les JPEG après conversion")
    args = parser.parse_args()

    files = sorted(ASSETS.rglob("*.jpg"))
    if not files:
        sys.exit(f"Aucun JPEG trouvé dans {ASSETS}")

    total_before = total_after = 0
    for path in files:
        before, after = optimize(path)
        total_before += before
        total_after += after
        print(
            f"{path.relative_to(ASSETS)!s:55} "
            f"{before / 1024:8.0f} Ko -> {after / 1024:8.0f} Ko"
        )
        if args.prune:
            path.unlink()

    print(
        f"\nTotal : {total_before / 1024 / 1024:.1f} Mo -> "
        f"{total_after / 1024 / 1024:.1f} Mo "
        f"({100 - total_after * 100 / total_before:.0f} % de réduction)"
    )


if __name__ == "__main__":
    main()
