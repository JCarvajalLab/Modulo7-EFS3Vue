import { createStore } from 'vuex'

export default createStore({
  state: {
    vinilos: {
      rap:[
        {
          id: 1,
          artist: "Tupac",
          category: "rap",
          album: "All Eyez on Me",
          image: "https://is5-ssl.mzstatic.com/image/thumb/Music/4f/49/20/dj.lbjggise.jpg/1000x1000bb.webp"
        },
        {
          id: 2,
          artist: "Tupac",
          category: "rap",
          album: "Greatest Hits",
          image: "https://upload.wikimedia.org/wikipedia/en/9/9b/2PacGreatestHits.jpg"
        },
        {
          id: 3,
          artist: "Kendrick Lamar",
          category: "rap",
          album: "DAMN.",
          image: "https://http2.mlstatic.com/D_NQ_NP_698747-MLU70045180118_062023-O.webp"
        },
        {
          id: 4,
          artist: "Kendrick Lamar",
          category: "rap",
          album: "good kid, m.A.A.d city",
          image: "https://m.media-amazon.com/images/I/81EYtj8oi3L._UF894,1000_QL80_.jpg"
        },
        {
          id: 5,
          artist: "Eminem",
          category: "rap",
          album: "The Marshall Mathers LP",
          image: "https://musiclife.cl/2181-superlarge_default/eminem-the-marshall-mathers-lp.webp"
        }
      ],
      pop:[
        {
          id: 6,
          artist: "Michel Jackson",
          category: "pop",
          album: "Thriller",
          image: "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/3c/60/903c6069-b321-563c-bbc5-28e26f8fb1bd/074643811224.jpg/1000x1000bb.webp"
        },
        {
          id: 7,
          artist: "Michel Jackson",
          category: "pop",
          album: "Bad",
          image: "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/d2/97/4c/d2974cc9-19cc-09a2-a359-7b8fe8cae377/886443546264.jpg/1000x1000bb.webp"
        },
        {
          id: 8,
          artist: "Madonna",
          category: "pop",
          album: "Madonna",
          image: "https://is2-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.ykiinwgl.jpg/1000x1000bb.webp"
        },
        {
          id: 9,
          artist: "Madonna",
          category: "pop",
          album: "Like a Virgin",
          image: "https://dojiw2m9tvv09.cloudfront.net/36300/product/0812279735995824.jpg"
        },
        {
          id: 10,
          artist: "Madonna",
          category: "pop",
          album: "Like a Virgin",
          image: "https://dojiw2m9tvv09.cloudfront.net/36300/product/0812279735995824.jpg"
        }
      ],
      rock: [
        {
          id: 11,
          artist: "Foo Fighters",
          category: "rock",
          album: "Greatest Hits",
          image: "https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/66/93/e1/6693e1ab-cfdc-5913-d5b7-f3b44d2a4714/dj.djjzfxdd.jpg/1000x1000bb.webp"
        },
        {
          id: 12,
          artist: "Metallica",
          category: "rock",
          album: "Master of Puppets",
          image: "https://cdnx.jumpseller.com/discos-mayra/image/12730700/resize/560/632?1631719683"
        },
        {
          id: 13,
          artist: "AC/DC",
          category: "rock",
          album: "Highway to Hell",
          image: "https://is4-ssl.mzstatic.com/image/thumb/Features6/v4/ee/bd/69/eebd6962-9b25-c177-c175-b3b3e641a29d/dj.edqjfvzd.jpg/1000x1000bb.webp"
        },
        {
          id: 14,
          artist: "AC/DC",
          category: "rock",
          album: "Back in Black",
          image: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/1000x1000bb.webp"
        },
        {
          id: 15,
          artist: "Deep Purple",
          category: "rock",
          album: "Machine Head",
          image: "https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/8b/1e/fa/8b1efa15-24c4-2190-5d7b-22e2945e281a/603497877393.jpg/1000x1000bb.webp"
        }
      ]
    }
  },
  getters: {
    getVinilosRap: state => state.vinilos.rap,
    getVinilosPop: state => state.vinilos.pop,
    getVinilosRock: state => state.vinilos.rock
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
