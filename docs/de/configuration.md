# Konfiguration
Damit du unsere API nutzen kannst, musst du einige Anpassungen an deinen Code (wenn bereits vorhanden) vornehmen.
Wir erklären dir hier Schritt für Schritt, wie du Anfragen an unsere API-Schnittstelle stellen kannst und wie du mit den Antworten umgehen solltest, um die API am effizientesten zu nutzen.

## API Token
Unsere API nutzt so genannte `Bearer` Token. In den Einstellungen deines Systems kannst du für deinen Account einen oder mehrere API Keys erstellen und diesen verschiedene Berechtigungen zuteilen. Solltest du die Key's an eine Dritte Person weitergeben, empfehlen wir dir, die Berechtigungen des API Keys entsprechend anzupassen um die Sicherheit zu gewährleisten.

## API Anfragen authentifizieren
Um deine Anfragen zu authentifizieren, musst du den <b>Bearer</b> Token bei jeder Anfrage im Header mitliefern. Solltest du diesen Key nicht angeben, oder ist dieser ungültig erhälst du einen 401 Fehler.

Wie du einen Header mit einer Anfrage mitschicken kannst, variiert je nach Programmier- / Scriptsprache. Suche am besten in einer Suchmaschine deiner Wahl, wie man diese Header mitliefert.

In HTML wäre dies z.B.

```html
<meta http-equiv="Authorization" content="Bearer DEINAPITOKEN" />
```
:::warning WARNUNG
Es ist ganz wichtig, dass du nach dem Wort `Bearer` ein Leerzeichen eingibst und danach erst deinen API Token eingibst!
:::

## Ratenbegrenzung
Wir setzen eine Reihe von Schutzmaßnahmen gegen riesige Mengen von eingehendem Datenverkehr ein, um ihre Stabilität zu maximieren. Nutzer/innen, die viele Anfragen in schneller Folge senden, sehen möglicherweise Fehlerantworten, die als Statuscode 419 gekennzeichnet sind. Wir erlauben bis zu 1000 Vorgänge in einer Minute, sowohl Lese- als auch Schreibvorgänge.

Sollte die Anzahl an Vorgängen überschritten werden, geben wir eine Fehlermeldung mit dem Code [`TooManyAttempts`](./error-handling.md#toomanyattempts) als Antwort zurück.