# Resourcen erweitern

Einige der Resourcen besitzen so genannte `Relations`. Mit diesen Relations wird eine Verbindung zwischen 2 Resourcen hergestellt, etwa wie z.B. zwischen einem Fahrzeug und einem Bürger. Der Datentyp ist hierbei entscheidend und kann dir bereits sagen, um welche Verbindung es sich handelt. 

## Beispiel
Gehen wir wie oben von einer Relation zwischen Bürger und Fahrzeug aus:

- Ein Bürger kann mehrere Fahrzeuge besitzen
- Ein Fahrzeug jedoch kann immer nur einen Besitzer haben

In diesem Fall würde, wenn wir einen Bürger aus der API ziehen, und dieses Objekt erweitern, ein Array mit verschieden vielen Fahrzeugen erhalten. Das Fahrzeug jedoch würde nur ein Objekt eines Bürgers, neben den Daten des Fahrzeugs enthalten.


Um nun eine Resource zu erweitern, müssen wir diese Relations bei der API-Abfrage angeben.


```js{2-6}
axios.post('https://mysubdomain.blazefire.cloud/api/citizens/{citizenId}/retrieve', {
    expand: [
        'vehicles',
        'investigations',
        'bolo'
    ]
});
```

Beim Ergebnis würden wir nun folgendes Objekt erhalten:
:::details Response
```json
{
    id: "8b865c67-1324-4602-a110-bbdf675e344e",
    name: "Max Mustermann",
    birthday: "01-01-1970",
    sex: "männlich",
    height: "180",
    eye_color: "blau",
    hair_color: "blond",
    address: "Vinewood",
    created_at: "1970-01-01 00:00:00",
    updated_at: "1970-01-01 00:00:00",
    vehicles: [],
    investigations: [],
    bolo: null
}
```
Je nach Bürger, können diese Relations nun gefüllt sein, oder auch nicht. 
:::

Sollte eine Relation nicht existieren, erhält man einen Fehler, mit dem Code `RelationNotFound`. In der Fehlermeldung wird außerdem zusätzlich angegeben, welche Relation nicht gefunden wurde, um das Debugging zu vereinfachen.