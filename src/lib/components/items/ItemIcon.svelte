<script lang="ts">
  import { itemTooltip, resetItemTooltip } from "$lib/items/tooltips.svelte";
  import { getResourceIcon } from "$lib/resources/helper";
  import { nanoid } from "nanoid";

  interface Props extends Item {
    buy?: () => void;
  }

  const id = nanoid();
  const props: Props = $props();
  const { icon, isCostSufficient, title, cost, buy } = props;

  const isShop = $derived(Boolean(buy));
</script>

<button
  class="size-16 bg-black/20 text-white flex items-center
  flex-col p-2"
  onclick={buy}
  class:isCostSufficient
  style="anchor-name: --anchor-{id};"
  onmouseenter={() => {
    itemTooltip.anchor = `--anchor-${id}`;
    itemTooltip.item = props;
  }}
  onmouseleave={resetItemTooltip}
>
  <img
    src={icon}
    alt={title}
    class="size-10 {isShop && 'grayscale-25 saturate-50'}"
  />
  {#if isShop}
    <div class="flex flex-col gap-2">
      {#each cost as { name, amount }}
        {@const resourceIcon = getResourceIcon(name)}
        <div class="flex items-center gap-1">
          <img src={resourceIcon} class="size-4" alt="" />
          <small>{amount}</small>
        </div>
      {/each}
    </div>
  {/if}
</button>

<style lang="postcss">
  .isCostSufficient {
    cursor: pointer;
    img {
      filter: none !important;
    }

    &:hover {
      background-color: #fff3 !important;
    }
  }
</style>
