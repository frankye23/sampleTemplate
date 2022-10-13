<template>
  <div class="container">
    <input type="radio" name="tab" id="opening" class="hidden" checked />
    <input type="radio" name="tab" id="biding" class="hidden" />
    <input type="radio" name="tab" id="revealing" class="hidden" />

    <div class="my-4 nav">
      <label for="opening" @click="handleStatus('opening')">
        <span class="py-2 px-5 rounded-full inline-block">即将开始</span>
      </label>
      <label for="biding" @click="handleStatus('bidding')">
        <span class="py-2 px-5 rounded-full inline-block">竞价中</span>
      </label>
      <label for="revealing" @click="handleStatus('reveal')">
        <span class="py-2 px-5 rounded-full inline-block">揭示中</span>
      </label>
    </div>

    <div class="rounded-xl hidden tab-opening">
      <div class="w-full flex flex-col justify-center">
        
      </div>
    </div>

    <div class="rounded-xl hidden tab-biding">
      <div class="w-full flex flex-col justify-center">
        
      </div>

    </div>

    <div class="rounded-xl hidden tab-revealing">
      <div class="w-full flex flex-col justify-center">
        
      </div>

  </div>
</div>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits} from 'vue'
  const emit = defineEmits(['clickChild'])
//定义参数 已经选中的ITEMID
const props = defineProps({
  loadMarketList: {
    type: Function,
    default: Function,
    required: true,
  }
})

  const handleStatus = (data) => {
    props.loadMarketList(data)
  }
</script>

<style>
#opening:checked ~ .tab-opening{
  @apply flex;
}

#opening:checked ~ .nav label[for="opening"] span {
  @apply bg-gray-200;
}

#biding:checked ~ .tab-biding {
  @apply flex;
}

#biding:checked ~ .nav label[for="biding"] span {
  @apply bg-gray-200;
}

#revealing:checked ~ .tab-revealing {
  @apply flex;
}

#revealing:checked ~ .nav label[for="revealing"] span {
  @apply bg-gray-200;
}
</style>