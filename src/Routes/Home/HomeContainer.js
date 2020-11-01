import React from "react"
import { moviesApi } from "../../api"
import HomePresenter from "./HomePresenter"

// ? - 컨테이너 : data를 가지고, state(상태값)가지고, api를 불러와서 모든 로직을 처리함 (데이터 담당)
// ? - 프리젠터 : 컨테이너가 처리한 데이터들을 보여주는 역할을 하는 함수형 컴포넌트. 
// ?              state(상태값), api, 클래스를 다루지않음 (스타일 담당)

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null, 
    popular: null,
    error: null,
    loading: true
  }

  async componentDidMount() {
    try {
      const { 
        data: { results: nowPlaying } 
      } = await moviesApi.nowPlaying();
      // * JavaScript는 기본적으로 비동기 논블로킹 언어
      // * await를 붙이지 않고 nowPlaying 실행 시 response 객체가 아닌 Promise 객체가 return
      // * await를 붙이면 response의 성공/실패 여부에 상관없이 데이터를 받고난 후 나머지를 실행
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "Can't find movies information"
      })
    } finally
  {
    this.setState({
      loading: false
    })
  }  
}

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    )
  }
}