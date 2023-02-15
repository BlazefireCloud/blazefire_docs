# Fahndung

:::info
Alle Spalten, die <b>nicht</b> den Wert `null` haben, müssen beim Erstellen oder Aktualisieren zwingend angegeben werden!
:::

## Modell

:::details ID - <dimWhite size="sm">id | string</dimWhite>
Einzigartige, automatisch generierte Zahlen- & Buchstabenreihenfolge.
:::

:::details Typ - <dimWhite size="sm">type | string | <important>required</important></dimWhite>
Folgende Werte sind verfügbar: `citizen` und `vehicle`
:::

:::details Bürger ID - <dimWhite size="sm">citizen_id | string | <important>required</important></dimWhite>
Nur benötigt, wenn die Spalte `Typ` auf `citizen` gesetzt wurde. 
:::

:::details Kennzeichen - <dimWhite size="sm">plate | string | <important>required</important></dimWhite>
Nur benötigt, wenn die Spalte `Typ` auf `vehicle` gesetzt wurde. 
:::

:::details Aktiv bis - <dimWhite size="sm">active_until | timestamp, null</dimWhite>
Wenn das Feld nicht leer ist, gilt die Fahndung, bis zu diesem angegebenen Datum und wird dann automatisch gelöscht. 

Wurde kein Datum angegeben, bleibt die Fahndung dauerhaft aktiv und muss manuell gelöscht werden.
:::

:::details Erstellt am - <dimWhite size="sm">created_at | timestamp, null</dimWhite>
Timestamp, wann der Bürger erstellt wurde.
:::

:::details Aktualisiert am - <dimWhite size="sm">updated_at | timestamp, null</dimWhite>
Timestamp, wann der Bürger zuletzt aktualisiert wurde.
:::

:::warning Warnung
Das Aktualisieren bzw. Setzen der Spalten `created_at` und `updated_at` ist nicht möglich und geschieht automatisch.
:::

## Relation

Folgende Relations sind verfügbar:
:::details Fahrzeug - <dimWhite size="sm">vehicle | object, null</dimWhite>
Wenn die Fahndung für ein Fahrzeug gilt, wird hier das Fahrzeug, mit allen Informationen ausgegeben.
:::

:::details Bürger - <dimWhite size="sm">citizen | object, null</dimWhite>
Wenn die Fahndung für ein Bürger gilt, wird hier der Bürger, mit allen Informationen ausgegeben.
:::

## Fahndung erstellen
Pfad: `/api/bolos/store`<br>
Methode: `POST`<br>
Berechtigung: `create`
:::details JSON Response
```json
{
    "message": "The resource has been successfully created.",
    "resource": {
        "id": "ff061ef8-070f-4b4c-a4d7-9b6d00d35088",
        "type": "vehicle",
        "plate": "BLAZEFIRE",
        "active_until": "2023-02-06 22:48:37",
        "created_at": "2023-02-12T01:00:32.000000Z",
        "updated_at": "2023-02-12T01:00:32.000000Z"
    }
}
```
:::

## Einzelne Fahndung abfragen

Pfad: `/api/bolos/{boloId}/retrieve`<br>
Methode: `POST`<br>
Berechtigung: `fetch`
:::details Argumente
boloId - <dimWhite size="sm">Die ID der Fahndung</dimWhite>
:::
:::details JSON Response
```json
{
    "id": "ff061ef8-070f-4b4c-a4d7-9b6d00d35088",
    "type": "vehicle",
    "plate": "BLAZEFIRE",
    "active_until": "2023-02-06 22:48:37",
    "created_at": "2023-02-12T01:00:32.000000Z",
    "updated_at": "2023-02-12T01:00:32.000000Z"
}
```
:::

## Fahndung aktualisieren

Pfad: `/api/bolos/{boloId}/update`<br>
Methode: `POST`<br>
Berechtigung: `update`
:::details Argumente
boloId - <dimWhite size="sm">Die ID der Fahndung</dimWhite>
:::
:::details JSON Response
```json
{
    "message": "The resource has been successfully updated.",
    "resource": {
        "id": "ff061ef8-070f-4b4c-a4d7-9b6d00d35088",
        "type": "vehicle",
        "plate": "BLAZEFIRE",
        "active_until": "2023-02-06 22:48:37",
        "created_at": "2023-02-12T01:00:32.000000Z",
        "updated_at": "2023-02-12T01:00:32.000000Z"
    }
}
```
:::

## Fahndung löschen

Pfad: `/api/bolos/{boloId}/delete`<br>
Methode: `POST`<br>
Berechtigung: `delete`
:::details Argumente
boloId - <dimWhite size="sm">Die ID der Fahndung</dimWhite>
:::
:::details JSON Response
```json
{
    "message": "The resource has been successfully deleted."
}
```
:::

## Alle Fahndungen auflisten

Pfad: `/api/bolos/list`<br>
Methode: `POST`<br>
Berechtigung: `fetch`
:::details Argumente
limit - <dimWhite size="sm">Wie viele Einträge soll auf je einer Seite angezeigt werden?</dimWhite>
:::
:::details JSON Response
```json
{
    "data": [
        {
            "id": "ff061ef8-070f-4b4c-a4d7-9b6d00d35088",
            "type": "vehicle",
            "plate": "BLAZEFIRE",
            "active_until": "2023-02-06 22:48:37",
            "created_at": "2023-02-12T01:00:32.000000Z",
            "updated_at": "2023-02-12T01:00:32.000000Z"
        },
        // ...
    ]
}
```
:::