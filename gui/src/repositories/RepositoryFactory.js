import MobilRepository from './MobilRepository'
import TipeMobilRepository from './TipeMobilRepository'
import FotoRepository from './FotoRepository'
import TestimoniRepository from './TestimoniRepository'

const repo = {
    'mobil' : MobilRepository,
    'tipeMobil' : TipeMobilRepository,
    'foto' : FotoRepository,
    'testimoni' : TestimoniRepository
}

export default {
    get : name => repo[name]
};