# Conjunto de anúncios SUEÑO — criativos + copy + spec de lançamento
Atualizado 04-08-2026 · Conta `act_1806741513224678` (bloqueada — subir assim que liberar)

## 1. Os 4 criativos

| id | arquivo | caminho | visual | destino |
|---|---|---|---|---|
| a1 | `social/ad-sueno-a1.jpg` | quiz | foto noturna + gradiente ameixa | `/test.html` |
| a2 | `social/ad-sueno-a2.jpg` | quiz | mesma foto, headline 3 a.m. | `/test.html` |
| d1 | `social/ad-sueno-d1.jpg` | oferta | fundo ameixa escuro + capa do produto | `/sueno.html` |
| d2 | `social/ad-sueno-d2.jpg` | oferta | creme claro, editorial, 4 cards | `/sueno.html` |

Todos 1080×1350 (4:5), RGB. As duas rotas rodam em paralelo: quiz alimenta o evento Lead,
oferta direta testa se dá pra pular a etapa do quiz num público que já sente o problema.

---

## 2. Copy — rota QUIZ (a1, a2 → `/test.html`)

### A1 · "8 horas y despiertas igual de agotada"

**Texto principal**
> Duermes tus ocho horas. Y aun así te levantas como si no hubieras dormido nada.
>
> No siempre es cuestión de dormir más. A veces el cansancio viene de otro lado — la digestión, el ritmo hormonal, el estrés acumulado — y por eso los consejos genéricos de internet casi nunca encajan.
>
> Hicimos un test corto, de 2 minutos, para ayudarte a identificar por dónde empezar. Al terminar recibes tu resultado y una guía gratuita de hábitos naturales, en tu correo.
>
> Es gratis y no pedimos tarjeta.
>
> Contenido educativo de bienestar. No sustituye orientación médica.

**Título:** Test gratis de 2 minutos
**Descrição:** Descubre por dónde empezar · Resultado + guía gratis
**CTA:** Más información

### A2 · "Son las 3 a.m. y tu mente no se apaga"

**Texto principal**
> Son las 3 de la mañana. El cuerpo está cansado, pero la cabeza sigue encendida: la lista de mañana, la conversación de ayer, lo que falta hacer.
>
> Si te pasa varias veces por semana, no estás sola y no es falta de fuerza de voluntad.
>
> Este test de 2 minutos te ayuda a ubicar dónde está el desajuste — sueño, digestión, ritmo hormonal o estrés — para que sepas por dónde empezar en vez de probar todo al mismo tiempo.
>
> Gratis, sin tarjeta. Al final recibes tu resultado y una guía de hábitos naturales en tu correo.
>
> Contenido educativo de bienestar. No sustituye orientación médica.

**Título:** ¿Tu mente no se apaga de noche?
**Descrição:** Test gratis · 2 minutos · Resultado al instante
**CTA:** Más información

---

## 3. Copy — rota OFERTA (d1, d2 → `/sueno.html`)

### D1 · "Esto es lo que recibes"

**Texto principal**
> Protocolo Sueño Reparador — una guía digital en PDF, de pago único.
>
> Esto es exactamente lo que recibes:
> ✓ 7 noches guiadas, una por día, para leer en 5 minutos
> ✓ La rutina de la noche explicada paso a paso
> ✓ Un registro de sueño para imprimir y llenar a mano
> ✓ Recetas de infusiones con ingredientes que ya tienes en casa
>
> Son hábitos sencillos, sin suplementos y sin listas imposibles. No promete resultados: te da un orden para acompañar tus noches, y tú decides cómo lo aplicas.
>
> US$9, pago único, sin mensualidad. Llega a tu correo por Hotmart apenas confirmas.
>
> Garantía de 7 días: si no es para ti, escribes a zenivitabr@gmail.com y te devolvemos el 100%, sin preguntas.
>
> Contenido educativo de bienestar. No sustituye orientación médica.

**Título:** Protocolo Sueño Reparador · US$9
**Descrição:** Guía en PDF · Pago único · Garantía de 7 días
**CTA:** Comprar

### D2 · "Siete noches con un orden"

**Texto principal**
> La mayoría de los consejos para dormir mejor son una lista suelta de cosas: apaga el celular, toma té, respira. Difícil saber por dónde empezar y más difícil sostenerlo.
>
> El Protocolo Sueño Reparador es otra cosa: siete noches, una por día, cada una con una sola cosa para hacer.
>
> Qué recibes:
> 1. 7 noches guiadas en PDF, cada una se lee en 5 minutos
> 2. La rutina de la noche explicada paso a paso
> 3. Registro de sueño para imprimir y llenar a mano
> 4. Recetas de infusiones con ingredientes de casa
>
> US$9, pago único, sin mensualidad. Llega a tu correo por Hotmart.
>
> Garantía de 7 días: si no es para ti, te devolvemos el 100%.
>
> Contenido educativo de bienestar. No sustituye orientación médica.

**Título:** Siete noches con un orden · US$9
**Descrição:** Guía digital · Pago único · Garantía de 7 días
**CTA:** Comprar

---

## 4. Checagem de compliance (as 4 regras da casa)

| regra | a1 | a2 | d1 | d2 |
|---|---|---|---|---|
| nunca "cura"/"sana"/"elimina" | ok | ok | ok | ok |
| enquadrado como bem-estar/educação | ok | ok | ok | ok |
| "No sustituye orientación médica" presente no criativo E na copy | ok | ok | ok | ok |
| nunca promete resultado (sem prazo, sem quantidade) | ok | ok | ok | ok |
| declara o que a cliente recebe | resultado + guia grátis | resultado + guia grátis | 4 itens listados | 4 itens listados |
| condições da garantia declaradas | n/a (grátis) | n/a (grátis) | 7 dias, 100%, e-mail | 7 dias, 100% |

Palavras deliberadamente evitadas em toda a copy: *cura, sana, elimina, garantizado, en X días,
resultados comprobados, adelgaza, desintoxica*. "Reparador" aparece só como nome próprio do
produto, nunca como promessa em frase.

---

## 5. Spec de lançamento (API — subir quando a conta liberar)

### Campanha
```json
{
  "name": "ZV | SUEÑO | Leads | ago26",
  "objective": "OUTCOME_LEADS",
  "special_ad_categories": [],
  "status": "PAUSED",
  "buying_type": "AUCTION"
}
```
> **Importante:** objetivo é **OUTCOME_LEADS otimizando o evento Lead** — não Purchase.
> Com 1 venda no histórico não há sinal suficiente pra otimização de compra; o pixel
> precisa de volume de Lead primeiro. Trocar pra Purchase só depois de ~50 Leads/semana.

### Conjunto — rota quiz
```json
{
  "name": "ZV | SUEÑO | quiz | MX-CO-PE-CL | m35-60",
  "optimization_goal": "OFFSITE_CONVERSIONS",
  "billing_event": "IMPRESSIONS",
  "daily_budget": 3500,
  "promoted_object": {
    "pixel_id": "1298126082381332",
    "custom_event_type": "LEAD"
  },
  "targeting": {
    "geo_locations": {"countries": ["MX", "CO", "PE", "CL"]},
    "genders": [2],
    "age_min": 35,
    "age_max": 60,
    "locales": [6, 23],
    "publisher_platforms": ["facebook", "instagram"],
    "facebook_positions": ["feed", "video_feeds"],
    "instagram_positions": ["stream", "explore", "reels"]
  },
  "status": "PAUSED"
}
```
`daily_budget` em centavos de BRL (3500 = R$35/dia). Público amplo de propósito: sem
interesses, deixa o algoritmo achar. Se depois de 3 dias não sair do lugar, aí sim
camada de interesse (bienestar, medicina natural, menopausia).

### Conjunto — rota oferta
Igual ao de cima, trocando o nome pra `ZV | SUEÑO | oferta | MX-CO-PE-CL | m35-60`
e o orçamento pra 2500 (R$25/dia). A rota quiz leva mais verba porque alimenta a lista.

### Anúncios
| ad | conjunto | criativo | destino |
|---|---|---|---|
| `ZV SUEÑO a1 quiz` | quiz | ad-sueno-a1.jpg | `https://zenivita.online/test.html?utm_source=meta&utm_medium=cpc&utm_campaign=sueno_ago26&utm_content=a1` |
| `ZV SUEÑO a2 quiz` | quiz | ad-sueno-a2.jpg | `https://zenivita.online/test.html?utm_source=meta&utm_medium=cpc&utm_campaign=sueno_ago26&utm_content=a2` |
| `ZV SUEÑO d1 oferta` | oferta | ad-sueno-d1.jpg | `https://zenivita.online/sueno.html?utm_source=meta&utm_medium=cpc&utm_campaign=sueno_ago26&utm_content=d1` |
| `ZV SUEÑO d2 oferta` | oferta | ad-sueno-d2.jpg | `https://zenivita.online/sueno.html?utm_source=meta&utm_medium=cpc&utm_campaign=sueno_ago26&utm_content=d2` |

Ordem de subida: campanha PAUSED → 2 conjuntos PAUSED → 4 anúncios → conferir o evento
Lead em Events Manager › Test Events com um clique real → só então ativar.

### O que falta pra rodar
1. Conta de anúncios desbloqueada (facebook.com/accountquality → Solicitar análise).
2. **Credencial da API da Meta** — não existe nenhum token neste ambiente. Sem isso os
   anúncios não sobem por API e teria que ser na mão no Ads Manager.
