# Configuration
In order to use our API, you need to make some adjustments to your code (if you already have it).
Here we explain step by step how you can make requests to our API interface and how you should handle the responses in order to use the API most efficiently.

## API Token
Our API uses so-called 'bearer' tokens. In the settings of your system, you can create one or more API keys for your account and assign them different permissions. If you pass on the keys to a third party, we recommend that you adjust the permissions of the API key accordingly to ensure security.

## Authenticate api requests
To authenticate your requests, you must include the <b>Bearer</b> token in the header of each request. If you do not provide this key, or if it is invalid, you will receive a 401 error.

How you send a header with a request varies depending on the programming/scripting language. It is best to search in a search engine of your choice how to include these headers.

In HTML, this would be, for example

```html
<meta http-equiv="Authorization" content="Bearer YOURAPITOKEN" />
```
:::warning WARNING
It is very important that you enter a space after the word `Bearer` and only then enter your API token!
:::

## Rate limiter
We implement a number of protections against huge amounts of incoming traffic to maximise their stability. Users sending many requests in rapid succession may see error responses marked as status code 419. We allow up to 1000 operations in one minute, both reads and writes.

If the number of operations is exceeded, we give an error message with the code [`TooManyAttempts`](./error-handling.md#toomanyattempts) back as an answer.