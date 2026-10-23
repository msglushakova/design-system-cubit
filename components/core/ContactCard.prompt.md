Визитка для финального слайда «Открыты к сотрудничеству и новым идеям!»: фото, QR-визитка, имя, должность, телефон и почта. Фото и QR скруглены `radius-lg`.

```jsx
<ContactCard name="Анастасия Глушакова" role="Менеджер продукта"
  phone="+7 951 610-56-93" email="glushakova_ad@cubit.su"
  photo="assets/people/glushakova-light.jpg" qr="assets/people/qr-glushakova.svg" />
```

- Один человек — `layout="row"`; двое — две карточки `layout="stack"` рядом, `size={240}`.
- Светлая тема (`data-theme="light"`): фото на светлом фоне, у QR лёгкая тень. Тёмная: фото на оранжевом фоне, QR без тени.
- QR — vCard, чтобы камера сразу предлагала сохранить контакт; делается скриптом `tools/make-vcard-qr.py`. QR всегда на белом.
- Фото и QR лежат в `assets/people/`.
