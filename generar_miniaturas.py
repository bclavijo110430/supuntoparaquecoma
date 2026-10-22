from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent
MENU = RAIZ / "web" / "src" / "assets" / "menu"
FUENTE_EMOJI = Path("/usr/share/fonts/noto/NotoColorEmoji.ttf")

JUGOS = {
    "jugo-guayaba.png": (232, 1.00, 1.02),
    "jugo-mango.png": (34, 1.12, 1.02),
    "jugo-mora.png": (195, 1.00, 0.78),
    "jugo-curuba.png": (58, 0.85, 1.05),
    "jugo-fresa.png": (245, 1.12, 1.00),
    "jugo-feijoa.png": (95, 0.82, 1.00),
    "jugo-tomate.png": (252, 1.05, 0.95),
    "jugo-lulo.png": (21, 1.12, 1.00),
    "jugo-maracuya.png": (42, 1.08, 1.05),
}

CALIENTES = {
    "tinto.png": (14, 0.60, 0.20),
    "perico.png": (26, 0.68, 1.12),
    "aromatica.png": (18, 0.95, 1.02),
    "cafe.png": (22, 0.80, 0.62),
    "milo.png": (14, 0.95, 0.42),
}

STICKERS = {
    "entrada-chicharron.png": "🥓",
    "entrada-chorizo.png": "🌭",
    "salchipapa.png": "🍟",
    "adicion-arroz.png": "🍚",
    "adicion-calentado.png": "🍲",
    "adicion-carne.png": "🍗",
    "adicion-costilla.png": "🍖",
    "adicion-bistec.png": "🥩",
    "adicion-queso.png": "🧀",
    "adicion-huevo.png": "🥚",
    "adicion-huevos.png": "🍳",
    "adicion-rancheros.png": "🥘",
    "adicion-pan.png": "🍞",
    "adicion-salchicha.png": "🌭",
    "adicion-papa-francesa.png": "🍟",
    "adicion-papa-salada.png": "🥔",
    "adicion-chicharron.png": "🥓",
    "gaseosa.png": "🥤",
}


def preparar(imagen: Image.Image, lado: int = 512, margen: float = 0.06) -> Image.Image:
    contenido = imagen.crop(imagen.getchannel("A").getbbox())
    limite = round(lado * (1 - margen * 2))
    contenido.thumbnail((limite, limite), Image.LANCZOS)
    lienzo = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
    lienzo.alpha_composite(
        contenido,
        ((lado - contenido.width) // 2, (lado - contenido.height) // 2),
    )
    return lienzo


def teñir(
    origen: Path | Image.Image,
    destino: Path,
    tono: int,
    saturacion: float,
    valor: float,
) -> None:
    imagen = (
        Image.open(origen).convert("RGBA")
        if isinstance(origen, Path)
        else origen.copy()
    )
    alfa = imagen.getchannel("A")
    h, s, v = imagen.convert("RGB").convert("HSV").split()
    mascara = s.point(lambda x: 255 if x > 28 else 0)
    h = Image.composite(Image.new("L", imagen.size, tono), h, mascara)
    s = Image.composite(s.point(lambda x: min(255, round(x * saturacion))), s, mascara)
    v = Image.composite(v.point(lambda x: min(255, round(x * valor))), v, mascara)
    resultado = Image.merge("HSV", (h, s, v)).convert("RGB").convert("RGBA")
    resultado.putalpha(alfa)
    resultado.save(destino, optimize=True)


def sticker(emoji: str, destino: Path) -> None:
    fuente = ImageFont.truetype(str(FUENTE_EMOJI), 109)
    lienzo = Image.new("RGBA", (200, 200), (0, 0, 0, 0))
    dibujo = ImageDraw.Draw(lienzo)
    dibujo.text((100, 100), emoji, font=fuente, embedded_color=True, anchor="mm")
    glifo = lienzo.crop(lienzo.getbbox())
    glifo.thumbnail((160, 160), Image.LANCZOS)
    glifo = glifo.resize((glifo.width * 3, glifo.height * 3), Image.LANCZOS)
    resultado = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
    resultado.alpha_composite(
        glifo,
        ((resultado.width - glifo.width) // 2, (resultado.height - glifo.height) // 2),
    )
    resultado.save(destino, optimize=True)


def main() -> None:
    MENU.mkdir(parents=True, exist_ok=True)

    for nombre, (tono, saturacion, valor) in JUGOS.items():
        teñir(MENU / "jugo-naranja.png", MENU / nombre, tono, saturacion, valor)

    taza = Image.open(MENU / "chocolate.png").convert("RGBA")
    if taza.size != (512, 512):
        taza = preparar(taza)
        taza.save(MENU / "chocolate.png", optimize=True)

    for nombre, (tono, saturacion, valor) in CALIENTES.items():
        teñir(taza, MENU / nombre, tono, saturacion, valor)

    for nombre, emoji in STICKERS.items():
        sticker(emoji, MENU / nombre)

    print(f"Generadas {len(JUGOS) + len(CALIENTES) + len(STICKERS)} miniaturas en {MENU}")


if __name__ == "__main__":
    main()
