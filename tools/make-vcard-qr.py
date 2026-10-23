"""QR-визитка (vCard 3.0) в SVG для слайдов-визиток. Нужен пакет segno: python3 -m pip install segno"""
import argparse
import segno

p = argparse.ArgumentParser(description=__doc__)
p.add_argument("--last", required=True)
p.add_argument("--first", required=True)
p.add_argument("--middle", default="")
p.add_argument("--title", default="")
p.add_argument("--org", default="КУБИТ")
p.add_argument("--phone", required=True, help="в формате +7XXXXXXXXXX")
p.add_argument("--email", required=True)
p.add_argument("--out", required=True)
a = p.parse_args()

vcard = "\n".join([
    "BEGIN:VCARD", "VERSION:3.0",
    f"N:{a.last};{a.first};{a.middle};;",
    f"FN:{a.first} {a.last}",
    f"ORG:{a.org}", f"TITLE:{a.title}",
    f"TEL;TYPE=CELL:{a.phone}", f"EMAIL:{a.email}",
    "END:VCARD",
])
segno.make(vcard, error="m").save(a.out, scale=10, border=0, dark="#000000", light=None)
print(a.out)
