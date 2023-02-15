# Fahrzeug

:::info
Alle Spalten, die <b>nicht</b> den Wert `null` haben, müssen beim Erstellen oder Aktualisieren zwingend angegeben werden!
:::

## Objekt

:::details Kennzeichen - <dimWhite size="sm">plate | string | <important>required</important></dimWhite>
Einzigartiges Kennzeichen. Kann Buchstaben und / oder Zahlen enthalten.
:::

:::details Bürger ID - <dimWhite size="sm">citizen_id | string | <important>required</important></dimWhite>
Die einzigartig automatisch generierte ID des Bürgers, dem das Fahrzeug gehört.
:::

:::details Marke - <dimWhite size="sm">brand | string, null</dimWhite>
Die Marke des Fahrzeugs.
:::

:::details Modell - <dimWhite size="sm">model | string, null</dimWhite>
Das Modell des Fahrzeugs.
:::

:::details Primäre Farbe - <dimWhite size="sm">primary_color | string, null</dimWhite>
Die Primäre Farbe des Fahrzeugs.
:::

:::details Sekundäre Farbe - <dimWhite size="sm">secondary_color | string, null</dimWhite>
Die Sekundäre Farbe des Fahrzeugs.
:::

:::details Registriert - <dimWhite size="sm">registered | boolean</dimWhite>
Dieses Feld gibt an, ob das Fahrzeug registriert ist, oder nicht.
:::

:::details Erstellt am - <dimWhite size="sm">created_at | timestamp, null</dimWhite>
Timestamp, wann das Fahrzeug erstellt wurde.
:::

:::details Aktualisiert am - <dimWhite size="sm">updated_at | timestamp, null</dimWhite>
Timestamp, wann das Fahrzeug zuletzt aktualisiert wurde.
:::

:::warning Warnung
Das Aktualisieren bzw. Setzen der Spalten `created_at` und `updated_at` ist nicht möglich und geschieht automatisch.
:::

## Relation

Folgende Relations sind verfügbar:
:::details Bürger - <dimWhite size="sm">citizen | object</dimWhite>
Der Besitzer des Fahrzeugs.
:::

:::details Fahndung - <dimWhite size="sm">bolo | object, null</dimWhite>
Sofern vorhanden, wird die Fahndung ausgegeben, die aktuell auf das Fahrzeug läuft. Sollte keine Fahndung aktiv sein, wird der Wert `NULL` ausgegeben.
:::

## Fahrzeug erstellen

Pfad: `/api/vehicles/store`<br>
Methode: `POST`<br>
Berechtigung: `create`

:::details JSON Response
```json
{
    citizen_id: "8b865c67-1324-4602-a110-bbdf675e344e",
    plate: "BLAZEFIRE",
    brand: null,
    model: null,
    primary_color: null,
    secondary_color: null,
    registered: false,
    created_at: "1970-01-01 00:00:00",
    updated_at: "1970-01-01 00:00:00"
}
```
:::

## Einzelnes Fahrzeug abfragen

Pfad: `/api/vehicles/{vehicleId}/store`<br>
Methode: `POST`<br>
Berechtigung: `fetch`
:::details Argumente
vehicleId - <dimWhite size="sm">Die einzigartige ID des Fahrzeugs</dimWhite>
:::

:::details JSON Response
```json
{
    citizen_id: "8b865c67-1324-4602-a110-bbdf675e344e",
    plate: "BLAZEFIRE",
    brand: null,
    model: null,
    primary_color: null,
    secondary_color: null,
    registered: false,
    created_at: "1970-01-01 00:00:00",
    updated_at: "1970-01-01 00:00:00"
}
```
:::

## Fahrzeug aktualisieren

Pfad: `/api/vehicles/{vehicleId}/update`<br>
Methode: `POST`<br>
Berechtigung: `update`
:::details Argumente
vehicleId - <dimWhite size="sm">Das Kennzeichen des Fahrzeugs. Das Kennzeichen ist **immer** einzigartig!</dimWhite>
:::

:::details JSON Response
```json
{
    citizen_id: "8b865c67-1324-4602-a110-bbdf675e344e",
    plate: "BLAZEFIRE",
    brand: null,
    model: null,
    primary_color: null,
    secondary_color: null,
    registered: false,
    created_at: "1970-01-01 00:00:00",
    updated_at: "1970-01-01 00:00:00"
}
```
:::

## Fahrzeug löschen

Pfad: `/api/vehicles/{vehicleId}/delete`<br>
Methode: `POST`<br>
Berechtigung: `delete`
:::details Argumente
vehicleId - <dimWhite size="sm">Die einzigartige ID des Fahrzeugs</dimWhite>
:::

:::details JSON Response
```json
{
    "code": "VehicleSuccessfullyDeleted"
}
```
:::

## Alle Fahrzeuge auflisten

Pfad: `/api/vehicles/list`<br>
Methode: `POST`<br>
Berechtigung: `fetch`
:::details Argumente
page <small>(optional)</small> - <dimWhite size="sm">Die aktuelle Seite. Wenn kein Wert angegeben wurde, wird die 1. Seite ausgegeben.</dimWhite>
:::