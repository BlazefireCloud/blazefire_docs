<script setup>

defineProps({
    size: {
        type: String,
        default: 'base'
    }
});

</script>

<template>
    <span class="dimWhite" :class="[size]">
        <slot />
    </span>
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