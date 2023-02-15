# Fehler
Es kann vorkommen, dass eine Anfrage fehlschlägt, aus welchen Gründen auch immer. Aus diesem Grund empfehlen wir, dass du jede mögliche Fehlermeldung abfängst und dem Benutzer eine entsprechende Fehlermeldung ausgibst. 

Damit du die Fehler eindeutig identifizieren kannst, haben wir einzigartige Keywörter festgelegt, welche <b>immer</b> nur bei einem Fehler angegeben wurden.

Damit ist es dir möglich, deine eigenen Benachrichtigungen auszugeben und den Benutzer ausreichend zu informieren.

## ResourceNotFound
Dieser Fehler tritt auf, wenn du eine Resource versucht hast, zu aktualisieren oder zu löschen, die Resource jedoch nicht existiert.

## RelationNotFound
Dieser Fehler tritt auf, wenn du versucht hast, eine Resource zu expandieren, welche jedoch nicht die angegebene Relation besitzt.

## GeneralErrorMessage
Dieser Fehler ist überaus selten und tritt nur auf, wenn ein interner Fehler auftritt. Solltest du solch einen Fehler erhalten haben, kontaktiere uns gerne per E-Mail und lasse uns wissen, wie dieser Fehler aufgetreten ist.

## TooManyAttempts
Solltest du innerhalb einer Minute zu viele Anfragen an unseren Server senden, erhälst du diesen Fehler.

## ValidationFailed
Dieser Fehler tritt meist auf, wenn du eine Resource erstellen oder aktualisieren möchtest und ein benötigtes Feld nicht korrekt ausgefüllt wurde. Da einige Felder komplexe Validierungen beinhalten, geben wir, bei der Fehlermeldung die Felder an, bei welchen die Validierung fehlgeschlagen ist. 

:::details So könnte dieser Fehler aussehen
```json
{
    "code": "ValidationFailed",
    "messages": {
        "name": [
            "Name wird benötigt."
        ],
        "sex": [
            "Geschlecht wird benötigt."
        ],
        "birthday": [
            "Geburtsdatum wird benötigt."
        ],
        "height": [
            "Größe wird benötigt."
        ]
    }
}
```
:::

Beachte bitte, dass die einzelnen Fehler hier als Array übergeben werden. Ein Feld wird **immer** nur eine Fehlermeldung haben.

## ApiTokenInvalid
Diesen Fehler erhälst du, wenn du eine Anfrage an die API stellst, dein API Token allerdings falsch ist, oder nicht die benötigten Berechtigungen erfüllt.

## ApiTokenNotSpecified
Diesen Fehler erhälst du, wenn du keinen API Token angegeben hast.

## TypeError
Diesen Fehler erhälst du, wenn du ein Argument angegeben hast, welches einen unterschiedlichen Typ hat, als wir erwartet haben.

**Beispiel**
Du gibst folgende Argumente an:
```json
{
    "name": 1
}
```
Der Wert des Arguments `name` hat den Typ `integer`, jedoch erwarten wir den Typ `string`.

## DuplicateEntry
Dieser Fehler tritt auf, wenn du versucht hast, eine Resource zu erstellen, welche ein Einzigartiges Feld benötigt (z.B. Kennzeichen bei Fahrzeugen) und der Wert in der Datenbank bereits vorhanden ist.

## ForeignKeyFailed
Du hast ein Feld angegeben, welches über eine Relation auf eine weitere Datenbanktabelle zeigt. Bei deiner Angabe konnte allerdings kein Eintrag in der Tabelle gefunden werden.

## IncorrectDateTimeFormat
Du hast ein falsches Datetime Format angegeben. Die korrekte Formatierung lautet: `YYYY-MM-DD HH:mm:ss`.