# Authorization

To authorize your api calls you must specify a header called `Authorization`. Its value has the following data: `'Bearer ' + yourApiToken`.

If you do not provide a `Authorization` header you will receive a `401` error.

The same goes for if you provide a invalid api token.