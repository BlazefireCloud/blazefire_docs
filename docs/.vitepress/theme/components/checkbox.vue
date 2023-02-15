<script setup>
defineProps({
    checked: Boolean
});
</script>

<template>
    <input type="checkbox" disabled :checked="checked" />
</template>

<style>

.base {
    font-size: 14px;
}

.sm {
    font-size: 12px;
}

.xs {
    font-size: 7px;
}

</style>