# Error
It may happen that a request fails, for whatever reason. For this reason, we recommend that you catch every possible error message and issue an appropriate error message to the user.

In order to be able to identify the errors uniquely, we have defined unique keywords that are <b>always</b> given only when an error occurs.

This allows you to issue your own notifications and keep the user sufficiently informed.

## ResourceNotFound
This error occurs when you have tried to update or delete a resource but the resource does not exist.

## RelationNotFound
This error occurs when you have tried to expand a resource that does not have the specified relation.

## GeneralErrorMessage
This error is extremely rare and only occurs when an internal error occurs. If you have received such an error, please contact us by email and let us know how it occurred.

## TooManyAttempts
If you send too many requests to our server within one minute, you will receive this error.

## ValidationFailed
This error usually occurs when you want to create or update a resource and a required field has not been filled in correctly. As some fields contain complex validations, we indicate in the error message the fields for which the validation failed.

:::details This is what this error could look like
```json
{
    "code": "ValidationFailed",
    "messages": {
        "name": [
            "Name is required."
        ],
        "sex": [
            "Sex is required."
        ],
        "birthday": [
            "Birthday is required."
        ],
        "height": [
            "Height is required."
        ]
    }
}
```
:::

Please note that the individual errors are passed here as an array. A field will **always** have only one error message.

## ApiTokenInvalid
You will get this error if you make a request to the API but your API token is incorrect or does not meet the required permissions.

## ApiTokenNotSpecified
You will get this error if you have not specified an API token.

## TypeError
You get this error if you have given an argument that has a different type than we expected.

<!-- **Example**
Du gibst folgende Argumente an:
```json
{
    "name": 1
}
```
Der Wert des Arguments `name` hat den Typ `integer`, jedoch erwarten wir den Typ `string`. -->

## DuplicateEntry
This error occurs when you have tried to create a resource that requires a unique field (e.g. vehicle registration number) and the value already exists in the database.

## ForeignKeyFailed
You have specified a field that points to another database table via a relation. However, no entry could be found in the table.

## IncorrectDateTimeFormat
You have entered an incorrect datetime format. The correct format is: `YYYY-MM-DD HH:mm:ss`.