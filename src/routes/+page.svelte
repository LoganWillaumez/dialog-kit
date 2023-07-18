<style global lang=scss>
</style>

<script lang="ts">
  import { setLoader } from "$lib/dialog/store/dialog.js";
  import { DialogActions, DialogTypes } from "$lib/types/dialog.js";
  import { onMount } from "svelte";


    onMount(() => {
        setLoader(true, undefined, {
            type: DialogTypes.ERROR,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae metus quis nisl rhoncus dapibus eu ac lacus",
            confirmButton: 'confirm',
            [DialogActions.ONCONFIRM]() {
                console.log('confirm');
            },
        });
    });
</script>

<div>
    <h1>Test dialog</h1>
</div>