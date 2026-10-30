#!/usr/bin/env python3
"""
Image Processing Script for Varna E-commerce Website
Converts any format (PNG, JPG, WEBP, AVIF, TIFF, etc.) from either raw/ or raw-images/
into optimized modern WebP images inside public/images/
"""

import os
import sys
from pathlib import Path
from PIL import Image

ROOT_DIR = Path(__file__).resolve().parent.parent
USER_RAW_DIR = ROOT_DIR / "raw"
LEGACY_RAW_DIR = ROOT_DIR / "raw-images"
PUBLIC_DIR = ROOT_DIR / "public" / "images"

VALID_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".bmp", ".tiff", ".gif"}

USER_RAW_MAPPING = [
    # Hero
    ("hero", ["hero"], "hero", "hero-main.webp", 2400, 1600, 95),
    
    # Banners
    ("banner", ["leftbanner", "left-banner", "men"], "banners", "men-banner.webp", 2400, 1200, 95),
    ("banner", ["rightbanner", "right-banner", "women"], "banners", "women-banner.webp", 2400, 1200, 95),
    
    # Category
    ("category", ["menstshirt", "01-mens-tshirts", "tshirt"], "categories", "01-mens-tshirts.webp", 1600, 1600, 95),
    ("category", ["shirts", "shirt", "02-mens-shirts"], "categories", "02-mens-shirts.webp", 1600, 1600, 95),
    ("category", ["jeans", "03-jeans"], "categories", "03-jeans.webp", 1600, 1600, 95),
    ("category", ["hoodiesandsweetshirts", "hoodies", "04-hoodies-sweatshirts"], "categories", "04-hoodies-sweatshirts.webp", 1600, 1600, 95),
    ("category", ["womenstops", "tops", "05-womens-tops"], "categories", "05-womens-tops.webp", 1600, 1600, 95),
    ("category", ["womensdresses", "dresses", "06-womens-dresses"], "categories", "06-womens-dresses.webp", 1600, 1600, 95),
    ("category", ["coordsets", "coord", "07-coord-sets"], "categories", "07-coord-sets.webp", 1600, 1600, 95),
    
    # Products
    ("product", ["shirt", "01-solid-linen-shirt"], "products", "01-solid-linen-shirt.webp", 1600, 1600, 95),
    ("product", ["ribbedcroptop", "02-ribbed-crop-top"], "products", "02-ribbed-crop-top.webp", 1600, 1600, 95),
    ("product", ["jersey", "03-oversized-jersey-tee"], "products", "03-oversized-jersey-tee.webp", 1600, 1600, 95),
    ("product", ["aline", "04-aline-dress"], "products", "04-aline-dress.webp", 1600, 1600, 95),
    ("product", ["jeans", "05-relaxed-fit-jeans"], "products", "05-relaxed-fit-jeans.webp", 1600, 1600, 95),
    ("product", ["coordsets", "coord", "06-coord-set"], "products", "06-coord-set.webp", 1600, 1600, 95),
]

def convert_image(source_path: Path, dest_path: Path, max_w: int, max_h: int, quality: int):
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source_path) as img:
        # Preserve transparency if available
        if img.mode in ("RGBA", "LA") and dest_path.suffix.lower() == ".webp":
            pass
        elif img.mode != "RGB":
            img = img.convert("RGB")
        
        # Resize preserving aspect ratio if larger than bounds
        w, h = img.size
        ratio = min(max_w / w, max_h / h)
        if ratio < 1.0:
            new_w = int(w * ratio)
            new_h = int(h * ratio)
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        img.save(dest_path, "WEBP", quality=quality, method=4)
        print(f"  [OK] Processed: {source_path.relative_to(ROOT_DIR)} -> {dest_path.relative_to(ROOT_DIR)} ({img.size[0]}x{img.size[1]})")

def main():
    print("=" * 60)
    print("Varna Image Conversion Tool")
    print("=" * 60)
    converted_count = 0

    if USER_RAW_DIR.exists():
        print(f"Scanning user raw directory: {USER_RAW_DIR.name}/")
        for subfolder, patterns, dest_folder, dest_filename, max_w, max_h, quality in USER_RAW_MAPPING:
            src_dir = USER_RAW_DIR / subfolder
            if not src_dir.exists():
                continue
            
            dest_file = PUBLIC_DIR / dest_folder / dest_filename
            # Match by patterns
            found = None
            for p in patterns:
                for ext in VALID_EXTENSIONS:
                    candidate = src_dir / f"{p}{ext}"
                    if candidate.exists():
                        found = candidate
                        break
                if found:
                    break
            
            if found:
                convert_image(found, dest_file, max_w, max_h, quality)
                converted_count += 1

    print("\n" + "=" * 60)
    print(f"Conversion complete! Updated {converted_count} image(s).")
    print("=" * 60)

if __name__ == "__main__":
    main()
