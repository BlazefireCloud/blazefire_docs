# Error Handling

While working with an api there can occur errors. 

A list can be found here for all possible Exceptions.

### Whenever a request fails you'll get a json response which looks like the following:
```json
{
    "exception": "relation_not_found",
    "error": "We couldn't find relationship [your_relationship]."
}
```

The key `exception` will always be unique and never be used twice for different error messages.