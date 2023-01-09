## The vehicles object
```json
citizen_id: string
plate: string
brand: string | null
model: string | null
primary_color: string | null
secondary_color: string | null
registered: boolean
created_at: string | null
updated_at: string | null
```

Relationships
```json
citizen: Object
bolo: Object
```

::: tip
Relationships must always be expanded in order to receive them!
:::

## Retrieve vehicle

```js
axios.post('https://yoursystemurl/vehicles/{vehicle}/retrieve');
```

## Create vehicle
```js
axios.post('https://yoursystemurl/vehicles/store', {
    vehicle: VehicleObject
});
```

## Update vehicle

```js
axios.put('https://yoursystemurl/vehicles/{vehicle}/update', {
    vehicle: VehicleObject
});
```

## Delete vehicle

```js
axios.delete('https://yoursystemurl/vehicles/{vehicle}/delete');
```