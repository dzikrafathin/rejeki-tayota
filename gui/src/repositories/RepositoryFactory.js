import MobilRepository from './MobilRepository'
import TipeMobilRepository from './TipeMobilRepository'
import FotoRepository from './FotoRepository'
import TestimoniRepository from './TestimoniRepository'
import UserRepository from './UserRepository'
import PemesananRepository from './PemesananRepository'

const repo = {
    'mobil' : MobilRepository,
    'tipeMobil' : TipeMobilRepository,
    'foto' : FotoRepository,
    'testimoni' : TestimoniRepository,
    'user' : UserRepository,
    'pemesanan' : PemesananRepository
}

export default {
    get : name => repo[name]
};