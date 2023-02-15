# Vehicle

:::info
All columns that <b>do not</b> have the value `null` must be mandatorily specified when creating or updating!
:::

## Objekt

:::details Plate - <dimWhite size="sm">plate | string | <important>required</important></dimWhite>
Unique plate. Is needed to retrieve, update or delete a vehicle.
:::

:::details Citizen Id - <dimWhite size="sm">citizen_id | string | <important>required</important></dimWhite>
The unique id of the citizen.
:::

:::details Brand - <dimWhite size="sm">brand | string, null</dimWhite>
The brand of the vehicle.
:::

:::details Model - <dimWhite size="sm">model | string, null</dimWhite>
The model of the vehicle.
:::

:::details Primary color - <dimWhite size="sm">primary_color | string, null</dimWhite>
Primary color of the vehicle.
:::

:::details Secondary color - <dimWhite size="sm">secondary_color | string, null</dimWhite>
Secondary color of the vehicle.
:::

:::details Registered - <dimWhite size="sm">registered | boolean</dimWhite>
This field determines if the current vehicle is registered.
:::

:::details Created at - <dimWhite size="sm">created_at | timestamp, null</dimWhite>
Timestamp when the Vehicle has been created.
:::

:::details Updated at - <dimWhite size="sm">updated_at | timestamp, null</dimWhite>
Timestamp when the Bolo has been updated.
:::

:::warning Warning
Updating or setting the columns `created_at` and `updated_at` is not possible and is done automatically.
:::

## Relations

Folgende Relations sind verfügbar:
:::details Citizen - <dimWhite size="sm">citizen | object</dimWhite>
The owner of the vehicle.
:::

:::details Bolo - <dimWhite size="sm">bolo | object, null</dimWhite>
If available, the manhunt that is currently running on the vehicle is output. If no manhunt is active, the value `NULL` is output.
:::

## Create vehicle

Path: `/api/vehicles/store`<br>
Method: `POST`<br>
Permission: `create`

:::details JSON Response
```json
{
    "citizen_id": "8b865c67-1324-4602-a110-bbdf675e344e",
    "plate": "BLAZEFIRE",
    "brand": null,
    "model": null,
    "primary_color": null,
    "secondary_color": null,
    "registered": false,
    "created_at": "1970-01-01 00:00:00",
    "updated_at": "1970-01-01 00:00:00"
}
```
:::

## Retrieve vehicle

Path: `/api/vehicles/{vehicleId}/store`<br>
Method: `POST`<br>
Permission: `fetch`
:::details Arguments
vehicleId - <dimWhite size="sm">The plate of the vehicle.</dimWhite>
:::

:::details JSON Response
```json
{
    "citizen_id": "8b865c67-1324-4602-a110-bbdf675e344e",
    "plate": "BLAZEFIRE",
    "brand": null,
    "model": null,
    "primary_color": null,
    "secondary_color": null,
    "registered": false,
    "created_at": "1970-01-01 00:00:00",
    "updated_at": "1970-01-01 00:00:00"
}
```
:::

## Update vehicle

Path: `/api/vehicles/{vehicleId}/update`<br>
Method: `POST`<br>
Permission: `update`
:::details Arguments
vehicleId - <dimWhite size="sm">Plate of the vehicle</dimWhite>
:::

:::details JSON Response
```json
{
    "citizen_id": "8b865c67-1324-4602-a110-bbdf675e344e",
    "plate": "BLAZEFIRE",
    "brand": null,
    "model": null,
    "primary_color": null,
    "secondary_color": null,
    "registered": false,
    "created_at": "1970-01-01 00:00:00",
    "updated_at": "1970-01-01 00:00:00"
}
```
:::

## Delete vehicle

Path: `/api/vehicles/{vehicleId}/delete`<br>
Method: `POST`<br>
Permission: `delete`
:::details Arguments
vehicleId - <dimWhite size="sm">Plate of the vehicle</dimWhite>
:::

:::details JSON Response
```json
{
    "message": "The resource has been successfully deleted."
}
```
:::

## List all vehicles

Path: `/api/vehicles/list`<br>
Method: `POST`<br>
Permission: `fetch`
:::details Arguments
page <small>(optional)</small> - <dimWhite size="sm">How many entries should be displayed on each page?</dimWhite>
:::