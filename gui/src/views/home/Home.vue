<template>
    <v-container fluid>
      <v-row
        justify="center"
      >
        <v-col
          md="8">
          <v-card>
            <v-row
              no-gutters
            >
              <v-col
                md="6"
              >
                <v-card-title
                  class="display-1"
                >
                  Rejeki Toyota
                </v-card-title>
                <v-card-text>
                  REJEKI TOYOTA adalah salah satu Authorized TOYOTA Dealer di Cirebon. 
                  Didirikan di Cirebon pada 18 Juli 2002 dengan nama REJEKI JAYA SENTOSA. 
                  Kemudian pada tanggal 1 Juli 2007 perusahaan melakukan re-managemen untuk meningkatkan pelayanan kepada pelanggan. 
                  Nama baru perusahaan menjadi PT. REJEKI JAYA MAKMUR SENTOSA dan dikenal dengan nama REJEKI TOYOTA.
                </v-card-text>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn 
                    text
                    to="/katalog"
                    color="primary"
                  >Lihat Daftar Mobil</v-btn>
                  <v-btn 
                    text
                    to="/pemesanan"
                    color="success"
                  >Pesan Mobil</v-btn>
                </v-card-actions>
              </v-col>
              <v-col
                md="6">
                <v-img
                  height="400px"
                  src="https://www.toyota-europe.com/logo.jpg"
                  contain
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>