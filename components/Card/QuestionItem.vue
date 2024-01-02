<template>
  <div class="pb-4 mb-4 border-b border-slate-100">
    <div class="flex item-start gap-4">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div>
        <h4 class="text-sm font-medium pb-3 flex items-center gap-4">
          GoodThingTakeTime
          <div class="w-1 h-1 border border-gray-500 rounded-full"></div>
            <p class="text-xs text-gray-500 ">3 days ago</p>
          <CardIconItem name="i-heroicons-heart" :counting="1" />
        </h4>
        <h5 class="text-sm py-1 px-2 font-normal bg-slate-50 rounded-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          distinctio saepe est esse eius id laudantium laborum? Quasi eligendi,
          quaerat iure sed tenetur consequatur quidem quam quia, neque magnam
          beatae?
        </h5>
        <div class="flex items-center gap-3 mt-2">
          <p
            class="text-xs font-semibold text-blue-700 hover:underline cursor-pointer"
          >
            Like
          </p>
          <p
            class="text-xs font-semibold text-slate-600 hover:underline cursor-pointer"
          >
            Reply
          </p>
          <p
            class="text-xs font-semibold text-red-700 hover:underline cursor-pointer"
          >
            Report
          </p>
        </div>

        <!-- Reply -->
        <div class="flex item-start gap-4 mt-4">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
          />
          <div>
            <h4 class="text-sm font-medium pb-3 flex items-center gap-4">
              GoodThingTakeTime
            </h4>
            <h5 class="text-sm py-1 px-2 font-normal bg-slate-50 rounded-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              distinctio saepe est esse eius id laudantium laborum? Quasi
              eligendi, quaerat iure sed tenetur consequatur quidem quam quia,
              neque magnam beatae?
            </h5>
            <div class="flex items-center gap-3 mt-2">
              <p
                class="text-xs font-semibold text-red-700 hover:underline cursor-pointer"
              >
                Report
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
