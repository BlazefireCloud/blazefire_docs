# Citizen

:::info
All columns that <b>do not</b> have the value `null` must be mandatorily specified when creating or updating!
:::

:::warning WARNING
Currently its not possible to upload a image through the api.
:::

## Model

:::details ID - <dimWhite size="sm">id | string</dimWhite>
Unique, auto generated from numbers and characters.
:::

:::details Name - <dimWhite size="sm">name | string | <important>required</important></dimWhite>
Contains the firstname and lastname.
:::

:::details Birthday - <dimWhite size="sm">birthday | string | <important>required</important></dimWhite>
The birthdate of the citizen.
:::

:::details Sex - <dimWhite size="sm">sex | string | <important>required</important></dimWhite>
Sex of the citizen.

:::

:::details Height - <dimWhite size="sm">height | string | <important>required</important></dimWhite>
Height of the citizen.
:::

:::details Eye color - <dimWhite size="sm">eye_color | string, null</dimWhite>
Eye color of the citizen.
:::

:::details Hair color - <dimWhite size="sm">hair_color | string, null</dimWhite>
Hair color of the citizen.
:::

:::details Address - <dimWhite size="sm">address | string, null</dimWhite>
Current address of the citizen.
:::

:::details Created at - <dimWhite size="sm">created_at | timestamp, null</dimWhite>
Datetime when the citizen has been created.
:::

:::details Updated at - <dimWhite size="sm">updated_at | timestamp, null</dimWhite>
Timestamp when the citizen was last updated.
:::

:::warning Warning
Updating or setting the columns `created_at` and `updated_at` is not possible and is done automatically.
:::

## Relations

The following relations are available:
:::details Vehicles - <dimWhite size="sm">vehicles | array</dimWhite>
Vehicles the citizen owns will be output here.
:::

:::details Arrests / Fines - <dimWhite size="sm">reports | array</dimWhite>
All arrests / fines traced to this citizen are output herewith.
:::

:::details BOLO - <dimWhite size="sm">bolo | object, null</dimWhite>
If available, the manhunt that is currently running on the citizen is output. If no manhunt is active, the value `NULL` is output.
:::

:::details Investigations - <dimWhite size="sm">investigations | array</dimWhite>
All investigations belonging to the citizen are output with this.
:::

## Create citizen

Path: `/api/citizens/store`<br>
Method: `POST`<br>
Permission: `create`
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

## Retrieve citizen

Path: `/api/citizens/{citizenId}/store`<br>
Method: `POST`<br>
Permission: `fetch`
:::details Argumente
citizenId - <dimWhite size="sm">The unique id.</dimWhite>
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

## Update citizen

Path: `/api/citizens/{citizenId}/update`<br>
Method: `POST`<br>
Permission: `update`
:::details Argumente
citizenId - <dimWhite size="sm">The unique id.</dimWhite>
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

## Delete citizen

Path: `/api/citizens/{citizenId}/delete`<br>
Method: `POST`<br>
Permission: `delete`
:::details Argumente
citizenId - <dimWhite size="sm">The unique id.</dimWhite>
:::
:::details JSON Response
```json
{
    "message": "The resource has been successfully deleted."
}
```
:::

## List all citizens

Path: `/api/citizens/list`<br>
Method: `POST`<br>
Permission: `fetch`
:::details Arguments
page <small>(optional)</small> - <dimWhite size="sm">The current page. Standard: 1</dimWhite><br>
limit <small>(optional)</small> - <dimWhite size="sm">How many entries should be displayed on each page?Standard: 20</dimWhite>
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
    ]
}
```
:::