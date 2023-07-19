<style global lang=scss>
</style>

<script lang="ts">
  import { setLoader } from "$lib/dialog/store/dialog.js";
  import { DialogActions, DialogTypes } from "$lib/types/dialog.js";
  import { onMount } from "svelte";


    onMount(() => {
        setLoader(true, undefined, undefined, {
            title: "Info",
            type: DialogTypes.INFO,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae metus quis nisl rhoncus dapibus eu ac lacus",
            confirmButton: 'Confirm',
            [DialogActions.ONCONFIRM]() {
                console.log('confirm');
            },
        });
    });
</script>

<div>
    <h1>Test dialog</h1>
</div>