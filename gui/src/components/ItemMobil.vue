<template>
       <v-list-item
        @click="drawer != drawer"
       >
        <v-list-item-avatar color="grey">
          <v-icon
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Nama Mobil</v-list-item-title>
          <v-list-item-subtitle>Deskripsi Mobil</v-list-item-subtitle>
        </v-list-item-content>

          <v-btn 
            
            color="success"
            class="ma-2"
            >
            <v-icon left color="white">mdi-pencil</v-icon>
            Ubah
          </v-btn>
          <v-btn 
            
            class="ma-2"
            color="error"
          >
            <v-icon left color="white">mdi-delete</v-icon>
            Hapus
          </v-btn>
        
      </v-list-item>
</template>

<script>
export default {
     data: () => ({
      drawer: null,
    }),
}
</script>