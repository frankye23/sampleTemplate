<template>
  <div class="container mx-auto">
    <input class="hidden" type="radio" id="box0" checked name="boxlist" />
    <input class="hidden" type="radio" id="box1" name="boxlist" />
    <input class="hidden" type="radio" id="box2" name="boxlist" />

    <div class="flex justify-center mt-10">
      <label class="mx-2 py-2 px-6 bg-gray-200 rounded-full cursor-pointer" for="box0">Box-0</label>
      <label class="mx-2 py-2 px-6 bg-gray-200 rounded-full cursor-pointer" for="box1">Box-1</label>
      <label class="mx-2 py-2 px-6 bg-gray-200 rounded-full cursor-pointer" for="box2">Box-2</label>
    </div>

    <div class="hidden p-8 items-center shadow-lg rounded-lg box0">
      <div class="w-3/5">
        <h2 class="text-2xl font-bold">0.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci repudiandae labore totam. Ipsam, porro, inventore dicta exercitationem hic deserunt earum provident ea quod natus sunt ratione alias minima eaque.</p>
        <button class="text-lg bg-black text-white rounded-full shadow py-2 px-5 mt-5 hover:scale-110 transform transition hover:bg-blue-600">Shop Now</button>
      </div>
      <div class="w-2/5">
        <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-family-select-2020?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604343709000" alt="" />
      </div>
    </div>

    <div class="hidden p-8 items-center shadow-lg rounded-lg box1">
      <div class="w-3/5">
        <h2 class="text-2xl font-bold">1.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci repudiandae labore totam. Ipsam, porro, inventore dicta exercitationem hic deserunt earum provident ea quod natus sunt ratione alias minima eaque.</p>
        <button class="text-lg bg-black text-white rounded-full shadow py-2 px-5 mt-5 hover:scale-110 transform transition hover:bg-blue-600">Shop Now</button>
      </div>
      <div class="w-2/5">
        <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-family-select-2020?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604343709000" alt="" />
      </div>
    </div>

    <div class="hidden p-8 items-center shadow-lg rounded-lg box2">
      <div class="w-3/5">
        <h2 class="text-2xl font-bold">2.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci repudiandae labore totam. Ipsam, porro, inventore dicta exercitationem hic deserunt earum provident ea quod natus sunt ratione alias minima eaque.</p>
        <button class="text-lg bg-black text-white rounded-full shadow py-2 px-5 mt-5 hover:scale-110 transform transition hover:bg-blue-600">Shop Now</button>
      </div>
      <div class="w-2/5">
        <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-family-select-2020?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604343709000" alt="" />
      </div>
    </div>
  </div>
</template>
<style>

</style>