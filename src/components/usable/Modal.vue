<template>
    <!-- Modal -->
    <div class="modal fade" id="picModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="picModalLabel">{{title ?? ''}}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img class="w-100" :src="url" alt="">
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['url', 'title']
    }
</script>

<style scoped>
     .modal {
        z-index: 9999;
     }
</style>
