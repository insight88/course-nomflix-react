import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cdfa235128fbf3df2cc9b836886af0a5",
    language: "en-US"
  }
})
// * axios.create() : axios instance 생성
// * params : URL에 query 형태로 표시되는 parameter, ex) ?language=en-US?api_key=...

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  // * api.get()에서 주소가 /로 시작하면 절대경로, 문자로 시작하면 상대경로
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
        // * encodeURIComponent(term) : URI의 문자를 UTF-8로 인코딩한 새로운 문자열을 return
      }
    })
}

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
}