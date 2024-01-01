<template>
        <div class="border border-gray-200 rounded-md overflow-hidden cursor-pointer">
            <img src="@/assets/images/RiotX_ChampionList_ashe.jpg" width="auto" height="auto" alt="Image Thumbnail" class="h-48 w-full object-cover" /> 
            <div class="flex items-start justify-between px-4 pt-4">
               
                <h3 class="text-base font-medium flex-grow">
                    Spring Boot Folder Structure (Best Practices)</h3>
                <!-- <UBadge color="primary" variant="solid">Free</UBadge> -->
                <UBadge color="white" variant="solid">$5.00</UBadge>
            </div>
            <div class="px-4">
                <UBadge color="primary" variant="solid">Easy</UBadge>
            </div>
            <div class="px-4 text-sm text-gray-500 font-normal py-2 flex items-center gap-x-2">
                <p class="hover:underline">Spring boot</p>
                <div class="w-1 h-1 border border-gray-500 rounded-full"></div>
                <p class="hover:underline">RabbitMQ</p>
                <div class="w-1 h-1 border border-gray-500 rounded-full"></div>
                <p class="hover:underline">Redis</p>
            </div>
            <div class="px-4 text-xs text-gray-400 font-normal py-2">
                By <span class="text-sky-800 pl-1 underline cursor-pointer opacity-80 hover:opacity-100"> GoodThingTakeTime</span>
            </div>
          
          
           
     
            <div class="flex items-center justify-end gap-2 p-4">
                <CardIconItem name="i-heroicons-heart" :counting="1" />
            <CardIconItem name="i-heroicons-chat-bubble-bottom-center" :counting="4" />
            <CardIconItem name="i-heroicons-bookmark" />
            </div>
        </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>