#!/usr/bin/env python3
"""Genera el QR que apunta a la carta de Su Punto Para Que Coma.

El QR se imprime/coloca en el local y lleva a la página /carta, pensada
para verse desde el celular. Cuando la landing esté publicada, reemplaza
el dominio en URL_CARTA.
"""
import sys
import qrcode

# ---------------------------------------------------------------------------
# TODO: cambia este dominio cuando la landing esté hosteada.
# ---------------------------------------------------------------------------
URL_CARTA = "https://<TU-DOMINIO>/carta"


def generar_qr(url, salida="qr.png"):
    img = qrcode.make(url)
    img.save(salida)
    print(f"QR generado: {salida}")
    print(f"URL: {url}")


def main():
    url = sys.argv[1] if len(sys.argv) > 1 else URL_CARTA
    salida = sys.argv[2] if len(sys.argv) > 2 else "qr.png"
    generar_qr(url, salida)


if __name__ == "__main__":
    main()
