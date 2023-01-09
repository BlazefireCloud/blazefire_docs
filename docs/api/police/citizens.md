## The citizen object
```
id: string
name: string
birthday: string
sex: string
height: string
eye_color: string | null
hair_color: string | null
address: string | null
image_path: string | null
image_url: string | null
created_at: string | null
updated_at: string | null
```

Relationships
```
vehicles: Array
reports: Array
bolo: Object
licenses: Array
investigations: Array
```

::: tip
Relationships must always be expanded in order to receive them!
:::

## Retrieve All Citizens
```
citizens/all
Method: GET
```

## Retrieve citizen

```
citizens/{citizen}/retrieve
Method: GET
```

## Create citizen

```
citizens/store
Method: POST
```

## Update citizen

```
citizens/{citizen}/update
Method: PUT
```

## Delete citizen
```
URL: citizens/{citizen}/delete
Method: DELETE
```