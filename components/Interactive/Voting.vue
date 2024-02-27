<template>
  <div class="flex items-center">
    <UIcon
      name="i-heroicons-star-solid"
      :class="[
        `w-${props.size} h-${props.size} text-gray-200 cursor-pointer `,
        (item.isHover || item.isActive) && 'text-yellow-500',
      ]"
      v-for="item in votings"
      :key="item.id"
      @mouseover="onHover(item)"
      @mouseleave="onLeave"
      @click="onClick(item)"
    />
  </div>
</template>

<script setup lang="ts">
interface IVoting {
  id: number;
  isHover: boolean;
  isActive: boolean;
}
const votings = ref<IVoting[]>([
  {
    id: 1,
    isHover: false,
    isActive: false,
  },
  {
    id: 2,
    isHover: false,
    isActive: false,
  },
  {
    id: 3,
    isHover: false,
    isActive: false,
  },
  {
    id: 4,
    isHover: false,
    isActive: false,
  },
  {
    id: 5,
    isHover: false,
    isActive: false,
  },
]);

const emit = defineEmits(["ratingSelected"]);
const props = defineProps({
  ratingValue:{
    type:Number,
    required:true
  },
  readOnly:{
    type:Boolean,
    required:true
  },
  size:{
    type:Number,
    default:4
  }
});

/* watch(
  props,
  (prop) => {
    console.log({ prop:prop.ratingValue });

  },
  { deep: true }
); */

onMounted(() =>{
  if(props.ratingValue){
    if (props.ratingValue) {
      votings.value = votings.value.map((item) => {
        if (item.id <= props.ratingValue) {
          item.isActive = true;
        }
        return item;
      });
    }
  }
})

const isValid = computed(() => {
  if (props.readOnly) return false;

  return true;
});

const onHover = (data: IVoting) => {
  if (!isValid.value) return;
  votings.value = votings.value.map((item) => {
    if (item.id <= data.id) {
      item.isHover = true;
    } else {
      item.isHover = false;
    }

    return item;
  });
};

const onLeave = () => {
  if (!isValid.value) return;
  votings.value = votings.value.map((item) => {
    item.isHover = false;
    return item;
  });
};

const onClick = (data: IVoting) => {
  if (!isValid.value) return;
  let rating = 0;

  votings.value = votings.value.map((item) => {
    if (item.id <= data.id) {
      item.isActive = true;
      rating++;
    } else {
      item.isActive = false;
    }

    return item;
  });

  emit("ratingSelected", rating);
};
</script>

<style scoped></style>
