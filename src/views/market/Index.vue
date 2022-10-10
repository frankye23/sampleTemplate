<template>
  <div>
    <div class="flex flex-col">
      <div class="">
        <div class="inline-block">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                    域名
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                    价格
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                    卖家
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                    剩余时间
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                    状态
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b" v-for="(items, index) in state.marketList" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ items.name }}</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ items.highest }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ items.nameHash }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ items.open }}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{ items.status }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, reactive  } from 'vue'
  import { getAuctionList, getMarket } from '@/api/auction'

  const state = reactive({
    marketList:[]
  })
  async function loadMarketList() {
    const params = {
      limit:20,
      offset:1,
      // status:'opening'
    }
    const res = await getMarket(params)
    if(res) {
      state.marketList = res.data.items
    }
  }


  onMounted(() => {
    loadMarketList()
  })
</script>