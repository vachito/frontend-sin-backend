<script setup lang="ts">

const avat = [
    {
        imageUrl: 'https://github.com/shadcn.png',
        initials: 'AD',
        email: 'admin@dap.com'
    },
    {
        imageUrl: 'https://github.com/leerob.png',
        initials: 'RX',
        email: 'rxocoxic@dap.com'
    },
    {
        imageUrl: 'https://github.com/evilrabbit.png',
        initials: 'SM',
        email: 'smartinez@dap.com'
    },
]

</script>

<template>
  <div class="flex justify-around mt-16 w-11/12 mx-auto">
    <img src="../assets/img/DAP.png" alt="Logo dap" class="w-96 h-40" />
    <img src="../assets/img/Muni azul.png" alt="Logo Muni" class="w-48 h-48" />
  </div>

  <!-- <div class="-space-x-2">
      <GeneralAvatarTooltip v-for="item in avat" :avatar-tool="item" class="-space-x-2"/>
  </div> -->
</template>
