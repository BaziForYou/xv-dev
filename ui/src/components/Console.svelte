<script lang="ts">
    import { luaOutput, execHistory } from "../store/stores";
    import { afterUpdate, onMount } from 'svelte';

    let luaOutputElement: HTMLTextAreaElement;

    export let showHistory: boolean = false;
    let currentContent: string = "";

    afterUpdate(() => {
		if(luaOutputElement) scrollToBottom(luaOutputElement);
    });


    const scrollToBottom = async (node) => {
    node.scroll({ top: (node.scrollHeight), behavior: 'auto' });
  }; 

    luaOutput.subscribe((value) => {
        if (luaOutputElement) {
            if (!showHistory) {
                currentContent = value;
            }
            scrollToBottom(luaOutputElement);
        }
    });
    
    onMount(() => {
        if (luaOutputElement) {
            if (!showHistory) {
                currentContent = $luaOutput;
            } else {
                currentContent = $execHistory;
            }
            scrollToBottom(luaOutputElement);
        }
    });

    execHistory.subscribe((value) => {
        if (luaOutputElement) {
            if (showHistory) {
                currentContent = value;
            }
            scrollToBottom(luaOutputElement);
        }
    });





</script>

<div class="w-[95%] h-[30%] rounded-[1rem] relative mx-5 self-end self-baseline bottom-0">
    <p class="text mb-3 mt-5 text-start">Console</p>
    <textarea bind:this={luaOutputElement} readonly bind:value={currentContent} class="w-full h-full p-5 overflow-y-scroll scrollbar-hide " placeholder="Output will be here"></textarea>
</div>


<style>

*::-webkit-scrollbar {
    display: none;
}


textarea {
    resize: none;
    background-color: var(--color-secondary);
    color: var(--color-tertiary);
    font-family: monospace, monospace;
}


textarea:focus {
    outline: none;
}

.scrollbar-hide::-webkit-scrollbar {
display: none;
}



.text {
    color: var(--color-tertiary);
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 1px;
}


</style>
