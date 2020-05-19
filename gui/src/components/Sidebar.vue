<template>
    <v-list>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
    </v-list>
</template>

<script>
export default {
    data : () => ({
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Data Mobil', icon: 'mdi-car' },
          { title: 'Pemesanan', icon: 'mdi-currency-usd'},
          { title: 'Foto Mobil', icon: 'mdi-image' },
          { title: 'Testimoni', icon: 'mdi-comment-multiple'}
        ]
    })
}
</script>