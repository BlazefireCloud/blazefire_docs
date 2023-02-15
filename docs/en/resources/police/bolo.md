# Bolo

:::info
All columns that <b>do not</b> have the value `null` must be mandatorily specified when creating or updating!
:::

## Modell

:::details ID - <dimWhite size="sm">id | string</dimWhite>
Unique, auto generated from numbers and characters.
:::

:::details Type - <dimWhite size="sm">type | string | <important>required</important></dimWhite>
Only the following values are available: `citizen` and `vehicle`
:::

:::details Citizen ID - <dimWhite size="sm">citizen_id | string | <important>required</important></dimWhite>
Only required if the `Type` column is set to `citizen.` 
:::

:::details Plate - <dimWhite size="sm">plate | string | <important>required</important></dimWhite>
Only required if the `Type` column is set to `vehicle.` 
:::

:::details Active until - <dimWhite size="sm">active_until | timestamp, null</dimWhite>
If the column is not empty the bolo is active until the date of this column and gets automatically deleted.

If no date has been specified the bolo will run indefinetely and needs to be deleted manually.
:::

:::details Created at - <dimWhite size="sm">created_at | timestamp, null</dimWhite>
Timestamp when the Bolo has been created.
:::

:::details Updated at - <dimWhite size="sm">updated_at | timestamp, null</dimWhite>
Timestamp when the Bolo has been updated.
:::

:::warning Warning
Updating or setting the columns `created_at` and `updated_at` is not possible and is done automatically.
:::

## Relations

The following relations are available:
:::details vehicle - <dimWhite size="sm">vehicle | object, null</dimWhite>
If the bolo applies to a vehicle, the vehicle, with all information, is output here.
:::

:::details citizen - <dimWhite size="sm">citizen | object, null</dimWhite>
If the bolo is for a citizen, the citizen, with all information, is output here.
:::

## Create bolo
Path: `/api/bolos/store`<br>
Method: `POST`<br>
Permission: `create`
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

## Retrieve bolo

Path: `/api/bolos/{boloId}/retrieve`<br>
Method: `POST`<br>
Permission: `fetch`
:::details Arguments
boloId - <dimWhite size="sm">The id of the bolo</dimWhite>
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

## Update bolo

Path: `/api/bolos/{boloId}/update`<br>
Method: `POST`<br>
Permission: `update`
:::details Arguments
boloId - <dimWhite size="sm">The id of the bolo</dimWhite>
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

## Delete bolo

Path: `/api/bolos/{boloId}/delete`<br>
Method: `POST`<br>
Permission: `delete`
:::details Arguments
boloId - <dimWhite size="sm">The id of the bolo</dimWhite>
:::
:::details JSON Response
```json
{
    "message": "The resource has been successfully deleted."
}
```
:::

## List all

Path: `/api/bolos/list`<br>
Method: `POST`<br>
Permission: `fetch`
:::details Arguments
limit - <dimWhite size="sm">How many entries should be displayed on each page?</dimWhite>
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