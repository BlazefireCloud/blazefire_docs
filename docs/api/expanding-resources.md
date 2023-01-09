# Expanding Resources

You can extend the resources for certain API calls. For example, this is possible with the citizens, where you can extend the relationship to vehicles. You will be shown all vehicles that belong to the corresponding citizen.

## How to expand
To expand a resource, specify `expand` when called, followed by an array of strings.

If a relation does not exist, you will get the `relation_not_found` error, followed by a corresponding error message.
## Example

```js
axios.post('https://yoursystemurl/citizens/{citizen}/retrieve', {
    expand: ["first_relationship", "second_relationship"]
})
```