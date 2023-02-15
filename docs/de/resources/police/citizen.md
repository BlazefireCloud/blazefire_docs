# Bürger

:::info
Alle Spalten, die <b>nicht</b> den Wert `null` haben, müssen beim Erstellen oder Aktualisieren zwingend angegeben werden!
:::

:::warning WARNUNG
Das Hochladen von Bildern ist aktuell über die API nicht möglich.
:::

## Modell

:::details ID - <dimWhite size="sm">id | string</dimWhite>
Einzigartige, automatisch generierte Zahlen- & Buchstabenreihenfolge.
:::

:::details Name - <dimWhite size="sm">name | string | <important>required</important></dimWhite>
Beinhaltet den Vor- und Nachnamen. Ggfs. Zweitnamen, falls angegeben.
:::

:::details Geburtsdatum - <dimWhite size="sm">birthday | string | <important>required</important></dimWhite>
Beinhaltet den Vor- und Nachnamen. Ggfs. Zweitnamen, falls angegeben.
:::

:::details Geschlecht - <dimWhite size="sm">sex | string | <important>required</important></dimWhite>
Das Geschlecht des Bürgers. Jeder Wert kann enthalten sein.
:::

:::details Größe - <dimWhite size="sm">height | string | <important>required</important></dimWhite>
Die Größe des Bürgers.
:::

:::details Augenfarbe - <dimWhite size="sm">eye_color | string, null</dimWhite>
Augenfarbe des Bürgers.
:::

:::details Haarfarbe - <dimWhite size="sm">hair_color | string, null</dimWhite>
Haarfarbe des Bürgers.
:::

:::details Adresse - <dimWhite size="sm">address | string, null</dimWhite>
Aktuelle Adresse des Bürgers.
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
:::details Fahrzeuge - <dimWhite size="sm">vehicles | array</dimWhite>
Fahrzeuge, die dem Bürger gehören, werden hiermit zusätzlich ausgegeben.
:::

:::details Festnahmen / Geldstrafen - <dimWhite size="sm">reports | array</dimWhite>
Alle Festnahmen / Geldstrafen, die zu diesem Bürger zurückzuführen sind, werden hiermit ausgegeben.
:::

:::details Fahndung - <dimWhite size="sm">bolo | object, null</dimWhite>
Sofern vorhanden, wird die Fahndung ausgegeben, die aktuell auf den Bürger läuft. Sollte keine Fahndung aktiv sein, wird der Wert `NULL` ausgegeben.
:::

:::details Ermittlungen - <dimWhite size="sm">investigations | array</dimWhite>
Alle zu dem Bürger gehörenden Ermittlungen werden hiermit ausgegeben.
:::

## Bürger erstellen

Pfad: `/api/citizens/store`<br>
Methode: `POST`<br>
Berechtigung: `create`
:::details JSON Response
```json
{
    "message": "The resource has been successfully created.",
    "resource": {
        "id": "8b865c67-1324-4602-a110-bbdf675e344e",
        "name": "Max Mustermann",
        "birthday": "01-01-1970",
        "sex": "männlich",
        "height": "180",
        "eye_color": "blau",
        "hair_color": "blond",
        "address": "Vinewood",
        "created_at": "1970-01-01 00:00:00",
        "updated_at": "1970-01-01 00:00:00"
    }
}
```
:::

## Einzelnen Bürger abfragen

Pfad: `/api/citizens/{citizenId}/store`<br>
Methode: `POST`<br>
Berechtigung: `fetch`
:::details Argumente
citizenId - <dimWhite size="sm">Die einzigartige ID des Bürgers</dimWhite>
:::
:::details JSON Response
```json
{
    "id": "8b865c67-1324-4602-a110-bbdf675e344e",
    "name": "Max Mustermann",
    "birthday": "01-01-1970",
    "sex": "männlich",
    "height": "180",
    "eye_color": "blau",
    "hair_color": "blond",
    "address": "Vinewood",
    "created_at": "1970-01-01 00:00:00",
    "updated_at": "1970-01-01 00:00:00"
}
```
:::

## Bürger aktualisieren

Pfad: `/api/citizens/{citizenId}/update`<br>
Methode: `POST`<br>
Berechtigung: `update`
:::details Argumente
citizenId - <dimWhite size="sm">Die einzigartige ID des Bürgers</dimWhite>
:::
:::details JSON Response
```json
{
    "message": "The resource has been successfully updated.",
    "resource": {
        "id": "8b865c67-1324-4602-a110-bbdf675e344e",
        "name": "Max Mustermann",
        "birthday": "01-01-1970",
        "sex": "männlich",
        "height": "180",
        "eye_color": "blau",
        "hair_color": "blond",
        "address": "Vinewood",
        "created_at": "1970-01-01 00:00:00",
        "updated_at": "1970-01-01 00:00:00"
    }
}
```
:::

## Bürger löschen

Pfad: `/api/citizens/{citizenId}/delete`<br>
Methode: `POST`<br>
Berechtigung: `delete`
:::details Argumente
citizenId - <dimWhite size="sm">Die einzigartige ID des Bürgers</dimWhite>
:::
:::details JSON Response
```json
{
    "message": "The resource has been successfully deleted."
}
```
:::

## Alle Bürger auflisten

Pfad: `/api/citizens/list`<br>
Methode: `POST`<br>
Berechtigung: `fetch`
:::details Argumente
page <small>(optional)</small> - <dimWhite size="sm">Die aktuelle Seite. Standard: 1</dimWhite><br>
limit <small>(optional)</small> - <dimWhite size="sm">Wie viele Ergebnisse, pro Seite, sollen angezeigt werden. Standard: 20</dimWhite>
:::
:::details JSON Response
```json
{
    "data": [
        {
            "id": "8b865c67-1324-4602-a110-bbdf675e344e",
            "name": "Max Mustermann",
            "birthday": "01-01-1970",
            "sex": "männlich",
            "height": "180",
            "eye_color": "blau",
            "hair_color": "blond",
            "address": "Vinewood",
            "created_at": "1970-01-01 00:00:00",
            "updated_at": "1970-01-01 00:00:00"
        },
        // ...
    ],
    "first_page_url": "http://yoursubdomain.blazefire.cloud/api/citizens/list?page=1",
    "last_page_url": "http://yoursubdomain.blazefire.cloud/api/citizens/list?page=1",
    "next_page_url": null,
    "path": "http://yoursubdomain.blazefire.cloud/api/citizens/list",
    "per_page": 20,
    "prev_page_url": null,
    "total": 4
}
```
:::