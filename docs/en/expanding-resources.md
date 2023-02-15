# Expanding resources

Some of the resources have so-called relations. With these relations, a connection is established between two resources, for example between a vehicle and a citizen. The data type is decisive here and can already tell you what the connection is.

## Example
As above, let us assume a relation between citizen and vehicle:

- A citizen can own several vehicles
- A vehicle, however, can only have one owner at a time

In this case, if we pull a citizen from the API, and expand this object, we would get an array with different numbers of vehicles. The vehicle, however, would only contain one object of a citizen, next to the data of the vehicle.


Now, to extend a resource, we need to specify these relations in the API query.


```js{2-6}
axios.post('https://mysubdomain.blazefire.cloud/api/citizens/{citizenId}/retrieve', {
    expand: [
        'vehicles',
        'investigations',
        'bolo'
    ]
});
```

In the result we would now get the following object:
:::details Response
```json
{
    id: "8b865c67-1324-4602-a110-bbdf675e344e",
    name: "Max Mustermann",
    birthday: "01-01-1970",
    sex: "male",
    height: "180",
    eye_color: "blue",
    hair_color: "brown",
    address: "Vinewood",
    created_at: "1970-01-01 00:00:00",
    updated_at: "1970-01-01 00:00:00",
    vehicles: [],
    investigations: [],
    bolo: null
}
```
Depending on the citizen, these relations may or may not be filled.
:::

If a relation does not exist, you receive an error with the code `RelationNotFound`. The error message also indicates which relation was not found in order to simplify debugging.